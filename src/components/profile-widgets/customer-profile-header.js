import React, { useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { Modal, Button, Form, Input, Select, Drawer, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { BiUser } from 'react-icons/bi';
import { utcToLocalDate } from '../../utils/dateFormat';
import {
  editCustomerAction,
  updateCustomerPinAction,
} from '../../store/actions/customerActions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const CustomerProfileHeader = ({ userDetails }) => {
  const { customerId } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { Option } = Select;
  const [editCustomerForm] = Form.useForm();
  const [resetPinForm] = Form.useForm();
  const [editProfileDrawer, setEditProfileDrawer] = useState(false);
  const [resetPasswordDrawer, setResetPasswordDrawer] = useState(false);

  const editCustomerInitialValue = {
    name: userDetails?.name,
    nationality: userDetails?.nationality,
    mobile: userDetails?.mobile,
  };
  let updatedFormValue = {};
  const changeInFormValueHandler = (changes) => {
    changes
      .filter((item) => item.touched)
      .map((item) => (updatedFormValue[item.name[0]] = item.value));
  };
  const onEditCustomerFinish = (values) => {
    setEditProfileDrawer(false);
    dispatch(editCustomerAction(customerId, updatedFormValue));
  };
  const customerPinUpdateHandler = ({ pin }) => {
    setResetPasswordDrawer(false);
    dispatch(updateCustomerPinAction(customerId, pin));
  };

  return (
    <div className="flex flex-col items-center justify-start w-full user-widget-2">
      <div className="w-full bottom-section md:px-8">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-shrink-0 w-full sm:w-1/5">
            {userDetails?.profile_image ? (
              <img
                src={`${userDetails?.profile_image}`}
                alt={`${userDetails?.name}`}
                className="rounded-full w-24 md:w-48 shadow-xl mx-auto -mt-16 border-2 border-white"
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
          <div className="sm:ml-4 flex flex-col w-full sm:w-4/5 mb-1">
            <div className="border-b grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2">
              <div className="p-2 mt-4 mb-2">
                <div className="text-xs">
                  {t('customer_details.name_label')}
                </div>
                <div className="text-base font-bold">{userDetails?.name}</div>
              </div>
              <div className="p-2 mt-4 mb-3">
                <div className="text-xs">{t('customer_details.dob_label')}</div>
                <div className="text-base font-bold">
                  {utcToLocalDate(userDetails?.dob)}
                </div>
              </div>
              <div className="p-2 mt-4 mb-3">
                <div className="text-xs">
                  {t('customer_details.gender_label')}
                </div>
                <div className="text-base font-bold">
                  {userDetails?.gender === 'M'
                    ? 'Male'
                    : userDetails?.gender === 'F'
                      ? 'Female'
                      : '-'}
                </div>
              </div>
              <div className="p-2 mt-4 mb-3">
                <div className="text-xs">
                  {t('customer_details.nationality_label')}
                </div>
                <div className="text-base font-bold">
                  {userDetails?.nationality || '-'}
                </div>
              </div>
            </div>

            <div className="border-b grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
              <div className="p-2 mt-4 mb-3">
                <div className="text-xs">
                  {t('org_user_detail.edit_modal.email_label')}
                </div>
                <div className="text-base font-bold break-words w-100 white-space-normal leading-tight pt-1">
                  {
                    userDetails?.email ? userDetails?.email : '-'
                  }
                </div>
              </div>
              <div className="p-2 mt-4 mb-3">
                <div className="text-xs">
                  {t('customer_details.mobile_label')}
                </div>
                <div className="text-base font-bold">+{userDetails?.mobile_country} {userDetails?.mobile}</div>
              </div>
              {userDetails?.kyc_status === 'verified' && (
                <div className="p-2 mt-4 mb-3 flex items-center pl-4">
                  <BsFillPatchCheckFill className="h-6 w-6 text-green-anak" />
                  <span className="text-green-anak font-bold text-lg ml-2">
                    {t('customer_details.kyc_status.approved')}
                  </span>
                </div>
              )}
              {/* {getKycStatus(userDetails?.kyc_status)} */}
            </div>
            {/* CTA */}
            <div className="space-x-4 mt-8 flex items-center">
              <Button
                type="success"
                className="w-48 mr-4"
                size="large"
                onClick={() => setEditProfileDrawer(true)}
                disabled={userDetails?.kyc_status === 'verified'}
              >
                {t('customer_details.edit_modal.button_text')}
              </Button>
              <Button
                type="success"
                className="w-48 mr-4"
                size="large"
                onClick={() => setResetPasswordDrawer(!resetPasswordDrawer)}
              >
                Reset Pin
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Password */}
      <Modal
        title="Reset Pin"
        visible={resetPasswordDrawer}
        onOk={() => setResetPasswordDrawer(false)}
        onCancel={() => {
          resetPinForm.resetFields();
          setResetPasswordDrawer(false);
        }}
        footer={false}
        centered
      >
        <Form
          layout="vertical"
          className=""
          onFinish={customerPinUpdateHandler}
          form={resetPinForm}
        >
          <Form.Item
            name="pin"
            label="New Pin"
            className="mb-6"
            rules={[
              {
                required: true,
                message: 'Please input 6 digit pin.',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const rePin = /^[0-9]{6}$/;
                  if (rePin.test(value)) {
                    return Promise.resolve();
                    // console.log('validator', value);
                  }
                  return Promise.reject(
                    new Error('Pin should contain combination of 6 digit')
                  );
                },
              }),
            ]}
          >
            <Input.Password
              min={6}
              max={6}
              size="large"
              placeholder="Enter new pin"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Pin"
            className="mb-6"
            rules={[
              {
                required: true,
                message: 'Please confirm pin!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('pin') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two pin that you entered do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password
              min={6}
              max={6}
              size="large"
              placeholder="Enter new pin"
            />
          </Form.Item>
          <Form.Item className="mb-3">
            <div className="flex justify-between">
              <Button
                type="success"
                htmlType="submit"
                size="large"
                className="w-64 mr-4"
              >
                Update
              </Button>
              <Button
                size="large"
                onClick={() => {
                  resetPinForm.resetFields();
                  setResetPasswordDrawer(false);
                }}
                className="w-64"
              >
                {t('customer_details.password_modal.cancel_text')}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit User */}
      <Drawer
        title="Edit Customer Details"
        placement="right"
        onClose={() => {
          editCustomerForm.resetFields();
          setEditProfileDrawer(false);
        }}
        visible={editProfileDrawer}
        headerStyle={{ fontWeight: 'bold', paddingTop: 20, paddingBottom: 20 }}
      >
        <Form
          name="update_customer"
          layout="vertical"
          autoComplete="off"
          initialValues={editCustomerInitialValue}
          onFinish={onEditCustomerFinish}
          onFieldsChange={changeInFormValueHandler}
          form={editCustomerForm}
        >
          <Form.Item
            name="name"
            label={t('customer_details.edit_modal.name_label')}
            className="mb-6"
          >
            <Input
              type="text"
              size="large"
              placeholder={t('customer_details.edit_modal.name_placeholder')}
            />
          </Form.Item>

          <Form.Item
            name="mobile"
            label={t('customer_details.edit_modal.mobile_label')}
            className="mb-6"
          >
            <Input
              type="text"
              size="large"
              placeholder={t('customer_details.edit_modal.mobile_placeholder')}
              disabled
            />
          </Form.Item>

          <Form.Item
            name="nationality"
            label={t('customer_details.edit_modal.nationality_label')}
            className="mb-8"
          >
            <Select
              size="large"
              placeholder={t(
                'customer_details.edit_modal.nationality_placeholder'
              )}
            >
              <Option value="Malaysia">Malaysia</Option>
              <Option value="Indonesia">Indonesia</Option>
              <Option value="Singapore">Singapore</Option>
            </Select>
          </Form.Item>
          <Form.Item className="mb-3">
            <Button
              type="success"
              htmlType="submit"
              className="w-full"
              size="large"
            // disabled={editUserLoading}
            // onClick={() => setEditProfileDrawer(false)}
            // block
            >
              Update Customer Details
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default CustomerProfileHeader;
