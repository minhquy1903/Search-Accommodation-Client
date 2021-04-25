import React from 'react';

import { Link } from 'react-router-dom';

import './SignUp.scss';
const SignUp: React.FC = () => {
  return (
    <main id='main'>
      <div className='container'>
        <section className='signup-form-container'>
          <div className='section-header'>
            <span className='title'>Tạo tài khoản mới</span>
          </div>
          <div className='content-section'>
            <form action='' className='signup-form'>
              <div className='form-group'>
                <label htmlFor='inputNameSignup'>HỌ TÊN</label>
                <input
                  type='text'
                  name='login-phone'
                  id='phone-input'
                  required
                  placeholder='Nhập họ tên đầy đủ'
                  className='form-input'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='inputPhoneSignup'>SỐ ĐIỆN THOẠI</label>
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
                <label htmlFor='inputPhoneSignup'>MẬT KHẨU</label>
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
                  Tạo tài khoản
                </button>
              </div>
              <div className='form-group'>
                <p>
                  Bấm vào nút đăng ký tức là bạn đã đồng ý với
                  <Link to='/rule'> quy định sử dụng </Link>
                  của chúng tôi
                </p>
                <p>
                  Bạn đã có tài khoản?
                  <Link to='/login'> Đăng nhập ngay</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
