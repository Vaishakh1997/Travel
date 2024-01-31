import React, { useState } from 'react';
import Switch from 'react-switch';
import { getColor } from '../../utils/colors';

const ToggleSwitch = ({ initialState = false, color = 'blue' }) => {
  const [checked, handleChange] = useState(initialState);
  let onColor = `bg-${color}-anak`;
  let onHandleColor = `bg-white`;
  let offColor = `bg-grey-300`;
  let offHandleColor = 'bg-white';
  const handleChangeState = () => {
    handleChange(!checked);
    console.log('ToggleSwitch', checked);
  };

  return (
    <div>
      <Switch
        onChange={handleChangeState}
        checked={checked}
        onColor={getColor(onColor)}
        onHandleColor={getColor(onHandleColor)}
        offColor={getColor(offColor)}
        offHandleColor={getColor(offHandleColor)}
        handleDiameter={18}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
        activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
        height={22}
        width={48}
        className="react-switch"
      />
    </div>
  );
};

export default ToggleSwitch;
