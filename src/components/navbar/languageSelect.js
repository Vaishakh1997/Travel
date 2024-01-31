import { Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelect() {
  const { Option } = Select;
  const { i18n } = useTranslation();

  function handleChange(value) {
    i18n.changeLanguage(value);
  }
  return (
    <Select defaultValue="_en" style={{ width: 120 }} onChange={handleChange}>
      <Option value="_en">
        <span className="text-base flag-icon flag-icon-us mr-2"></span>
        <span className="text-xs">English</span>
      </Option>
      <Option value="_id">
        <span className="text-base flag-icon flag-icon-id mr-2"></span>
        <span className="text-xs">Bahasa Indonesia</span>
      </Option>
    </Select>
  );
}

export default LanguageSelect;
