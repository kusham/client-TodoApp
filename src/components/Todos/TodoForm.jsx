import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { Input, Button, Row, Col, Form, Select, DatePicker } from "antd";
import { validationSchema } from "../../utils/TodoFormValidation";
import { ButtonRow, FormContainer } from "./Todo-style";
import { ACTION_TYPES, TODO_STATUS } from "./Constants";
import { addTask, editTask } from "../../actions/TodoActions";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
const initialValues = {
  title: "",
  description: "",
  dueDate: null,
  status: null,
};
const TodoForm = ({ closeModel, todoData, type }) => {
  console.log("🚀 ~ TodoForm ~ todoData:", todoData)
  const navigator = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    if (type === ACTION_TYPES.ADD) {
      addTask(values);
    } else if (type === ACTION_TYPES.EDIT) {
      editTask(values, todoData.id).then(() => {
        navigator("/todos");
      });
    }
    resetForm();
    closeModel();
  };
  useEffect(() => {
    if(todoData) {
      initialValues.dueDate = dayjs(todoData.dueDate);
    }
  }, [todoData]);
  return (
    <Formik
      initialValues={todoData ? {
        ...todoData,
        dueDate: dayjs(todoData.dueDate)
      } : initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, resetForm, handleBlur, handleChange, setFieldValue }) => (
        <FormContainer>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                validateStatus={errors.title && touched.title ? "error" : ""}
                help={errors.title && touched.title ? errors.title : null}
              >
                <Field name="title" as={Input} placeholder="Title" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                validateStatus={
                  errors.dueDate && touched.dueDate ? "error" : ""
                }
                help={errors.dueDate && touched.dueDate ? errors.dueDate : null}
              >
                <Field name="dueDate">
                  {({ field, form }) => (
                    <DatePicker
                      {...field}
                      placeholder="Select Due Date"
                      onChange={(date) => form.setFieldValue("dueDate", date)}
                      onBlur={() => form.setFieldTouched("dueDate", true)}
                      value={values.dueDate}
                      style={{ width: "100%" }}
                    />
                  )}
                </Field>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Select
                name="status"
                placeholder="Select Status"
                value={values.status}
                onChange={(value) => setFieldValue("status", value)}
                onBlur={handleBlur}
                style={{ width: "100%" }}
              >
                <Select.Option value={TODO_STATUS.Pending}>
                  Pending
                </Select.Option>
                <Select.Option value={TODO_STATUS.InProgress}>
                  In Progress
                </Select.Option>
                <Select.Option value={TODO_STATUS.Completed}>
                  Completed
                </Select.Option>
              </Select>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                validateStatus={
                  errors.description && touched.description ? "error" : ""
                }
                help={
                  errors.description && touched.description
                    ? errors.description
                    : null
                }
              >
                <Field
                  as={Input}
                  name="description"
                  placeholder="Description"
                />
              </Form.Item>
            </Col>
          </Row>

          <ButtonRow>
            {type === ACTION_TYPES.EDIT && (
              <Button
                onClick={() => {
                  resetForm();
                }}
              >
                Cancel
              </Button>
            )}

            <Button type="primary" htmlType="submit">
              {type === ACTION_TYPES.ADD ? "Add" : "Edit"}
            </Button>
          </ButtonRow>
        </FormContainer>
      )}
    </Formik>
  );
};

export default TodoForm;
