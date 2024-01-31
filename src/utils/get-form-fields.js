import React from 'react';
import { Input, Radio, Select, Divider } from 'antd';

const getFormFields = (form) => {
  const { Option } = Select;
  switch (form.type) {
    case 'text':
      return <Input type="text" size="large" placeholder="Type here..." />;
    case 'dropdown':
      return (
        <Select size="large" placeholder="Select ">
          {form?.options.map((option, index) => (
            <Option key={index} value={option.code}>
              {option.name}
            </Option>
          ))}
        </Select>
      );
    case 'radio':
      return (
        <Radio.Group value={form.value}>
          {form?.options.map((option, index) => (
            <Radio key={index} value={option.code}>
              {option.name}
            </Radio>
          ))}
        </Radio.Group>
      );
    case 'date':
      return <Input size="large" type="date" placeholder="Select Date" onKeyDown={(e) => e.preventDefault()} />;
    case 'seperator':
      return <Divider className="my-0" />
    case 'title':
      if(form.value === "ID Document")
        return <div>Extracted from <span className="px-4 py-1 text-sm font-bold rounded-full bg-green-200 text-green-500 bg-opacity-25 ml-2">{form?.value}</span></div>
      else
        return <div>Extracted from <span className="px-4 py-1 text-sm font-bold rounded-full bg-blue-anaklite text-blue-anaklite ml-2">{form?.value}</span></div>
    default:
      return <p>Fail to load form</p>;
  }
};

export default getFormFields;
