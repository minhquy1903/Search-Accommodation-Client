import React from 'react';

const ServiceFee: React.FC = () => {
  return (
    <div className='service-fee'>
      <h1>Bảng giá đăng tin trên web site Timtrovn.com</h1>
      <table>
        <thead>
          <tr>
            <th>Loại tin</th>
            <th>Giá ngày</th>
            <th>Giá tuần</th>
            <th>Giá tháng</th>
            <th>Giá UP TOP</th>
            <th>Tối thiểu</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href='#vipnoibat'>Tin VIP nổi bật</a>
            </td>
            <td>50.000 đồng</td>
            <td>315.000 đồng</td>
            <td>1.200.000 đồng</td>
            <td>5.000 đồng</td>
            <td>3 ngày</td>
            <td>
              <a className='btn btn-primary' href='#vipnoibat'>
                Xem chi tiết
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href='#vip1'>Tin VIP 1</a>
            </td>
            <td>30.000 đồng</td>
            <td>190.000 đồng</td>
            <td>800.000 đồng</td>
            <td>3.000 đồng</td>
            <td>3 ngày</td>
            <td>
              <a className='btn btn-primary' href='#vip1'>
                Xem chi tiết
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href='#vip2'>Tin VIP 2</a>
            </td>
            <td>20.000 đồng</td>
            <td>133.000 đồng</td>
            <td>540.000 đồng</td>
            <td>2.000 đồng</td>
            <td>3 ngày</td>
            <td>
              <a className='btn btn-primary' href='#vip2'>
                Xem chi tiết
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href='#vip2'>Tin VIP 3</a>
            </td>
            <td>10.000 đồng</td>
            <td>63.000 đồng</td>
            <td>240.000 đồng</td>
            <td>2.000 đồng</td>
            <td>3 ngày</td>
            <td>
              <a className='btn btn-primary' href='#vip3'>
                Xem chi tiết
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href='#tinthuong'>Tin thường</a>
            </td>
            <td>2.000 đồng</td>
            <td>12.000 đồng</td>
            <td>48.000 đồng</td>
            <td>2.000 đồng</td>
            <td>5 ngày</td>
            <td>
              <a href='#tinthuong'>Xem chi tiết</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ServiceFee;
