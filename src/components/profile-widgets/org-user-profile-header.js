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
  changeOrgUserStatusAction,
  editOrgUserAction,
  resetOrgUserPasswordAction,
} from '../../store/actions/orgUsersAction';
import { useParams } from 'react-router-dom';
import { utcToLocalDateTime } from '../../utils/dateFormat';
import { createdByFormat } from '../../utils/roleFormat';
import { useTranslation } from 'react-i18next';
import { camelCaseString } from '../../utils/string-helpers';
import { listRoles } from '../../store/actions/rolesPermissionActions';
import { isEmpty } from '../../utils/generic';
import { getOrgUserStatus } from '../../utils/get-org-user-status';

const OrgUserProfileHeader = ({ userDetails }) => {
  const { profile_uuid } = useParams();
  const dispatch = useDispatch();
  const { orgUsers, auth, rolesPermission } = useSelector(
    (state) => ({
      orgUsers: state.orgUsers,
      auth: state.auth,
      rolesPermission: state.rolesPermission,
    }),
    shallowEqual
  );
  const { editUserLoading, changeUserStatusLoading } = orgUsers;
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
  const [editUserForm] = Form.useForm();
  const [userStatusConfirmForm] = Form.useForm();
  const [resetPasswordForm] = Form.useForm();
  const onResetPasswordFinish = ({ confirm }) => {
    dispatch(resetOrgUserPasswordAction(profile_uuid, confirm));
    setResetPasswordDrawer(false);
    resetPasswordForm.resetFields();
  };
  const editOrgUserInitialValue = {
    name: userDetails?.name,
    email: userDetails?.user_detail?.email,
    role: userDetails?.user_detail?.role[0],
    organization: userDetails?.organization,
  };
  let updatedFormValue = {};
  const changeInFormValueHandler = (changes) => {
    changes
      .filter((item) => item.touched)
      .map((item) => (updatedFormValue[item.name[0]] = item.value));
  };
  const onEditProfileFinish = (values) => {
    dispatch(editOrgUserAction(values, profile_uuid));
  };
  const userStatusHandler = ({ email }) => {
    if (userDetails.user_detail.email === email) {
      dispatch(changeOrgUserStatusAction(userStatus, profile_uuid));
      setConfirmUserStatus(false);
      setUserStatusDrawer(false);
    } else {
      setEmailNotMatchAlert(true);
      console.log('Email not Match');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full user-widget-2">
      <div className="w-full bottom-section md:px-8">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-shrink-0 w-full sm:w-1/5">
            {userDetails?.profile_image ? (
              <span
                className="flex justify-center items-center -mt-16 md:h-48 w-24 md:w-48 p-2 border-2 border-white rounded-full bg-white bg-cover bg-center"
                style={{
                  backgroundImage: `url(${userDetails?.profile_image})`,
                  boxShadow: '0 0px 24px -5px rgba(0, 0, 0, 0.5)',
                }}
              />
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
                    getOrgUserStatus(userDetails?.status)
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
                  {createdByFormat(userDetails?.created_by)}
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
              <div className="col-span-4 p-2 border-b mt-4">
                <div className="text-xs">
                  {t('org_user_detail.org_name_label')}
                </div>
                <div className="text-base font-bold truncate max-w-full">
                  {userDetails?.organization || '-'}
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
              {
                userDetails?.user_detail?.last_login ? (
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
                ) : (
                  <></>
                )
              }
            </div>
          </div>
        </div>
      </div>

      {/* Reset Password Modal*/}
      <Modal
        visible={resetPasswordDrawer}
        onOk={() => setResetPasswordDrawer(!resetPasswordDrawer)}
        onCancel={() => {
          resetPasswordForm.resetFields();
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
          form={resetPasswordForm}
          layout="vertical"
          className=""
          onFinish={onResetPasswordFinish}
        >
          <Form.Item
            name="password"
            label="Password"
            className="pb-5 -mb-2"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi;
                  if (rePassword.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'Password must be at least 8 characters long and contain at least one number'
                    )
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password className="font-bold mb-2" size="large" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            className="pb-5 -mb-2"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password className="font-bold mb-2" size="large" />
          </Form.Item>
          <div className="flex justify-between my-2">
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
                resetPasswordForm.resetFields();
                setResetPasswordDrawer(!resetPasswordDrawer);
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
          value={userStatus}
          onChange={(e) => setUserStatus(e.target.value)}
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

      {/* User Status Update Confirm Modal */}
      <Modal
        visible={confirmUserStatus}
        onOk={() => setConfirmUserStatus(false)}
        onCancel={() => {
          userStatusConfirmForm.resetFields();
          setEmailNotMatchAlert(false);
          setConfirmUserStatus(false);
        }}
        centered
        footer={null}
        closable={false}
      >
        <div className="text-center mb-6">
          <div className="text-lg font-bold">Change Org User Status</div>
          <div className="text-md">
            Are you sure you want to change the status of this user?
          </div>
        </div>
        <Form
          layout="vertical"
          className=""
          onFinish={userStatusHandler}
          onValuesChange={() => setEmailNotMatchAlert(false)}
          form={userStatusConfirmForm}
        >
          <Form.Item
            name="email"
            label="Confirm Org User Email"
            className="mb-6"
            rules={[
              {
                required: true,
                message: 'Please input user email!',
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
              {t(
                'system_user_details.profile_header.status.delete.confirm_text'
              )}
            </Button>
            <Button
              size="large"
              onClick={() => {
                userStatusConfirmForm.resetFields();
                setEmailNotMatchAlert(false);
                setConfirmUserStatus(false);
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

      {/* Edit Org User Drawer */}
      <Drawer
        title="Edit Org User"
        placement="right"
        onClose={() => {
          editUserForm.resetFields();
          setEditProfileDrawer(false);
        }}
        visible={editProfileDrawer}
        headerStyle={{ fontWeight: 'bold', paddingTop: 20, paddingBottom: 20 }}
      >
        <Form
          form={editUserForm}
          name="basic"
          layout="vertical"
          initialValues={editOrgUserInitialValue}
          onFinish={onEditProfileFinish}
          onFieldsChange={changeInFormValueHandler}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label={t(
              'system_user_details.profile_header.edit_system_user_drawer.form_name_label'
            )}
            className="mb-6"
          >
            <Input type="text" size="large" placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            name="role"
            label={t(
              'system_user_details.profile_header.edit_system_user_drawer.form_role_label'
            )}
            className="mb-6"
            onClick={() => dispatch(listRoles('org_admin'))}
          >
            <Select size="large" placeholder="Select user role">
              {rolesLoading ? (
                <Option value="loading">Loading...</Option>
              ) : !isEmpty(roles?.results) ? (
                roles?.results?.map((role) => (
                  <Option key={role.id} value={role.id}>
                    {role.name}
                  </Option>
                ))
              ) : (
                <Option value="not-found">No roles found</Option>
              )}
            </Select>
          </Form.Item>

          <Form.Item
            className="mb-6"
            name="organization"
            label={t('org_user_detail.edit_modal.org_label')}
          >
            <Input size="large" disabled />
          </Form.Item>
          <Form.Item
            name="email"
            label={t(
              'system_user_details.profile_header.edit_system_user_drawer.form_email_label'
            )}
            className="mb-6"
          >
            <Input type="email" size="large" disabled />
          </Form.Item>
          <Form.Item className="mb-3">
            <Button
              type="success"
              htmlType="submit"
              className="w-full"
              size="large"
              disabled={editUserLoading}
              onClick={() => setEditProfileDrawer(false)}
              block
            >
              Update Organization User
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default OrgUserProfileHeader;
