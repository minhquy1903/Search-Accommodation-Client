import React, { useEffect, useState } from "react";
import "./CreatePost.scss";
import Select from "react-select";
import {
	FastField,
	Form,
	useFormik,
	Formik,
	Field,
	ErrorMessage,
} from "formik";
import * as Yup from "yup";
import axios from "axios";
import filterUI from "../../../api/fiter.ui";
import postAPI from "../../../api/postAPI";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import {
	changeDateEnd,
	changeTypePost,
	changeTypeTime,
	changeMoney,
} from "../../../redux/dateSlice";
import { AiOutlineClose } from "react-icons/ai";
import { AppState } from "../../../store";
import userAPI from "../../../api/userAPI";
import { saveUserInformation } from "../../../redux/userSlice";

interface ICreatePost {
	address: string;
	date: number;
	province: string;
	district: string;
	ward: string;
	typeCategory: string;
	title: string;
	description: string;
	retail: number;
	area: number;
	typePost: number;
}

const initialValues: ICreatePost = {
	address: "",
	date: 5,
	province: "",
	district: "",
	ward: "",
	typeCategory: "",
	title: "",
	description: "",
	retail: 0,
	area: 0,
	typePost: 5,
};

const validationSchema = Yup.object().shape({
	address: Yup.string().required("Bạn cần nhập địa chỉ"),
	province: Yup.string().required("Chưa chọn Tỉnh/TP "),
	district: Yup.string().required("Chưa chọn Quận/Huyện "),
	title: Yup.string()
		.max(100, "Tiêu đề dài quá 100 ký tự")
		.required("Bạn cần nhập tiêu đề"),
	description: Yup.string().required("Bạn cần nhập mô tả "),
	retail: Yup.string().required("Bạn cần nhập giá"),
	area: Yup.string().required("Bạn cần nhập diện tích "),
	typeCategory: Yup.string().required("Chưa chọn loại chuyên mục"),
});

const typeCategory = [
	{ value: 1, label: "Phòng trọ, nhà trọ" },
	{ value: 2, label: "Nhà nguyên căn" },
	{ value: 3, label: "Căn hộ" },
	{ value: 4, label: "Mặt bằng" },
	{ value: 5, label: "Căn hộ dịch vụ" },
];

const optionNews = [
	{ value: 5, label: "Tin thường 2.000/ngày" },
	{ value: 4, label: "Tin VIP 3 10.000/ngày" },
	{ value: 3, label: "Tin VIP 2 20.000/ngày" },
	{ value: 2, label: "Tin VIP 1 30.000/ngày" },
	{ value: 1, label: "Tin VIP nổi bật 50.000/ngày" },
];

const optionTime = [
	{ value: 3, label: "Đăng theo ngày" },
	{ value: 2, label: "Đăng theo tuần" },
	{ value: 1, label: "Đăng theo tháng" },
];

const optionDays = [
	{ value: 5, label: "5 ngày" },
	{ value: 6, label: "6 ngày" },
	{ value: 7, label: "7 ngày" },
	{ value: 8, label: "8 ngày" },
	{ value: 9, label: "9 ngày" },
	{ value: 10, label: "10 ngày" },
];

const optionWeeks = [
	{ value: 7, label: "1 tuần" },
	{ value: 2 * 7, label: "2 tuần" },
	{ value: 3 * 7, label: "3 tuần" },
];

const optionMonths = [
	{ value: 30, label: "1 tháng" },
	{ value: 2 * 30, label: "2 tháng" },
	{ value: 3 * 30, label: "3 tháng" },
	{ value: 4 * 30, label: "4 tháng" },
];

