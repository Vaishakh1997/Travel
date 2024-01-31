import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Spin } from 'antd';
import { BiArrowBack, BiRightArrowAlt } from 'react-icons/bi';
import { LoadingOutlined } from '@ant-design/icons';
import Layout from '../../layouts/centered';
import CenteredForm from '../../layouts/centered-form';
import {
  logoutRequestAction,
  resetPasswordRequestAction,
} from '../../store/actions/authActions';
import { isEmpty } from '../../utils/generic';
import history from '../../utils/history';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [resetPasswordForm] = Form.useForm();
  const search = useLocation().search;
  const reset_token = new URLSearchParams(search).get('reset_token');
  const email = new URLSearchParams(search).get('email');
  const auth = useSelector((state) => state.auth);
  const onFinish = ({ password }) => {
    resetPasswordForm.resetFields();
    dispatch(resetPasswordRequestAction({ reset_token, email, password }));
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  console.log(email);
  useEffect(() => {
    dispatch(logoutRequestAction());
  }, []); // eslint-disable-line
  if (isEmpty(reset_token)) {
    history.push('/forgot-password');
    return <></>;
  } else {
    return (
      <Layout>
        <CenteredForm
          title="Please enter your new password"
        // subtitle="Please create a new strong password"
        >
          <div className="flex flex-col">
            {auth.resetPasswordSuccess ? (
              <div className="pb-2">
                <div className="font-bold text-lg mb-3 leading-none text-green-anak">
                  Password updated successfully.
                </div>
                <div className="text-sm mb-4">
                  You have successfully changed your account password. Please
                  use your new password to login to the system.
                </div>
                <Button type="success" size="large">
                  <Link
                    to="/login"
                    className="font-bold flex items-center justify-center"
                  >
                    Proceed to login!{' '}
                    <BiRightArrowAlt className="ml-2 text-xl" />
                  </Link>
                </Button>
              </div>
            ) : (
              <Form
                name="basic"
                form={resetPasswordForm}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="password"
                  label="New Password"
                  className="mb-6"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        const rePassword =
                          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi;
                        if (rePassword.test(value)) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            'Password must contain alphabets & numbers (Min 8 characters)'
                          )
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input.Password size="large" />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Confirm New Password"
                  className="mb-8"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error(
                            'New Password and Confirm Password are not Matching!'
                          )
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input.Password size="large" />
                </Form.Item>

                <Form.Item className="mb-4">
                  <Button
                    type="success"
                    size="large"
                    htmlType="submit"
                    block
                    icon={
                      auth.resetPasswordLoading ? (
                        <Spin
                          indicator={
                            <LoadingOutlined
                              size={22}
                              className="mr-2 mb-1 text-white"
                              spin
                            />
                          }
                        />
                      ) : (
                        ''
                      )
                    }
                  >
                    Set New Password
                  </Button>
                </Form.Item>

                <div className="block text-center text-sm">
                  <Link
                    to="/login"
                    className="text-blue-anak font-bold flex items-center justify-center"
                  >
                    <BiArrowBack className="mr-2" /> Back to login!
                  </Link>
                </div>
              </Form>
            )}
          </div>
        </CenteredForm>
      </Layout>
    );
  }
};

export default ResetPassword;
