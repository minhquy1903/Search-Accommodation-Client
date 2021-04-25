import React from 'react';

const data: Array<string> = [
  'KTX cao cấp trong biệt thự siêu sang chuẩn 5 sao chỉ 1tr5/người (miễn phí điện nước).',
  'Bạn mệt mỏi vì phải ở trong các phòng trọ chật chội, nóng bức. Bạn phiền lòng vì không thể gánh chi phí cho một căn phòng đầy đủ tiện nghi.',
  'Dọn vào ở ngay, Miễn phí tiền phòng đến hết tháng 3',
  'Giờ Giấc tự do, ra vào cửa Vân tay, kết hợp 15 camera đảm bảo an ninh tuyệt đối.',
  'Xây theo kiểu căn hộ mini nội thất đầy đủ (Máy lạnh, quạt rèm cửa, kệ chén ....).',
  'Máy nước nóng lạnh năng lượng mặt trời',
  'Nhà xe rộng rãi thoáng mát',
  'Sân thượng trước ,sau rất thoáng mát',
  'Thang máy và cầu thang bộ rất tiện lợi',
  'Giá cho thuê từ 2,8tr/ tháng.',
  'Ở tối đa 4-5 người/ tùy phòng',
  'Địa chỉ: 1264 Lê Đức Thọ,P.13,Q.Gò Vấp,Tp.HCM',
];

const PostMain: React.FC = () => {
  return (
    <div className='section main-post'>
      <div className='title'>Thông tin mô tả</div>
      <div className='content'>
        {data.map((element, i) => (
          <p key={i}>{element}</p>
        ))}
      </div>
    </div>
  );
};

export default PostMain;