export default function CreatePostLeft() {
	const { money } = useSelector((state: AppState) => state.date);
	const { userInformation } = useSelector((state: AppState) => state.user);
	const dispatch = useDispatch();
	const history = useHistory();
	const [listImages, setListImages] = useState([] as any);
	//dùng cho cái select ngày tuần tháng
	const [listOptionDate, setListOptionDate] = useState(optionDays);
	const [loading, setLoading] = useState<boolean>(false);

	const [selectDate, setSelectDate] = useState<any>(optionDays[0]);

	const [allProvinces, setAllProvinces] = useState([] as any);
	const [province, setProvince] = useState<any>();
	const [allDistricts, setAllDistricts] = useState([] as any);
	const [district, setDistrict] = useState<any>();
	const [allWards, setAllWards] = useState([] as any);
	const [ward, setWard] = useState<any>();

	useEffect(() => {
		const getAllProvinces = async () => {
			try {
				const data = await filterUI.getAllProvinces();
				console.log(data.data);

				setAllProvinces(
					data.data.map((e: any) => ({
						value: e.id,
						label: e.value,
					})),
				);
				setProvince("");
			} catch (error) {}
		};
		getAllProvinces();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(changeTypePost("Tin thường"));
		dispatch(changeMoney(2000));
		dispatch(changeTypeTime("Đăng theo ngày"));
	}, []);

	useEffect(() => {
		dispatch(changeDateEnd(selectDate.value));
		//console.log('Do something after counter has changed', counter);
	}, [selectDate]);

	const getDistrictOfProvince = async (id: number) => {
		try {
			const data = await filterUI.getDistrictOfProvince(id);
			setAllDistricts(
				data.data.map((e: any) => ({ value: e.id, label: e.value })),
			);
			setDistrict("");
			setWard("");
		} catch (error) {}
	};

	const getWardOfDistrict = async (id: number) => {
		try {
			const data = await filterUI.getWardOfDistrict(id);
			setAllWards(
				data.data.map((e: any) => ({ value: e.id, label: e.value })),
			);
			setWard("");
		} catch (error) {
			console.log(error);
		}
	};

	const addImages = async (files: any) => {
		const form = new FormData();
		if (listImages.length + files.length > 12) {
			alert("Quá nhiều hình");
			return;
		}
		//form.append('file', files[0]);
		//form.append('upload_preset', 'wsckhwdr');
		let arrImages = [...listImages]; //as any;
		setLoading(true);
		for (let i = 0; i < files.length; i++) {
			form.append("file", files[i]);
			form.append("upload_preset", "wsckhwdr");
			const res = await axios.post(
				"https://api.cloudinary.com/v1_1/dccqahm52/image/upload",
				form,
				{
					onUploadProgress: (ProgressEvent) => {
						if (i === files.length - 1)
							console.log(
								"Upload Progress:" +
									Math.round(
										(ProgressEvent.loaded /
											ProgressEvent.total) *
											100,
									) +
									"%",
							);
					},
				},
			);
			console.log(res.data.public_id);

			arrImages.push({
				src: res.data.secure_url,
				alt: res.data.public_id,
			});
		}
		setListImages(arrImages);
		setLoading(false);
		//console.log(arrImages);
	};

	const deleteImage = (id: any) => {
		setListImages(listImages.filter((image: any) => image.alt !== id));
	};

	const renderImages = (arrImages: any) => {
		return arrImages.map((photo: any) => (
			<div className="box__image">
				<div
					className="close__btn"
					onClick={() => deleteImage(photo.alt)}>
					<AiOutlineClose />
				</div>
				<img src={photo.src} key={photo.alt} width="170" height="150" />
			</div>
		));
	};

	const onChangeProvince = (e: any, props: any) => {
		console.log("props", props);
		props.setFieldValue("province", e.label);
		props.setFieldValue("district", "");
		getDistrictOfProvince(e.value);
		setProvince(e);
	};

	const onChangeDistricts = (e: any, props: any) => {
		getWardOfDistrict(e.value);
		setDistrict(e);
		props.setFieldValue("district", e.label);
		props.setFieldValue("ward", "");
	};

	const onChangeWards = (e: any, props: any) => {
		setWard(e);
		props.setFieldValue("ward", e.label);
	};

	const onChangeTypeCategory = (e: any, props: any) => {
		props.setFieldValue("typeCategory", e.value);
	};

	const onChangeOptionNews = (e: any, props: any) => {
		props.setFieldValue("typePost", e.value);

		let a: string;
		let b: number;
		if (e.value === 5) {
			a = "Tin thường";
			b = 2000;
		} else if (e.value === 4) {
			a = "Tin VIP 3";
			b = 10000;
		} else if (e.value === 3) {
			a = "Tin VIP 2";
			b = 20000;
		} else if (e.value === 2) {
			a = "Tin VIP 1";
			b = 30000;
		} else {
			a = "Tin VIP nổi bật";
			b = 50000;
		}
		dispatch(changeMoney(b));
		dispatch(changeTypePost(a));
	};

	const changeOptionDate = (e: any) => {
		if (e.value === 3) {
			setListOptionDate(optionDays);
			//setSelectDay(listOptionDate[0].value);

			setSelectDate({
				value: optionDays[0].value,
				label: optionDays[0].label,
			});
		} else if (e.value === 2) {
			setListOptionDate(optionWeeks);
			setSelectDate({
				value: optionWeeks[0].value,
				label: optionWeeks[0].label,
			});
		} else {
			setListOptionDate(optionMonths);
			setSelectDate({
				value: optionMonths[0].value,
				label: optionMonths[0].label,
			});
		}
		dispatch(changeTypeTime(e.label));
		setTimeout(() => {
			console.log("Ngay cong them", selectDate);
		}, 3000);

		//dispatch(changeDateEnd(selectDate.value));
	};

	const changeOptionTime = (e: any, props: any) => {
		setSelectDate(e);
		dispatch(changeDateEnd(e.value));
	};

	const creatPostHandle = async (value: any) => {
		console.log("vao dang bair");

		try {
			if (listImages.length === 0) {
				alert("Bạn cần thêm hình");
				return;
			}

			if (value.area <= 0 || value.retail <= 0) {
			}
			let moneyTotal = money * selectDate.value;
			if (userInformation.money < moneyTotal) {
				alert("Bạn không đủ tiền");
				return;
			}
			let moneyAfterPay = userInformation.money - moneyTotal;

			console.log("tiền", moneyTotal);

			let des = value.description;
			des = des.split(/(\n+)/).filter((e: any) => {
				return e.trim().length > 0;
			});

			let timeStart = new Date();
			let timeEnd = new Date();
			timeEnd.setDate(timeStart.getDate() + selectDate.value);
			let idUser = JSON.parse(
				localStorage.getItem("userInformation")!,
			)._id;
			const newPost = {
				accommodation: {
					address: {
						street: value.address,
						ward: value.ward,
						district: value.district,
						province: value.province,
					},
					description: des,
					images: listImages,
					title: value.title,
					area: value.area,
					retail: value.retail,
					typeAccommdation: value.typeCategory,
				},
				timeStart: timeStart,
				timeEnd: timeEnd,
				typePost: value.typePost,
				user_id: idUser,
			};

			console.log("post", newPost);
			const data: any = await postAPI.createPost(newPost);
			const result = await userAPI.updateUserMoney(idUser, {
				money: moneyAfterPay,
			});

			//const { data } = data;

			console.log("ID của bài đăng", data.id);
			console.log("Ngày bắt đầu", timeStart);
			//let numberDay = new Date(timeStart-timeEnd);

			await axios.post("http://localhost:8000/api/order/createOrder", {
				total: moneyTotal,
				typePost: value.typePost,
				idPost: data.id,
				numberDay: selectDate.value,
				user_id: idUser,
			});
			if (data.data === "success" && result.data.result) {
				dispatch(
					saveUserInformation({
						...userInformation,
						money: moneyAfterPay,
					}),
				);

				localStorage.setItem(
					"userInformation",
					JSON.stringify({
						...userInformation,
						money: moneyAfterPay,
					}),
				);

				alert("Đăng bài thành công");
				history.push("/quan-ly/quan-ly-tin-dang");
			} else {
				alert("Đăng bài thất bại");
			}
		} catch (error) {
			console.log(error);

			alert("Đã xảy ra lỗi vui lòng thử lại");
		}
	};

	return (
		<div className="post__col__left">
			<h3 className="h3__header__left">Địa chỉ cho thuê</h3>
			<div className="content__section__post__left">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values) => {
						creatPostHandle(values);
					}}>
					{(props) => {
						return (
							<Form>
								<div className="address__rental">
									<div className="address__rental__1">
										<label className="asd">
											Tỉnh/Thành phố
										</label>
										<Select
											name="province"
											options={allProvinces}
											onChange={(e) =>
												onChangeProvince(e, props)
											}
											value={province}
											className="select__test"
											placeholder="-- Chọn Tỉnh/TP --"
										/>
										<div className="container__error">
											<ErrorMessage name="province" />
										</div>
									</div>
									<div className="address__rental__1">
										<label>Quận/Huyện</label>
										<Select
											name="district"
											options={allDistricts}
											value={district}
											onChange={(e) =>
												onChangeDistricts(e, props)
											}
											noOptionsMessage={() =>
												"Chọn Tỉnh/TP trước"
											}
											placeholder="-- Quận/Huyện --"
										/>
										<div className="container__error">
											<ErrorMessage name="district" />
										</div>
									</div>
									<div className="address__rental__1">
										<label>Phường/Xã</label>
										<Select
											options={allWards}
											value={ward}
											onChange={(e) =>
												onChangeWards(e, props)
											}
											noOptionsMessage={() =>
												"Chọn Quận/Huyện trước"
											}
											placeholder="-- Phường/Xã --"
										/>
									</div>
									<div className="address__rental__1">
										<label>Đường/Số nhà</label>
										<Field
											placeholder="Số nhà"
											name="address"
											type="text"
										/>
										<div className="container__error">
											<ErrorMessage name="address" />
										</div>
										{/* <input type="text" /> */}
									</div>
								</div>
								<div className="address__real">
									<label>Địa chỉ chính xác</label>
									<input
										type="text"
										readOnly
										value={`${
											props.values.address
												? props.values.address + ","
												: ""
										} ${
											ward?.label ? ward.label + "," : ""
										} ${
											district?.label
												? district.label + ","
												: ""
										} ${
											province?.label
												? province.label
												: ""
										}`}
									/>
								</div>
								<h3 className="h3__header__left">
									Thông tin mô tả
								</h3>
								<div className="kind__of__room">
									<label>Loại chuyên mục</label>
									<Select
										options={typeCategory}
										placeholder="-- Chọn loại chuyên mục --"
										name="typeCategory"
										onChange={(e) =>
											onChangeTypeCategory(e, props)
										}
									/>
									<div className="container__error">
										<ErrorMessage name="typeCategory" />
									</div>
								</div>
								<div className="title__of__room">
									<label>Tiêu đề</label>
									<Field
										placeholder="Tiêu đề"
										name="title"
										type="text"
									/>
									<div className="container__error">
										<ErrorMessage name="title" />
									</div>
								</div>
								<div className="description__content">
									<label>Nội dung mô tả</label>
									<Field
										placeholder="Mô tả..."
										name="description"
										type="text"
										as="textarea"
										className="description__content__textarea"
									/>
									<div className="container__error">
										<ErrorMessage name="description" />
									</div>
									{/* <textarea className='description__content__textarea'></textarea> */}
								</div>
								<div className="information__call">
									<label>Thông tin liên hệ</label>
									<input
										name="phone"
										type="text"
										readOnly
										value={
											JSON.parse(
												localStorage.getItem(
													"userInformation",
												)!,
											).phone
										}
									/>
								</div>
								<div className="price__of__room">
									<label>Giá cho thuê(triệu đồng)</label>
									<Field
										placeholder="Triệu đồng"
										name="retail"
										type="number"
										onWheel={(e: any) => e.target.blur()}
									/>
									<div className="container__error">
										<ErrorMessage name="retail" />
									</div>
									{/* <input type='text' placeholder='triệu đồng' /> */}
								</div>
								<div className="area__of__room">
									<label>Diện tích(m²)</label>
									<Field
										placeholder="m²"
										name="area"
										type="number"
										onWheel={(e: any) => e.target.blur()}
									/>
									<div className="container__error">
										<ErrorMessage name="area" />
									</div>
									{/* <input type='text' placeholder='m²' /> */}
								</div>
								<h3 className="h3__header__left">Hình ảnh</h3>
								<div className="image__of__room">
									<label>
										Cập nhật hình ảnh rõ ràng sẽ cho thuê
										nhanh hơn
									</label>

									<div className="form-group">
										<div className="browse__photos">
											<i className="icon__upload__images"></i>
											<span className="">Thêm ảnh</span>
											<input
												type="file"
												multiple
												accept="image/*"
												onChange={(e) =>
													addImages(e.target.files)
												}
											/>
										</div>
									</div>
									<div className="container__loading">
										<ClipLoader
											loading={loading}
											size={50}
											color="black"
										/>
									</div>

									<div className="container__images__show">
										{renderImages(listImages)}
									</div>
									<h3 className="h3__header__left">
										Chọn hình thức đăng tin
									</h3>

									<div className="option__post">
										<div className="option__post__1">
											<label>Chọn loại tin</label>
											<Select
												options={optionNews}
												defaultValue={optionNews[0]}
												onChange={(e) =>
													onChangeOptionNews(e, props)
												}
												name="typePost"
											/>
										</div>
										<div className="option__post__1">
											<label>Gói thời gian</label>
											<Select
												options={optionTime}
												defaultValue={optionTime[0]}
												onChange={(e) =>
													changeOptionDate(e)
												}
											/>
										</div>
										<div className="option__post__1 option__post__2">
											{listOptionDate === optionDays && (
												<label>Số ngày</label>
											)}
											{listOptionDate === optionWeeks && (
												<label>Số tuần</label>
											)}
											{listOptionDate ===
												optionMonths && (
												<label>Số tháng</label>
											)}
											<Select
												name="date"
												options={listOptionDate}
												defaultValue={listOptionDate[0]}
												value={selectDate}
												onChange={(e: any) =>
													changeOptionTime(e, props)
												}
											/>

											{/* <Field name='date'>
												{(props: any) => {
													const { field, form, meta } = props;
													console.log('render prop', props);

													return (
														<div>
															<Select
																options={listOptionDate}
																defaultValue={listOptionDate[0]}
																value={selectDate}
																onChange={(e: any) => changeOptionTime(e, form)}
															/>

															<ErrorMessage name='date' />
														</div>
													);
												}}
											</Field> */}
										</div>
									</div>
								</div>
								<div className="container__pay__btn">
									<button type="submit">
										Hoàn tất thanh toán
									</button>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
}
