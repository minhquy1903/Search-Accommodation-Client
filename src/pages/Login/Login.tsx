import React from 'react';

import { Link } from 'react-router-dom';

import './Login.scss';

const Login: React.FC = () => {
  return (
    <main id='main'>
      <div className='container'>
        <section className='login-form-container'>
          <div className='section-header'>
            <span className='title'>Đăng nhập</span>
          </div>
          <div className='content-section'>
            <form action='' className='login-form'>
              <div className='form-group'>
                <label htmlFor='inputPhoneLogin'>SỐ ĐIỆN THOẠI</label>
                <input
                  type='text'
                  name='login-phone'
                  id='phone-input'
                  required
                  placeholder='Nhập số điện thoại'
                  className='form-input'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='inputPhoneLogin'>MẬT KHẨU</label>
                <input
                  type='password'
                  name='login-password'
                  id='password-input'
                  required
                  placeholder='Nhập mật khẩu'
                  className='form-input'
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn submit-btn'>
                  Đăng nhập
                </button>
              </div>
              <div className='form-group space-between'>
                <Link to='/forgot-password'>Bạn quên mật khẩu?</Link>
                <Link to='/sign-up'>Tạo tài khoản mới</Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Login;
