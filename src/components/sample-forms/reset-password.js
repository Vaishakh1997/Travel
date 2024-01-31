import React, { useState } from 'react'
// import Validation from '../forms/validation'
// import Alert from '../alerts'
import { Form, Input, Button } from 'antd';

const ResetPassword = ({ message = null }) => {

  return (
    <>
      <div className="flex flex-col">
        {/* {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised>
              {message}
            </Alert>
          </div>
        )} */}

        <Form layout="vertical mt-6">
          <Form.Item label="New Password" className="mb-6">
            <Input.Password type="password" size="large" />
          </Form.Item>

          <Form.Item label="Confirm Password" className="mb-8">
            <Input.Password type="password" size="large" />
          </Form.Item>

          <Form.Item className="mb-4">
            <Button type="success" size="large" block>Reset Password</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default ResetPassword
