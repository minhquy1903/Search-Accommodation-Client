import React from 'react';

const PostOverview: React.FC = () => {
  return (
    <div className='section post-overview'>
      <div className='title'>Đặc điểm tin đăng</div>
      <div className='content'>
        <table className='table'>
          <tbody>
            <tr>
              <td className='name'>Mã tin:</td>
              <td>#231680</td>
            </tr>
            <tr>
              <td className='name'>Khu vực</td>
              <td> Cho thuê phòng trọ Hồ Chí Minh </td>
            </tr>
            <tr>
              <td className='name'>Loại tin rao:</td>
              <td>Phòng trọ, nhà trọ</td>
            </tr>
            <tr>
              <td className='name'>Đối tượng thuê:</td>
              <td>Tất cả</td>
            </tr>
            <tr>
              <td className='name'>Gói tin:</td>
              <td>
                <span>Tin VIP nổi bật</span>
              </td>
            </tr>
            <tr>
              <td className='name'>Ngày đăng:</td>
              <td>
                <time title='Thứ 4, 11:48 21/04/2021'>
                  Thứ 4, 11:48 21/04/2021
                </time>
              </td>
            </tr>
            <tr>
              <td className='name'>Ngày hết hạn:</td>
              <td>
                <time title='Thứ 7, 11:48 24/04/2021'>
                  Thứ 7, 11:48 24/04/2021
                </time>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostOverview;
