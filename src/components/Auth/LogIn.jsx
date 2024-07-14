import { Card, Col, Form, Input, Layout, Row } from "antd";
import React from "react";
import Footer from "../../Layouts/Footer";
import { Link } from "react-router-dom";
import { CustomLayout } from "../../Layouts/Layout-style";
import {
  AuthButton,
  CardAction,
  CardContent,
  CardTitle,
  CardWrapper,
} from "./Auth-style";
import { UnlockOutlined } from "@ant-design/icons";
import { FormContainer } from "../Todos/Todo-style";
import { Field, Formik } from "formik";
import { loginValidationSchema } from "../../utils/AuthValidation";
import { login } from "../../actions/AuthActions";

const initialValues = {
  userName: "",
  password: "",
};

const LogIn = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("🚀 ~ handleSubmit ~ values:", values)
    login(values, navigateToDashBoard);
    resetForm();
  };

  const navigateToDashBoard = () => {
    // here it should re direct to the dashboard,
    // but for now it will redirect to the TodoLists
    window.location.replace("/todos");
  };
  return (
    <CustomLayout>
      <Layout.Header />
      <Layout.Content>
        <CardWrapper>
          <Card>
            <CardTitle>
              <UnlockOutlined />
              <h1>Log In</h1>
            </CardTitle>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <FormContainer>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item
                          validateStatus={
                            errors.userName && touched.userName ? "error" : ""
                          }
                          help={
                            errors.userName && touched.userName ? errors.userName : null
                          }
                        >
                          <Field name="userName" as={Input} placeholder="User Name" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item
                          validateStatus={
                            errors.password && touched.password ? "error" : ""
                          }
                          help={
                            errors.password && touched.password
                              ? errors.password
                              : null
                          }
                        >
                          <Field
                            name="password"
                            as={Input}
                            placeholder="Password"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <AuthButton type="primary" htmlType="submit">
                      Log In
                    </AuthButton>
                    <CardAction>
                      Don't have an account ?
                      <Link to="/signUp">
                        <span> Sign up </span>
                      </Link>
                    </CardAction>
                  </FormContainer>
                )}
              </Formik>
            </CardContent>
          </Card>
        </CardWrapper>
      </Layout.Content>

      <Footer />
    </CustomLayout>
  );
};

export default LogIn;
