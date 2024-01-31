import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/centered';
import CenteredForm from '../../layouts/centered-form';
import { AiOutlineLock } from 'react-icons/ai';
import { Form, Input, Button, Checkbox, Spin, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../../store/actions/authActions';
import { capitalizeFirstLetter } from '../../utils/string-helpers';

const Login = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const onFinish = (credentials) => {
    dispatch(loginRequestAction(credentials));
  };

  const onFinishFailed = (errorInfo) => { };

  return (
    // <Layout>
      <CenteredForm
        title="Welcome back!"
        subtitle="SignIn to continue to WINDS Travel"
      >
        <Spin tip="Validating..." spinning={auth.loginLoading}>
          {auth.loginError && (
            <div className="mb-6">
              <Alert
                message={capitalizeFirstLetter(auth.loginError)}
                type="error"
                showIcon
                closable
              />
            </div>
          )}

          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              className="font-bold mb-6"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please input valid email id!' },
              ]}
            >
              <Input size="large" placeholder="Enter your email id" />
            </Form.Item>

            <Form.Item
              label="Password"
              className="font-bold mb-6"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="font-bold checkbox-orange">Remember me</Checkbox>
            </Form.Item>

            <Form.Item className="mb-3">
              <Button
                type="success"
                htmlType="submit"
                className="w-full btn-primary"
                size="large"
                block
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Spin>
        <div className="w-full font-bold flex items-center justify-center">
          <Link
            className="link flex justify-center items-center"
            to="/forgot-password"
          >
            <AiOutlineLock className="pr-1" size={18} />
            <div className="text-sm leading-none">Forgot password?</div>
          </Link>
        </div>
      </CenteredForm>
    // </Layout>
  );
};

export default Login;
