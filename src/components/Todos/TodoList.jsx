import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  Table,
  Tooltip,
} from "antd";
import {
  BlueEditIcon,
  ButtonContainer,
  TableTile,
  TodoListContainer,
  TopRowTable,
} from "./Todo-style";
import {
  DeleteOutlined,
  EyeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { editTask, getAllTodos, searchTask } from "../../actions/TodoActions";
import { MODAL_TYPES, STATUS_COLORS, TODO_STATUS } from "./Constants";
import TodoModal from "./TodoModal";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const TodoList = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Badge
          color={STATUS_COLORS[status]}
          text={Object.keys(TODO_STATUS).find(
            (key) => TODO_STATUS[key] === status
          )}
        />
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (dueDate) => dayjs(dueDate).format("YYYY MMM DD"),
    },
    {
      title: "Complete",
      dataIndex: "complete",
      key: "complete",
      render: (text, record) => (
        <Button
          type="primary"
          size="small"
          onClick={() => toggleChecked(record)}
          style={{
            backgroundColor: record.status === TODO_STATUS.Completed ? "green" : "red",
            borderColor: record.status === TODO_STATUS.Completed ? "green" : "red",
          }}
        >
          {record.status === TODO_STATUS.Completed ? "Completed": "Created"}
        </Button>
      ),
    },
    {
      title: "Action",
      dataIndex: "todoActions",
      render: (data, item) => (
        <ButtonContainer>
          <Tooltip title="View Task">
            <Button
              type="text"
              onClick={() => handleTaskModal(MODAL_TYPES.VIEW, item)}
            >
              <EyeOutlined />
            </Button>
          </Tooltip>
          <Tooltip title="Edit Task">
            <Button type="text" onClick={() => handleTaskEdit(item)}>
              <BlueEditIcon style={{ color: "blue" }} />
            </Button>
          </Tooltip>
          <Tooltip title="Delete Task">
            <Button
              type="text"
              danger
              onClick={() => handleTaskModal(MODAL_TYPES.DELETE, item)}
            >
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </ButtonContainer>
      ),
    },
  ];
  const [todos, settodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filterBy, setFilterBy] = useState({
    text: "",
    status: null,
    dueDate: null,
  });
  const navigator = useNavigate();
  const fetchData = async () => {
    settodos(await getAllTodos());
  };

  const handleTaskModal = (type, Task) => {
    setModalType(type);
    setIsModalOpen(true);
    setSelectedTask(Task);
  };

  const handleTaskEdit = (Task) => {
    navigator(`/todo/edit/${Task.id}`, { state: Task });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const toggleChecked = async (task) => {
    const updatedStatus =
      task.status === TODO_STATUS.Completed
        ? TODO_STATUS.Pending
        : TODO_STATUS.Completed;
    task.status = updatedStatus;
    await editTask(task, task.id);
    fetchData();
  };

  const onSearch = (name, value) => {
    setFilterBy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSearch = () => {
    searchTask(filterBy).then((data) => {
      settodos(data);
    });
  };
  const clearFilter = () => {
    setFilterBy({
      text: "",
      status: null,
      dueDate: null,
    });
    fetchData();
  };

  return (
    <TodoListContainer>
      <TopRowTable>
        <TableTile>
          <UnorderedListOutlined /> Todos
        </TableTile>
      </TopRowTable>
      <Row gutter={16} justify="end">
        <Col span={6}>
          {" "}
          <Input
            name="text"
            placeholder="Search By Text"
            onChange={(e) => onSearch(e.target.name, e.target.value)}
            value={filterBy.text}
          />
        </Col>
        <Col span={6}>
          <DatePicker
            name="dueDate"
            placeholder="Search by Due Date"
            onChange={(date) => onSearch("dueDate", date)}
            value={filterBy.dueDate}
            style={{ width: "100%" }}
          />
        </Col>
        <Col span={6}>
          <Select
            name="status"
            placeholder="Search By Status"
            value={filterBy.status}
            onChange={(value) => onSearch("status", value)}
            style={{ width: "100%" }}
          >
            <Select.Option value="">Search By Status</Select.Option>
            <Select.Option value={TODO_STATUS.Pending}>Pending</Select.Option>
            <Select.Option value={TODO_STATUS.InProgress}>
              In Progress
            </Select.Option>
            <Select.Option value={TODO_STATUS.Completed}>
              Completed
            </Select.Option>
          </Select>
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </Col>
        <Col span={2}>
          <Button onClick={clearFilter}>Clear</Button>
        </Col>
      </Row>
      <Table dataSource={todos} columns={columns} scroll={{ x: true }} />
      <TodoModal
        handleOk={handleOk}
        isModalOpen={isModalOpen}
        type={modalType}
        todoData={selectedTask}
      />
    </TodoListContainer>
  );
};

export default TodoList;
