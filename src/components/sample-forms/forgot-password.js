import React from 'react';
import { Button, Form, Input } from 'antd';

const ForgotPassword = ({ message = null }) => {
  // const [data, onSubmit] = useState(null);

  // let items = [
  //   {
  //     label: 'Email',
  //     error: { required: 'Please enter a valid email' },
  //     name: 'email',
  //     type: 'email',
  //     placeholder: 'Enter registered email',
  //   },
  // ];
  return (
    <>
      <div className="flex flex-col">
        {/* <div className="w-full mt-6">
          <Alert
            message={<div className="font-bold">Reset password link sent</div>}
            description={message}
            type="success"
            showIcon
          />
        </div> */}

        <Form layout="vertical mt-6">
          <Form.Item label="Email ID" className="mb-6">
            <Input
              type="email"
              size="large"
              placeholder="please enter registered email"
            />
          </Form.Item>

          <Form.Item className="mb-0">
            <Button type="success" size="large" block>
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
