import React from "react";
import "./ServiceFee.scss";
const ServiceFee: React.FC = () => {
	return (
		<div className="service-fee">
			<h1 className="fee-h1">
				Bảng giá đăng tin trên web site Timtrovn.com
			</h1>
			<table className="tb">
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
							<a href="#vipnoibat">Tin VIP nổi bật</a>
						</td>
						<td>50.000 đồng</td>
						<td>315.000 đồng</td>
						<td>1.200.000 đồng</td>
						<td>5.000 đồng</td>
						<td>3 ngày</td>
					</tr>
					<tr>
						<td>
							<a href="#vip1">Tin VIP 1</a>
						</td>
						<td>30.000 đồng</td>
						<td>190.000 đồng</td>
						<td>800.000 đồng</td>
						<td>3.000 đồng</td>
						<td>3 ngày</td>
					</tr>
					<tr>
						<td>
							<a href="#vip2">Tin VIP 2</a>
						</td>
						<td>20.000 đồng</td>
						<td>133.000 đồng</td>
						<td>540.000 đồng</td>
						<td>2.000 đồng</td>
						<td>3 ngày</td>
					</tr>
					<tr>
						<td>
							<a href="#vip2">Tin VIP 3</a>
						</td>
						<td>10.000 đồng</td>
						<td>63.000 đồng</td>
						<td>240.000 đồng</td>
						<td>2.000 đồng</td>
						<td>3 ngày</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ServiceFee;
