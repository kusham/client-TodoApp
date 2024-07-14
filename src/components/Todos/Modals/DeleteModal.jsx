import { Modal } from "antd";
import React from "react";
import { DeleteModalContent } from "../Todo-style";
import { deleteTask } from "../../../actions/TodoActions";

const DeleteModal = ({ isModalOpen, handleOk, todoData }) => {
  const handleDelete = () => {
    deleteTask(todoData.id);
    handleOk();
  };
  return (
    <Modal
      open={isModalOpen}
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No"
      okType="danger"
      onOk={handleDelete}
      onCancel={handleOk}
      closeIcon={false}
      maskClosable={false}
    >
      <DeleteModalContent>
        The tile of the task you are trying to delete is
        <span> {todoData?.title} </span>. This action
        <b> cannot be undone.</b>
      </DeleteModalContent>
    </Modal>
  );
};

export default DeleteModal;
