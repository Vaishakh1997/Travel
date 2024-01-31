import React from 'react';
import Layout from '../../layouts/centered';
import CenteredForm from '../../layouts/centered-form';
import { Alert, Button, Form, Input, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordRequestAction } from '../../store/actions/authActions';
import { LoadingOutlined } from '@ant-design/icons';
import { BiArrowBack } from 'react-icons/bi';
import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Index = () => {
  const dispatch = useDispatch();
  const { forgotPasswordLoading, forgotPasswordError, forgotPasswordSuccess } =
    useSelector((state) => state.auth);
  const formHandler = ({ email }) => {
    dispatch(forgotPasswordRequestAction(email));
  };

  return (
    <Layout>
      <CenteredForm
        title="Forgot Password?"
        subtitle="Enter your Email and instructions will be sent to you."
      >
        <div className="flex flex-col">
          {forgotPasswordSuccess ? (
            <div className="w-full mt-0 mb-6">
              <Alert
                message={
                  <div className="font-bold text-lg mb-2 leading-tight">
                    Reset password link sent.
                  </div>
                }
                description={
                  <div className="text-sm">
                    Reset password link sent to registered email address please
                    check your inbox to reset password.
                  </div>
                }
                type="success"
                icon={<BsCheckCircleFill />}
                showIcon
                // closable
              />
            </div>
          ) : (
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={formHandler}
              autoComplete="off"
            >
              <Form.Item
                label="Email ID"
                className="font-bold mb-8"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                    type: 'email',
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your email id" />
              </Form.Item>
              <Form.Item className="mb-3">
                <Button
                  type="success"
                  htmlType="submit"
                  className="w-full flex items-center justify-center"
                  size="large"
                  block
                  icon={
                    forgotPasswordLoading ? (
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
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}

          {forgotPasswordError && (
            <div className="w-full mt-0 mb-6">
              <Alert
                message={
                  <div className="font-bold text-lg mb-2 leading-tight">
                    Reset password failed.
                  </div>
                }
                description={
                  <div className="text-sm">
                    Please check the email is registered with the system for
                    resetting the password.
                  </div>
                }
                type="error"
                icon={<BsFillXCircleFill />}
                showIcon
                closable
              />
            </div>
          )}

          <div className="block text-center text-sm">
            <Link
              to="/login"
              className="text-blue-anak font-bold flex items-center justify-center"
            >
              <BiArrowBack className="mr-2" /> Back to login!
            </Link>
          </div>
        </div>
      </CenteredForm>
    </Layout>
  );
};

export default Index;
