import React, { useState } from 'react';
import { Select } from 'antd';

function TabDescription({ body }) {
  const [selectedLanguage, setSelectedLanguage] = useState('_en');
  const { Option } = Select;
  return (
    <div className="px-2 py-4">
      <div className="flex items-center pb-2 justify-end">
        <div className="mr-2">Select Language:</div>
        <Select
          className="font-bold"
          defaultValue={selectedLanguage}
          style={{ width: 120 }}
          onChange={(value) => {
            setSelectedLanguage(value);
          }}
        >
          <Option value="_en">English</Option>
          <Option value="_id">Bahasa Indonesia</Option>
        </Select>
      </div>
      <div
        className="leading-8"
        dangerouslySetInnerHTML={{
          __html: `${body?.[selectedLanguage] || 'No description'}`,
        }}
      ></div>
    </div>
  );
}

export default TabDescription;
