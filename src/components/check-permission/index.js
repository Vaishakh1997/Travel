import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../utils/generic';

export function CheckPermission({ permission, children }) {
  const { currentUser } = useSelector((state) => state.auth);
  const hasPermissionArray = currentUser?.permissions?.filter(
    (item) => item.codename === permission
  );
  if (!isEmpty(hasPermissionArray)) {
    return <>{children}</>;
  } else return <></>;
}
