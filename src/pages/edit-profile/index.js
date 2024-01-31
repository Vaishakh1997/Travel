import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/dashboard/section-title';
import Breadcrumb from '../../components/breadcrumbs';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  updateUserPasswordAction,
  updateUserNameAction,
  uploadUserProfileImageAction,
} from '../../store/actions/userProfileActions';
import { Input, Button, Form, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { forgotPasswordRequestAction } from '../../store/actions/authActions';
import { imageUploadHandler } from '../../utils/upload';
import { EditProfileSkelton } from '../../components/skeleton/WidgetSkeleton';
import { resetImageUploadAction } from '../../store/actions/uploadAction';

function EditProfile() {
  const { upload, userProfile } = useSelector(
    (state) => ({
      upload: state.upload,
      userProfile: state.userProfile,
    }),
    shallowEqual
  );

  const { uploadImage } = upload;
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();
  let title = t('profileEdit.section_title');
  let breadcrumbsItem = [
    {
      home: true,
      title: 'User',
      url: '/',
      last: false,
    },
    {
      home: false,
      title: t('navbar.user_dropdown.editProfile'),
      url: '/',
      last: true,
    },
  ];
  const resetPasswordLinkHandler = () => {
    dispatch(
      forgotPasswordRequestAction(userProfile?.user?.user_detail?.username)
    );
  };
  const editProfileFormHandler = ({
    old_password,
    new_password1,
    new_password2,
  }) => {
    const password = new_password1 === new_password2 ? new_password1 : null;
    if (password) {
      dispatch(updateUserPasswordAction(old_password, password));
    } else {
      setPasswordMatch(!passwordMatch);
    }
  };

  const saveProfileImageHandler = () => {
    dispatch(
      uploadUserProfileImageAction({
        profile_image: uploadImage,
      })
    );
  };

  const deleteProfileImageHandler = () => {
    dispatch(
      uploadUserProfileImageAction({
        profile_image:
          'https://anak-web-dashboard.s3.amazonaws.com/images/339bfe25-b6ee-411a-a2b0-4f6e0941b42d.png',
      })
    );
  };
  const updateNameHandler = ({ name }) => {
    dispatch(updateUserNameAction(name));
  };

  const formDefaultValues = {
    name: userProfile?.user?.name,
  };
  useEffect(() => {
    dispatch(resetImageUploadAction());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SectionTitle
        title={title}
        right={<Breadcrumb items={breadcrumbsItem} />}
      />
      <div className="flex flex-col items-center justify-start w-full overflow-hidden user-widget-2">
        <div className="user-cover w-full h-24 lg:h-40"></div>
      </div>

      {userProfile?.userLoading ? (
        <>
          <EditProfileSkelton className="-mt-10" />
        </>
      ) : (
        <>
          <div className="w-full bottom-section sm:px-16  md:px-8 mb-5">
            <div className="flex flex-col sm:flex-row mb-10">
              <div className="w-1/6 mt-10">
                <label className="text-lg hidden lg:block">
                  Profile Picture
                </label>
              </div>
              <div className="flex-shrink-0 w-full sm:w-1/5">
                <div
                  className="flex justify-center items-center -mt-16 md:-mt-12 w-40 h-40 p-2 border-2 border-white rounded-full shadow-xl bg-white bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      uploadImage || userProfile?.user?.profile_image
                    })`,
                  }}
                ></div>
              </div>
              <div className="w-1/4 mt-6 flex justify-between">
                {uploadImage ? (
                  <Button
                    type="primary"
                    size="large"
                    onClick={saveProfileImageHandler}
                  >
                    Save Photo
                  </Button>
                ) : (
                  <>
                    <label className="ant-btn ant-btn-success ant-btn-lg leading-6">
                      <Input
                        size="large"
                        placeholder="Change profile picture"
                        type="file"
                        onChange={imageUploadHandler}
                        className="hidden"
                      />
                      Upload Photo
                    </label>
                    <Button
                      type="danger"
                      size="large"
                      onClick={deleteProfileImageHandler}
                    >
                      Delete Photo
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start md:items-center mb-8">
              <div className="md:w-1/6">
                <label className="text-lg">Full name</label>
              </div>
              <div className="flex items-center w-1/2">
                <Form
                  autoComplete="off"
                  // layout="vertical"
                  onFinish={updateNameHandler}
                  initialValues={formDefaultValues}
                  className="flex w-full"
                >
                  <Form.Item
                    name="name"
                    className="flex items-center w-128 mb-0"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name',
                      },
                    ]}
                  >
                    <Input
                      className="font-bold"
                      size="large"
                      placeholder="Enter User Name"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    size="large"
                    disabled={!userName}
                    // onClick={updateNameHandler}
                    className="ml-4"
                    htmlType="submit"
                  >
                    Update Name
                  </Button>
                </Form>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start mb-8">
              <div className="w-1/6">
                <label className="text-lg block pt-2">Email </label>
              </div>

              <div className="w-1/2">
                <Input
                  className="font-bold mb-2"
                  value={userProfile?.user?.user_detail?.email}
                  size="large"
                  disabled
                />
                <div className="text-sm text-grey-600">
                  To change your email id. please{' '}
                  <span
                    className="text-blue-anak font-bold cursor-pointer"
                    onClick={resetPasswordLinkHandler}
                  >
                    send request to Super Admin
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-8">
              <div className="w-1/6">
                <label className="text-lg block pt-2">Reset Password</label>
              </div>
              <div className="w-1/2">
                <Form
                  name="createMessage"
                  autoComplete="off"
                  layout="vertical"
                  onFinish={editProfileFormHandler}
                  onFieldsChange={() => setPasswordMatch(false)}
                >
                  <div className="w-full mb-8">
                    <Form.Item
                      name="old_password"
                      className="flex items-center"
                      extra={
                        <div className="text-sm text-grey-600">
                          Forgot your current password? Please{' '}
                          <span
                            onClick={resetPasswordLinkHandler}
                            className="text-blue-anak font-bold cursor-pointer"
                          >
                            click here
                          </span>{' '}
                          to get reset password link
                        </div>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please input your current password!',
                        },
                      ]}
                    >
                      <Input.Password
                        className="font-bold mb-2"
                        placeholder="Enter current password"
                        size="large"
                      />
                    </Form.Item>
                  </div>

                  <div className="w-full mb-8">
                    <Form.Item
                      name="new_password1"
                      className="flex items-center"
                      rules={[
                        {
                          required: true,
                          message: 'Please input new password!',
                        },
                      ]}
                    >
                      <Input.Password
                        className="font-bold mb-2"
                        placeholder="Enter new password"
                        size="large"
                      />
                    </Form.Item>
                  </div>
                  <div className="w-full mb-8">
                    <Form.Item
                      name="new_password2"
                      className="flex items-center"
                      rules={[
                        {
                          required: true,
                          message: 'Confirm password!',
                        },
                      ]}
                    >
                      <Input.Password
                        className="font-bold mb-2"
                        placeholder="Confirm password"
                        size="large"
                      />
                    </Form.Item>
                  </div>
                  {passwordMatch && (
                    <Alert
                      className="mb-2"
                      message="New password doesn't match"
                      type="error"
                      closable
                    />
                  )}
                  <div className="w-1/2 flex">
                    <Button
                      htmlType="submit"
                      type="success"
                      size="large"
                      className="w-48"
                    >
                      Save Changes
                    </Button>
                    <Button type="default" size="large" className="w-48 ml-4">
                      Cancel
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditProfile;
