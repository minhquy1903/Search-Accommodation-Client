import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SelectionField from "./SelectionField";
import SubmitFilter from "./SubmitFilter";
import { IOptionData } from "./FilterInterface";
import filterUI from "../../api/fiter.ui";
import { areaOptions, typeOptions, priceOptions } from "../../constants/filter";
import { saveFilter } from "../../redux/filterSlice";
import { filterNewPosts, filterPosts } from "../../redux/postSlice";
import postAPI from "../../api/postAPI";

import "./Filter.scss";

// interface Props {
//   setPosts: any;
//   setNewPosts: any;
// }

const Filter: React.FC = () => {
	const [provinces, setProvinces] = useState<IOptionData>();
	const [districts, setDistricts] = useState<IOptionData>();
	const [wards, setWards] = useState<IOptionData>();
	const [province, setProvince] = useState<string | null>(null);
	const [district, setDistrict] = useState<string | null>(null);
	const [ward, setWard] = useState<string | null>(null);
	const [type, setType] = useState<number | null>(null);
	const [area, setArea] = useState<number | null>(null);
	const [retail, setRetail] = useState<number | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const getAllProvinces = async () => {
			try {
				const data = await filterUI.getAllProvinces();
				console.log(data.data);

				setProvinces(data);
			} catch (error) {}
		};
		getAllProvinces();
	}, []);

	const getDistrictOfProvince = async (id: number) => {
		try {
			const data = await filterUI.getDistrictOfProvince(id);
			setDistricts(data);
		} catch (error) {}
	};

	const getWardOfDistrict = async (id: number) => {
		try {
			const data = await filterUI.getWardOfDistrict(id);

			setWards(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e: any) => {
		const name: string | number | null = e.target.name;

		let index = e.nativeEvent.target.selectedIndex;
		const text = e.nativeEvent.target[index].text;

		const value = e.target.value;

		if (name === "province") {
			if (value === "0") {
				setProvince(null);
				setDistrict(null);
				setWard(null);
				return;
			}
			getDistrictOfProvince(value);
			setProvince(text);
			setDistrict(null);
		} else if (name === "district") {
			if (value === "0") {
				setDistrict(null);
				setWard(null);
				return;
			}
			getWardOfDistrict(value);
			setDistrict(text);
			setWard(null);
		} else if (name === "ward") {
			if (value === "0") {
				setWard(null);
				return;
			}
			setWard(text);
		} else if (name === "type") setType(parseInt(value));
		else if (name === "price") setRetail(parseInt(value));
		else if (name === "area") setArea(parseInt(value));
	};

	const filterSubmit = async (e: any) => {
		e.preventDefault();

		const filterObj = {
			type: type,
			province: province,
			district: district,
			ward: ward,
			area: area,
			retail: retail,
			newPost: false,
		};

		console.log(filterObj);
		dispatch(saveFilter(filterObj));
		try {
			filterObj.newPost = true;
			const newPosts = await postAPI.getFilterPost(filterObj, 1);
			if (newPosts.data.result === true) {
				dispatch(filterNewPosts(newPosts.data.data));
			}
		} catch (error) {
			console.log(error);
		}

		try {
			const posts = await postAPI.getFilterPost(filterObj, 1);
			if (posts.data.result === true) {
				dispatch(filterPosts(posts.data.data));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={filterSubmit} className="filter">
			<SelectionField
				label="Loại phòng"
				name="type"
				optionData={typeOptions}
				handleChange={handleChange}
			/>
			<SelectionField
				handleChange={handleChange}
				label="Tỉnh thành"
				name="province"
				optionData={provinces!}
			/>
			<SelectionField
				handleChange={handleChange}
				label="Quận huyện"
				name="district"
				optionData={districts!}
			/>
			<SelectionField
				handleChange={handleChange}
				label="Phường xã"
				name="ward"
				optionData={wards!}
			/>

			<SelectionField
				label="Khoảng giá"
				name="price"
				optionData={priceOptions}
				handleChange={handleChange}
			/>
			<SelectionField
				label="Diện tích"
				name="area"
				optionData={areaOptions}
				handleChange={handleChange}
			/>
			<SubmitFilter />
		</form>
	);
};

export default Filter;
