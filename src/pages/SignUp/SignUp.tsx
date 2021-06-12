import React from 'react';
import { FastField, Formik, Form } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import InputField from '../../components/Form/InputField';
import userAPI from '../../api/userAPI';
import {
	saveUserInformation,
	loginSuccess,
	saveAccessToken,
} from '../../redux/userSlice';

import './SignUp.scss';

const phoneRegExp: RegExp = /(09|03|08|07|01[2|6|8|9])+([0-9]{8})\b/;
interface ISignUp {
	name: string;
	phone: string;
	password: string;
}

const initialValues: ISignUp = {
	name: '',
	phone: '',
	password: '',
};

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Tên bạn ngắn như cu bạn vậy')
		.max(30, 'Tên bạn dài nhưng cu bạn ngắn')
		.required('Bạn cần nhập tên'),
	phone: Yup.string()
		.matches(phoneRegExp, 'Số điện thoại không đúng')
		.required('Bạn cần nhập số điện thoại'),
	password: Yup.string()
		.min(6, 'Mật khẩu bạn ngắn như cu bạn vậy')
		.max(24, 'Mật khẩu bạn dài nhưng cu bạn ngắn')
		.required('Nhập mật khẩu!'),
});

const SignUp: React.FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const signUpHandle = async (values: ISignUp) => {
		try {
			const data = await userAPI.signUp(values);
			console.log(data.data.result);

			if (data.data.result) {
				alert('Đăng ký tài khoản thành công');

				const userInformation = JSON.stringify(data.data.data.userInformation);

				const accessToken = data.data.data.accessToken;

				localStorage.setItem('userInformation', userInformation);
				localStorage.setItem('accessToken', accessToken);

				dispatch(saveUserInformation(userInformation));

				dispatch(loginSuccess(true));

				dispatch(saveAccessToken(accessToken));

				history.push('/xac-thuc-tai-khoan');
			} else alert('Đăng ký không thành công');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main id='main'>
			<div className='container'>
				<section className='signup-form-container'>
					<div className='section-header'>
						<span className='title'>Tạo tài khoản mới</span>
					</div>
					<div className='content-section'>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={(values) => {
								signUpHandle(values);
							}}
						>
							{() => {
								return (
									<Form className='signup-form'>
										<FastField
											component={InputField}
											name='name'
											type='text'
											lable='HỌ TÊN'
											placeholder='Nhập họ tên'
										/>
										<FastField
											component={InputField}
											name='phone'
											type='text'
											lable='SỐ ĐIỆN THOẠI'
											placeholder='Nhập số điên thoại'
										/>
										<FastField
											component={InputField}
											name='password'
											type='password'
											lable='MẬT KHẨU'
											placeholder='Nhập nhập mật khẩu'
										/>

										<div className='form-group'>
											<button type='submit' className='btn submit-btn'>
												Tạo tài khoản
											</button>
										</div>
										<div className='form-group'>
											<p>
												Bấm vào nút đăng ký tức là bạn đã đồng ý với
												<Link to='/quy-dinh'> quy định sử dụng </Link>
												của chúng tôi
											</p>
											<p>
												Bạn đã có tài khoản?
												<Link to='/dang-nhap'> Đăng nhập ngay</Link>
											</p>
										</div>
									</Form>
								);
							}}
						</Formik>
					</div>
				</section>
			</div>
		</main>
	);
};

export default SignUp;
