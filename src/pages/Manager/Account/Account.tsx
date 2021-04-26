import React from 'react';

import './Account.scss';

const Account: React.FC = () => {
  return (
    <>
      <h1 className='header-page'>Cập nhật thông tin cá nhân</h1>
      <div className='form-container'>
        <form action='' className='user-information'>
          <div className='form-group'>
            <label htmlFor=''>Mã thành viên</label>
            <input
              type='text'
              name=''
              id=''
              disabled
              readOnly
              value='#105363'
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Số điện thoại</label>
            <input
              type='text'
              name=''
              id=''
              disabled
              readOnly
              value='0965437825'
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Tên liên hệ</label>
            <input type='text' name='' id='' defaultValue='Vo Minh Quy' />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              name=''
              id=''
              placeholder='nguyenvana@gmail.com'
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Mật khẩu</label>
            <input type='text' name='' id='' />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn'>
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Account;
