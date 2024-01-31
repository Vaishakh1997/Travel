import React from 'react';
import { useSelector } from 'react-redux';

export default function CopyrightStatement() {
  let { config } = useSelector((state) => ({ config: state.config }));
  return (
    <>
      &copy; {`${new Date().getFullYear()} ${config.name}. All right reserved.`}
    </>
  );
}
