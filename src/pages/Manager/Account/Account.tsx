import React, { useEffect, useState } from 'react';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';

import InputField from '../../../components/Form/InputField';
import './Account.scss';

const phoneRegExp: RegExp = /(09|03|08|07|01[2|6|8|9])+([0-9]{8})\b/;

const initialValues = {
  name: '',
  phone: '',
  oldPassword: '',
  newPassword: '',
};

const Account: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('userInformation')!));
  }, []);

  const validate = Yup.object().shape({
    phone: Yup.string().matches(phoneRegExp, 'Số điện thoại không đúng'),
    new_password: Yup.string().min(6, 'Mật khẩu quá ngắn'),
  });

  const onSubmit = (value: any) => {
    console.log(value);
    console.log('gagaga');
  };
  console.log(userInfo.name);

  if (userInfo === null) return null;
  return (
    <>
      <h1 className='header-page'>Cập nhật thông tin cá nhân</h1>
      <div className='form-container'>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(value: any) => {
            onSubmit(value);
          }}>
          {() => {
            return (
              <Form className='user-information'>
                <FastField
                  component={InputField}
                  name='user_id'
                  label='Mã thành viên'
                  readonly={true}
                  type='text'
                  defaultValue={userInfo._id.substring(0, 10).toUpperCase()}
                />
                <FastField
                  component={InputField}
                  name='name'
                  label='Họ và tên'
                  type='text'
                  defaultValue={userInfo.name}
                />
                <FastField
                  component={InputField}
                  name='phone'
                  label='Số điện thoại'
                  type='text'
                  defaultValue={userInfo.phone}
                />
                <FastField
                  component={InputField}
                  name='old_password'
                  label='Mật khẩu cũ'
                  type='password'
                />
                <FastField
                  component={InputField}
                  name='new_password'
                  label='Mật khẩu mới'
                  type='password'
                />
                <div className='form-group'>
                  <button type='submit' className='btn'>
                    Cập nhật
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Account;
