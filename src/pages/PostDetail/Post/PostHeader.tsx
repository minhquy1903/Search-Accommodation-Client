import React from 'react';

const PostHeader: React.FC = () => {
  return (
    <header className='section post-header'>
      <h1>
        PHÒNG TRỌ DẠNG CĂN HỘ MINI CAO CẤP TẠI 796 LÊ ĐỨC THỌ, P.15, QUẬN GÒ VẤP
      </h1>
      <p className='post-address'>
        Địa chỉ: 796 Đường Lê Đức Thọ, Phường 15, Quận Gò Vấp, Hồ Chí Minh
      </p>
      <div className='post-price'>
        <span className='post-price-item price'>
          <span>Giá cho thuê</span>2.6 triệu/tháng
        </span>
        <span className='post-price-item'>
          <span>Diện tích</span>30m2
        </span>
        <span className='post-price-item'>
          <span>Mã tin</span>272244
        </span>
        <span className='post-price-item'>
          <span>Ngày đăng</span>4 giớ trước
        </span>
      </div>
    </header>
  );
};

export default PostHeader;
