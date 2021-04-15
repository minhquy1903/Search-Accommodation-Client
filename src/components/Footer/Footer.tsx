import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='top-footer'>
          <div className='col col1'>
            <Link to='/'>
              <img
                className='logo'
                src='/resources/images/logo_70.png'
                alt='logo'
              />
            </Link>
            <p>
              Đứng đầu các từ khóa liên quan đến phòng trọ cho thuê, nhà cho
              thuê, tìm người ở ghép
            </p>
            <p>70.000+ tin bài trên hệ thống, và tiếp tục tăng</p>
            <p>300.000+ khách truy cập và hơn 2 triệu lượt xem mỗi tháng</p>
          </div>
          <div className='col'>
            <div className='bold'>Về phongtro123.com</div>
            <span>Trang chủ</span>
            <span>Giới thiệu</span>
            <span>Quy chết hoạt động</span>
            <span>Liên hệ</span>
            <span>Chính sách bảo mật</span>
          </div>
          <div className='col'>
            <div className='bold'>Hỗ trợ khách hàng</div>
            <span>Câu hỏi thường gặp</span>
            <span>Hướng dẫn đăng tin</span>
            <span>Bảng phí dịch vụ</span>
            <span>Quy dinh đăng tin</span>
            <span>Giải quyết khuyến nại</span>
          </div>
          <div className='col'>
            <div className='bold'>Liên hệ với chúng tôi</div>
            <img src='/resources/images/contact.png' alt='haha' />
          </div>
        </div>
        <div className='bottom-footer'>
          <span className='team-name'>Nhóm 12</span>
          <span>Thành viên:</span>
          <span>Võ Minh Quý - 18521316</span>
          <span>Đoàn Minh Lực - 185210xx</span>
          <span>Nguyễn Phạm Minh Gà - 18521196</span>
          <span className='doan-name'>Đồ án Công nghệ phần mềm chuyên sâu</span>
        </div>
      </div>
      ;
    </footer>
  );
};

export default Footer;
