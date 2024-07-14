import React from "react";
import { signUp } from "../../actions/AuthActions";
import { CustomLayout } from "../../Layouts/Layout-style";
import { Card, Col, Form, Input, Layout, Row } from "antd";
import {
  AuthButton,
  CardAction,
  CardContent,
  CardTitle,
  CardWrapper,
} from "./Auth-style";
import { UnlockOutlined } from "@ant-design/icons";
import { Field, Formik } from "formik";
import { FormContainer } from "../Todos/Todo-style";
import { signupValidationSchema } from "../../utils/AuthValidation";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Layouts/Footer";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    signUp(values, navigateToLogin);
    resetForm();
  };

  const navigateToLogin = () => {
    navigate("/");
  };
  return (
    <CustomLayout>
      <Layout.Header />
      <Layout.Content>
        <CardWrapper>
          <Card>
            <CardTitle>
              <UnlockOutlined />
              <h1>Sign Up</h1>
            </CardTitle>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={signupValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <FormContainer>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          validateStatus={
                            errors.firstName && touched.firstName ? "error" : ""
                          }
                          help={
                            errors.firstName && touched.firstName
                              ? errors.firstName
                              : null
                          }
                        >
                          <Field
                            name="firstName"
                            as={Input}
                            placeholder="First Name"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          validateStatus={
                            errors.lastName && touched.lastName ? "error" : ""
                          }
                          help={
                            errors.lastName && touched.lastName ? errors.lastName : null
                          }
                        >
                          <Field
                            name="lastName"
                            as={Input}
                            placeholder="Last Name"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          validateStatus={
                            errors.userName && touched.userName ? "error" : ""
                          }
                          help={
                            errors.userName && touched.userName
                              ? errors.userName
                              : null
                          }
                        >
                          <Field
                            name="userName"
                            as={Input}
                            placeholder="User Name"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          validateStatus={
                            errors.phoneNumber && touched.phoneNumber ? "error" : ""
                          }
                          help={
                            errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null
                          }
                        >
                          <Field
                            name="phoneNumber"
                            as={Input}
                            placeholder="Phone Number"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item
                          validateStatus={
                            errors.email && touched.email ? "error" : ""
                          }
                          help={
                            errors.email && touched.email ? errors.email : null
                          }
                        >
                          <Field name="email" as={Input} placeholder="Email" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
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
                      <Col span={12}>
                        <Form.Item
                          validateStatus={
                            errors.confirmPassword && touched.confirmPassword
                              ? "error"
                              : ""
                          }
                          help={
                            errors.confirmPassword && touched.confirmPassword
                              ? errors.confirmPassword
                              : null
                          }
                        >
                          <Field
                            name="confirmPassword"
                            as={Input}
                            placeholder="Confirm Password"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <AuthButton type="primary" htmlType="submit">
                      Sign Up
                    </AuthButton>
                    <CardAction>
                      Already have an account ?
                      <Link to="/">
                        {" "}
                        <span> Login </span>
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

export default SignUp;
