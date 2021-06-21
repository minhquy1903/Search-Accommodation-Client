import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';

import Modal from '../../components/Modal/Modal';
import useModal from '../../components/Modal/useModal';
import Notification from '../../components/Notification/Notification';
import InputField from '../../components/Form/InputField';
import userAPI from '../../api/userAPI';
import {
  loginSuccess,
  saveAccessToken,
  saveUserInformation,
} from '../../redux/userSlice';

import './Login.scss';

const phoneRegExp: RegExp = /(09|03|08|07|01[2|6|8|9])+([0-9]{8})\b/;

interface ILogin {
  phone: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, 'Số điện thoại không đúng')
    .required('Bạn cần nhập số điện thoại'),
  password: Yup.string().required('Nhập mật khẩu!'),
});

const initialValues: ILogin = { phone: '', password: '' };

const Login: React.FC = () => {
  const { toggle, show } = useModal();
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandle = async (values: ILogin) => {
    try {
      const data = await userAPI.login(values);

      if (data.data.result) {
        alert('Đăng nhập thành công');

        const userInformation = data.data.data.userInformation;

        const accessToken: string = data.data.data.accessToken;

        localStorage.setItem(
          'userInformation',
          JSON.stringify(userInformation),
        );
        localStorage.setItem('accessToken', accessToken);

        dispatch(loginSuccess(true));

        dispatch(saveUserInformation(userInformation));

        dispatch(saveAccessToken(accessToken));

        history.replace('/');
        return;
      }
      alert('Sai sdt hoac mat khau');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main id='main'>
      <div className='container'>
        <section className='login-form-container'>
          <div className='section-header'>
            <span className='title'>Đăng nhập</span>
          </div>
          <div className='content-section'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                loginHandle(values);
              }}>
              {() => {
                return (
                  <Form className='login-form'>
                    <FastField
                      name='phone'
                      component={InputField}
                      type='text'
                      label='SỐ ĐIỆN THOẠI'
                      placeholder='Nhập số điện thoại'
                    />
                    <FastField
                      name='password'
                      component={InputField}
                      type='password'
                      label='MẬT KHẨU'
                      placeholder='Nhập mật khẩu'
                    />

                    <div className='form-group'>
                      <button type='submit' className='btn submit-btn'>
                        Đăng nhập
                      </button>
                    </div>
                    <div className='form-group space-between'>
                      <Link to='/quen-mat-khau'>Bạn quên mật khẩu?</Link>
                      <Link to='/dang-ky'>Tạo tài khoản mới</Link>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>
        <button onClick={toggle}>show modal</button>
        <Modal hide={toggle} show={show}>
          <Notification
            type='OK'
            heading='Thông báo'
            text='Đăng nhập thành công'
            hide={toggle}
          />
        </Modal>
      </div>
    </main>
  );
};
export default Login;
