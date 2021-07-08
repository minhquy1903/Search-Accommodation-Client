import React, { useEffect, useState } from "react";
import { Formik, Form, FastField } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { saveUserInformation } from "../../../redux/userSlice";
import { AppState } from "../../../store";
import InputField from "../../../components/Form/InputField";
import "./ChangePhone.scss";
import userAPI from "../../../api/userAPI";

const phoneRegExp: RegExp = /(09|03|08|07|01[2|6|8|9])+([0-9]{8})\b/;

const initialValues = {
	phone: "",
};

const Account: React.FC = () => {
	const userInfo = useSelector(
		(state: AppState) => state.user.userInformation,
	);
	const history = useHistory();

	const dispatch = useDispatch();

	const validate = Yup.object().shape({
		phone: Yup.string().matches(phoneRegExp, "Số điện thoại không đúng"),
	});

	const onSubmit = async (value: any) => {
		console.log(value);
		try {
			console.log(value.phone);

			const data = await userAPI.updatePhone(userInfo._id!, value);
			if (data.data.result) {
				alert("cập nhật số điện thoại thành công");
				dispatch(saveUserInformation({ ...userInfo, active: false }));
				history.replace("/xac-thuc-tai-khoan");
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (userInfo === null) return null;
	return (
		<>
			<h1 className="header-page">Cập nhật thông tin cá nhân</h1>
			<div className="form-container">
				<Formik
					initialValues={initialValues}
					validationSchema={validate}
					onSubmit={(value: any) => {
						onSubmit(value);
					}}>
					{() => {
						return (
							<Form className="user-information">
								<FastField
									component={InputField}
									name="phone"
									label="Số điện thoại mới"
									type="text"
									defaultValue={userInfo.phone}
								/>

								<div className="form-group">
									<button type="submit" className="btn">
										Cập nhật
									</button>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</>
	);
};

export default Account;
