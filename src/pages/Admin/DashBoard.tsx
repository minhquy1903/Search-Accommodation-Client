import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	Legend,
	Bar,
} from 'recharts';
import './DashBoard.scss';

const DashBoard = () => {
	const [moneyAllMonths, setMoneyAllMonths] = useState<any>(null);
	const [countAllMonths, setCountAllMonths] = useState<any>(null);
	useEffect(() => {
		const getTotalMoneyAllMonths = async () => {
			const resTest = await axios.get(
				'http://localhost:5000/api/order/gettotalsoldcategory-followmonth',
			);
			console.log(resTest.data.data);
			const monthlySold = await resTest.data.data.map((datum: any) => ({
				Tháng: datum.Month,
				Áo: datum.Ao,
				Quần: datum.Quan,
				'Vip 1': datum.Ao,
				'Vip 2': datum.Ao,
				'Đầm váy': datum.DamVay,
			}));
			setCountAllMonths(monthlySold);
			const res = await axios.get(
				'http://localhost:8000/api/post/total-money-month',
			);
			//console.log(res.data.data.data);
			const convertData = res.data.data.data.map((datum: any) => ({
				Tháng: datum.month,
				'Doanh thu': datum.total,
			}));
			//console.log(convertData);
			setMoneyAllMonths(convertData);
		};
		getTotalMoneyAllMonths();
	}, []);
	return (
		<div>
			<div>
				<div className='monthly-sales'>
					<div className='div__area__chart'>
						<ResponsiveContainer>
							<AreaChart
								data={moneyAllMonths}
								margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 30,
								}}
							>
								<defs>
									<linearGradient
										id='monthlySalesColor'
										x1='0'
										y1='0'
										x2='0'
										y2='1'
									>
										<stop offset='5%' stopColor='#045698' stopOpacity={0.8} />
										<stop offset='95%' stopColor='#045698' stopOpacity={0} />
									</linearGradient>
								</defs>
								<XAxis dataKey='Tháng' />
								<YAxis width={100} />
								<Tooltip />
								<Area
									type='monotone'
									dataKey='Doanh thu'
									stroke='#045698'
									fill='url(#monthlySalesColor)'
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
					<div className='chart-name'>Biểu đồ doanh thu hàng tháng</div>
				</div>

				<div className='kool'>
					<div className='sold-category-monthly'>
						<ResponsiveContainer>
							<BarChart
								width={100}
								height={300}
								data={countAllMonths}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 40,
								}}
							>
								<XAxis dataKey='Tháng' />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey='Áo' fill='#8884d8' />
								<Bar dataKey='Quần' fill='#ffc355' />
								<Bar dataKey='Đầm váy' fill='#ff7eae' />
								<Bar dataKey='Vip 1' fill='#ff7eae' />
								<Bar dataKey='Vip 2' fill='#ff7eae' />
							</BarChart>
						</ResponsiveContainer>
						<div className='chart-name'>Biểu đồ số lượng bán hàng tháng</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
