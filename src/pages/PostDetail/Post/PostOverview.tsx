import React from 'react';

interface Props {
  _id: string;
  timeStart: Date;
  timeEnd: Date;
  province: string;
}

const PostOverview: React.FC<Props> = ({
  _id,
  timeEnd,
  timeStart,
  province,
}) => {
  const start = new Date(timeStart);
  const end = new Date(timeEnd);

  return (
    <div className='section post-overview'>
      <div className='title'>Đặc điểm tin đăng</div>
      <div className='content'>
        <table className='table'>
          <tbody>
            <tr>
              <td className='name'>Mã tin:</td>
              <td>{_id.toUpperCase()}</td>
            </tr>
            <tr>
              <td className='name'>Khu vực</td>
              <td> Cho thuê phòng trọ {province} </td>
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
              <td className='name'>Ngày đăng:</td>
              <td>
                <time title='Thứ 4, 11:48 21/04/2021'>
                  {start.toLocaleString()}
                </time>
              </td>
            </tr>
            <tr>
              <td className='name'>Ngày hết hạn:</td>
              <td>
                <time title='Thứ 7, 11:48 24/04/2021'>
                  {end.toLocaleString()}
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
