import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import {
  Button,
  Drawer,
  Form,
  Input,
  Modal,
  Select,
  Radio,
  Avatar,
  Spin,
  Alert,
} from 'antd';
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  changeSystemUserStatusAction,
  editSystemUserAction,
  resetSystemUserPasswordAction,
} from '../../store/actions/systemUsersActions';
import { useParams } from 'react-router-dom';
import { utcToLocalDateTime } from '../../utils/dateFormat';
import { useTranslation } from 'react-i18next';
import { camelCaseString } from '../../utils/string-helpers';
import { listRoles } from '../../store/actions/rolesPermissionActions';
import { isEmpty } from '../../utils/generic';
import { getSystemUserStatus } from '../../utils/get-system-user-status';

const SystemUserProfileHeader = ({ userDetails }) => {
  const { uuid } = useParams();
  const dispatch = useDispatch();
  const { systemUsers, auth, rolesPermission } = useSelector(
    (state) => ({
      systemUsers: state.systemUsers,
      auth: state.auth,
      rolesPermission: state.rolesPermission,
    }),
    shallowEqual
  );
  const { editUserLoading, changeUserStatusLoading } = systemUsers;
  const { forgotPasswordLoading } = auth;
  const { roles, rolesLoading } = rolesPermission;
  const [userStatusDrawer, setUserStatusDrawer] = useState(false);
  const [editProfileDrawer, setEditProfileDrawer] = useState(false);
  const [resetPasswordDrawer, setResetPasswordDrawer] = useState(false);
  const [confirmUserStatus, setConfirmUserStatus] = useState(false);
  const [userStatus, setUserStatus] = useState(userDetails?.status);
  const [emailNotMatchAlert, setEmailNotMatchAlert] = useState(false);
  const { Option } = Select;
  const { t } = useTranslation();

  const onResetPasswordFinish = ({ email }) => {
    if (userDetails.user_detail.email === email) {
      dispatch(resetSystemUserPasswordAction(email));
      setResetPasswordDrawer(false);
      passwordForm.resetFields();
    } else {
      setEmailNotMatchAlert(true);
    }
  };

  const getButtonText = (userStatus) => {
    switch (userStatus) {
      case 1:
        return "Active User"
      case 2:
        return "Suspend User"
      case 3:
        return "Delete User"
      default:
        break;
    }
  }

  const editSystemUserInitialValue = {
    name: userDetails?.name,
    email: userDetails?.user_detail?.email,
    role: userDetails?.user_detail?.role[0],
  };
  const [editUserForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [confirmWithEmailForm] = Form.useForm();
  let updatedFormValue = {};
  const changeInFormValueHandler = (changes) => {
    changes
      .filter((item) => item.touched)
      .map((item) => (updatedFormValue[item.name[0]] = item.value));
  };
  const onEditProfileFinish = () => {
    dispatch(editSystemUserAction(updatedFormValue, uuid));
    setEditProfileDrawer(false);
  };
  const userStatusHandler = ({ email }) => {
    if (userDetails.user_detail.email === email) {
      dispatch(changeSystemUserStatusAction(userStatus, uuid));
      setConfirmUserStatus(false);
      setUserStatusDrawer(false);
    } else {
      setEmailNotMatchAlert(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-start w-full user-widget-2 relative z-10">
      <div className="w-full bottom-section md:px-8">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-shrink-0 w-full sm:w-1/5">
            {userDetails?.profile_image ? (
              <div
                className="flex justify-center items-center w-24 h-24 md:h-48 md:w-48 mx-auto -mt-16 border-2 border-white rounded-full shadow-xl bg-white bg-cover bg-center"
                style={{
                  backgroundImage: `url(${`${userDetails?.profile_image}`})`,
                }}
              ></div>
            ) : (
              <Avatar
                className=" flex justify-center items-center w-24 md:w-48 shadow-xl mx-auto -mt-16 border-2 border-white"
                style={{
                  verticalAlign: 'middle',
                }}
                size={{ xs: 80, sm: 80, md: 120, lg: 160, xl: 210, xxl: 240 }}
                icon={<BiUser />}
              />
            )}
          </div>
          <div className="sm:ml-4 flex flex-col w-full sm:w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 border-b">
              <div className="p-2 lg:mt-4">
                <div className="text-xs">
                  {t('system_user_details.profile_header.name')}
                </div>
                <div className="text-base font-bold truncate">
                  {userDetails?.name}
                </div>
              </div>
              <div className="p-2 lg:mt-4">
                <div className="text-xs">
                  {t('system_user_details.profile_header.email')}
                </div>
                <div className="text-base font-bold truncate">
                  {userDetails?.user_detail?.email}
                </div>
              </div>
              <div className="p-2 lg:mt-4">
                <div className="text-xs">
                  {t('system_user_details.profile_header.role')}
                </div>
                <div className="text-base font-bold truncate">
                  {camelCaseString(userDetails?.user_detail?.role[0])}
                </div>
              </div>
              <div className="p-2 lg:mt-4">
                <div className="text-xs">
                  {t('system_user_details.profile_header.status.label')}
                </div>
                <div
                  className="text-base font-bold truncate flex items-center cursor-pointer"
                  onClick={() => setUserStatusDrawer(true)}
                >
                  {changeUserStatusLoading ? (
                    <div className="flex items-center text-grey-400">
                      <Spin
                        indicator={
                          <LoadingOutlined
                            size={22}
                            className="mr-2 mb-1"
                            spin
                          />
                        }
                      ></Spin>
                      <div className="text-xs">Updating...</div>
                    </div>
                  ) : (
                    getSystemUserStatus(userDetails?.status)
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 border-b">
              <div className="p-2 border-b mt-4">
                <div className="text-xs">
                  {t('system_user_details.profile_header.created_at')}
                </div>
                <div className="text-base font-bold truncate">
                  {utcToLocalDateTime(userDetails?.created_at)}
                </div>
              </div>
              <div className="p-2 border-b mt-4">
                <div className="text-xs">
                  {t('system_user_details.profile_header.updated_at')}
                </div>
                <div className="text-base font-bold truncate">
                  {utcToLocalDateTime(userDetails?.modified_at)}
                </div>
              </div>
              <div className="p-2 border-b mt-4">
                <div className="text-xs">
                  {t('system_user_details.profile_header.created_by')}
                </div>
                <div className="text-base font-bold truncate">
                  {userDetails?.created_by}
                </div>
              </div>
              <div className="p-2 border-b mt-4">
                <div className="text-xs">
                  {t('system_user_details.profile_header.last_login')}
                </div>
                <div className="text-base font-bold truncate">
                  {utcToLocalDateTime(userDetails?.user_detail?.last_login)}
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="py-6 flex items-center">
              <Button
                type="success"
                className="w-48 mr-4"
                size="large"
                onClick={() => setEditProfileDrawer(true)}
                icon={
                  editUserLoading && (
                    <Spin
                      indicator={
                        <LoadingOutlined
                          size={22}
                          className="mr-2 mb-1 text-white"
                          spin
                        />
                      }
                    />
                  )
                }
              >
                {t(
                  'system_user_details.profile_header.edit_system_user_drawer.button_text'
                )}
              </Button>

              <Button
                type="success"
                className="w-48 mr-4"
                size="large"
                onClick={() => setResetPasswordDrawer(true)}
                icon={
                  forgotPasswordLoading && (
                    <Spin
                      indicator={
                        <LoadingOutlined
                          size={22}
                          className="mr-2 mb-1 text-white"
                          spin
                        />
                      }
                    />
                  )
                }
              >
                {t(
                  'system_user_details.profile_header.reset_password_popup.button_text'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Password Modal*/}
      <Modal
        visible={resetPasswordDrawer}
        onOk={() => setResetPasswordDrawer(!resetPasswordDrawer)}
        onCancel={() => {
          passwordForm.resetFields();
          setEmailNotMatchAlert(false);
          setResetPasswordDrawer(!resetPasswordDrawer);
        }}
        centered
        footer={null}
        closable={false}
      >
        <div className="text-center my-4">
          <div className="text-lg font-bold">
            {t('system_user_details.profile_header.reset_password_popup.title')}
          </div>
          <div className="text-md">
            {t(
              'system_user_details.profile_header.reset_password_popup.description'
            )}
          </div>
        </div>
        <Form
          layout="vertical"
          form={passwordForm}
          className=""
          onFinish={onResetPasswordFinish}
          onValuesChange={() => setEmailNotMatchAlert(false)}
        >
          <Form.Item
            name="email"
            label={t(
              'system_user_details.profile_header.reset_password_popup.form_email_label'
            )}
            className="mb-6"
            rules={[
              {
                required: true,
                message: t(
                  'system_user_details.profile_header.reset_password_popup.email_required_error'
                ),
              },
              {
                type: 'email',
                message: t(
                  'system_user_details.profile_header.reset_password_popup.email_invalid_error'
                ),
              },
            ]}
          >
            <Input
              type="email"
              size="large"
              placeholder={t(
                'system_user_details.profile_header.reset_password_popup.form_email_placeholder'
              )}
            />
          </Form.Item>
          {emailNotMatchAlert && (
            <Alert
              message="Email doesn't match."
              type="error"
              showIcon
              className="mb-4"
              closable
            />
          )}
          <div className="flex justify-between">
            <Button
              size="large"
              type="success"
              className="w-64 mr-4"
              htmlType="submit"
            >
              {t(
                'system_user_details.profile_header.reset_password_popup.confirm_text'
              )}
            </Button>
            <Button
              size="large"
              onClick={() => {
                passwordForm.resetFields();
                setResetPasswordDrawer(!resetPasswordDrawer);
                setEmailNotMatchAlert(false);
              }}
              className="w-64"
            >
              {t(
                'system_user_details.profile_header.reset_password_popup.cancel_text'
              )}
            </Button>
          </div>
        </Form>
      </Modal>

      {/* Change User Status Drawer */}
      <Drawer
        title={t('system_user_details.profile_header.status.drawer.title')}
        placement="right"
        onClose={() => {
          setUserStatus(userDetails?.status);
          setUserStatusDrawer(false);
        }}
        visible={userStatusDrawer}
        headerStyle={{ fontWeight: 'bold', paddingTop: 20, paddingBottom: 20 }}
      >
        <Radio.Group
          className="flex flex-col"
          onChange={(e) => setUserStatus(e.target.value)}
          // defaultValue={userStatus}
          value={userStatus}
        >
          <Radio className="mb-6 font-bold" value={1}>
            {t('system_user_details.profile_header.status.active')}
          </Radio>
          <Radio className="mb-6 font-bold" value={2}>
            {t('system_user_details.profile_header.status.suspend')}
          </Radio>
          <Radio className="mb-6 font-bold" value={3}>
            {t('system_user_details.profile_header.status.delete.text')}
          </Radio>
        </Radio.Group>
        <div className="flex justify-between mt-2">
          <Button
            size="large"
            onClick={() => setConfirmUserStatus(true)}
            type="success"
            className="w-64 mr-4"
            block
          >
            {t('system_user_details.profile_header.status.confirm_text')}
          </Button>
          <Button
            size="large"
            onClick={() => {
              setUserStatus(userDetails?.status);
              setUserStatusDrawer(false);
            }}
            className="w-64"
          >
            {t('system_user_details.profile_header.status.cancel_text')}
          </Button>
        </div>
      </Drawer>

      {/* User Status Change Confirm Modal */}
      <Modal
        visible={confirmUserStatus}
        onOk={() => setConfirmUserStatus(false)}
        onCancel={() => {
          confirmWithEmailForm.resetFields();
          setConfirmUserStatus(false);
          setEmailNotMatchAlert(false);
        }}
        centered
        footer={null}
        closable={false}
      >
        <div className="text-center mb-6">
          <div className="text-lg font-bold">Change System User Status</div>
          <div className="text-md">
            Are you sure you want to change the status of this user?
          </div>
        </div>
        <Form
          layout="vertical"
          className=""
          onValuesChange={() => setEmailNotMatchAlert(false)}
          onFinish={userStatusHandler}
          form={confirmWithEmailForm}
        >
          <Form.Item
            name="email"
            label={t(
              'system_user_details.profile_header.status.delete.form_email.label'
            )}
            className="mb-4"
            rules={[
              {
                required: true,
                message: t(
                  'system_user_details.profile_header.reset_password_popup.email_required_error'
                ),
              },
            ]}
          >
            <Input
              type="email"
              size="large"
              placeholder={t(
                'system_user_details.profile_header.status.delete.form_email.placeholder'
              )}
            />
          </Form.Item>
          {emailNotMatchAlert && (
            <Alert
              message="Email doesn't match."
              type="error"
              showIcon
              className="mb-4"
              closable
            />
          )}
          <div className="flex justify-between">
            <Button
              size="large"
              type="success"
              className="w-64 mr-4"
              htmlType="submit"
            >
              {getButtonText(userStatus)}
            </Button>
            <Button
              size="large"
              onClick={() => {
                confirmWithEmailForm.resetFields();
                setConfirmUserStatus(false);
                setEmailNotMatchAlert(false);
              }}
              className="w-64"
            >
              {t(
                'system_user_details.profile_header.status.delete.cancel_text'
              )}
            </Button>
          </div>
        </Form>
      </Modal>

      {/* Edit System User Drawer */}
      <Drawer
        title="Edit System User"
        placement="right"
        onClose={() => {
          editUserForm.resetFields();
          setEditProfileDrawer(false);
        }}
        visible={editProfileDrawer}
        headerStyle={{ fontWeight: 'bold', paddingTop: 20, paddingBottom: 20 }}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={editSystemUserInitialValue}
          onFinish={onEditProfileFinish}
          onFieldsChange={changeInFormValueHandler}
          autoComplete="off"
          form={editUserForm}
        >
          <Form.Item name="name" label="Name" className="mb-6">
            <Input type="text" size="large" placeholder="Enter name" />
          </Form.Item>
          <Form.Item name="email" label="Email ID" className="mb-6">
            <Input type="email" size="large" disabled />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            className="mb-6"
            onClick={
              isEmpty(roles?.results)
                ? () => dispatch(listRoles('admin'))
                : null
            }
          >
            <Select size="large" placeholder="Select user role">
              {rolesLoading ? (
                <Option value="loading">Loading...</Option>
              ) : !isEmpty(roles?.results) ? (
                roles?.results?.map((role) => (
                  <Option key={role.id} value={role.id}>
                    {camelCaseString(role.name)}
                  </Option>
                ))
              ) : (
                <Option value="not-found">No roles found</Option>
              )}
            </Select>
          </Form.Item>
          <Form.Item className="mb-3">
            <Button
              type="success"
              htmlType="submit"
              className="w-full"
              size="large"
              // disabled={isUpdateButtonActive}
              block
            >
              {t(
                'system_user_details.profile_header.edit_system_user_drawer.drawer_submit_text'
              )}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default SystemUserProfileHeader;
