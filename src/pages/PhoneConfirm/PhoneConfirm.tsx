import React, { useState, useEffect } from 'react';
import { FastField, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import InputField from '../../components/Form/InputField';
import firebase from '../../firebase/firebaseConfig';
import { AppState } from '../../store';

import './PhoneConfirm.scss';

declare global {
  interface Window {
    recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    confirmationResult: any;
  }
}

interface IVerifyCode {
  verifyCode: string;
}

const initialValues = { verifyCode: '' };

window.recaptchaVerifier = window.recaptchaVerifier || {};

const PhoneConfirm: React.FC = () => {
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const phoneNumber: string = useSelector(
    (state: AppState) => state.user.userInformation.phone,
  );

  function setUpRecaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response: any) => {
          console.log('reCAPTCHA solved, allow signInWithPhoneNumber.');
        },
      },
    );
  }

  useEffect(() => {
    const signInWithPhoneNumber = async () => {
      const phone = '+84363365502';
      setUpRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      try {
        const confirmationResult = await firebase
          .auth()
          .signInWithPhoneNumber(phone, appVerifier);
        window.confirmationResult = confirmationResult;
        setConfirmationResult(confirmationResult);
      } catch (error) {
        console.log('loi roi dcm: ' + error);
      }
    };
    signInWithPhoneNumber();
  }, []);

  const verifyPhoneNumber = async (values: IVerifyCode) => {
    confirmationResult
      .confirm(values.verifyCode)
      .then((result: any) => {
        console.log(result.user);
        console.log('phone is verify');
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <main id='main'>
      <div className='container'>
        <section className='phone-confirm'>
          <div className='header-section'>
            <span className='title'>Xác thực số điện thoại</span>
          </div>
          <div className='content-section'>
            <Formik
              initialValues={initialValues}
              onSubmit={(values: IVerifyCode) => {
                verifyPhoneNumber(values);
              }}>
              {() => {
                return (
                  <Form className='confirm-form'>
                    <div id='recaptcha-container'></div>
                    <p>
                      Mã xác nhận đã được gửi đến <b>0964564273</b>. Vui lòng
                      nhập mã vào bên dưới để tiếp tục
                    </p>
                    <FastField
                      name='verifyCode'
                      component={InputField}
                      type='text'
                      label='Mã xác thực'
                      placeholder='Nhập mã xác thực'
                    />
                    <div className='form-group'>
                      <button
                        type='submit'
                        className='btn submit-btn btn-success'>
                        Xác thực tài khoản, miễn phí
                      </button>
                    </div>
                    <p>Bạn vẫn chưa nhận được mã xác thực?</p>
                    <div className='form-group'>
                      <button
                        className='btn submit-btn btn-normal'
                        type='button'
                        onClick={() => {
                          console.log('gui lai ma cho t');
                        }}>
                        Gửi lại mã
                      </button>
                    </div>
                    <p>
                      Bạn gặp khó khăn trong quá trình xác thực tài khoản? Vui
                      lòng gọi <b className='hotline'>0964 564 273</b> để chúng
                      tôi hỗ trợ bạn
                    </p>
                    <div className='form-group'>
                      <button
                        type='button'
                        className='btn submit-btn btn-normal'>
                        Đăng xuất
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PhoneConfirm;
