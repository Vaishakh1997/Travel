import React, { useState } from "react";
import Validation from "../forms/validation";
import Alert from "../alerts";

const Login = ({ message = null }) => {
  const [data, onSubmit] = useState(null);
  let items = [
    {
      label: "Username",
      error: { required: "Please enter a valid username" },
      name: "username",
      type: "text",
      placeholder: "Enter username",
    },
    {
      label: "Password",
      error: {
        required: "Password is required",
        minLength: {
          value: 4,
          message: "Your password should have at least 4 characters",
        },
        maxLength: {
          value: 8,
          message: "Your password should have no more than 8 characters",
        },
      },
      name: "password",
      type: "password",
      placeholder: "Enter password",
    },
    {
      inline: false,
      name: "Remember me",
      type: "checkbox",
      options: [{ value: 0, name: "checkbox1", label: "Remember me" }],
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised
            >
              {message}
            </Alert>
          </div>
        )}
        <Validation items={items} onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default Login;
