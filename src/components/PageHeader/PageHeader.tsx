import React from "react";

import { IFilter } from "../../redux/filterSlice";

import "./PageHeader.scss";

interface Props {
  filterObject: IFilter;
}

const PageHeader: React.FC<Props> = ({ filterObject }) => {
  const generateHeading = () => {
    let heading = "Kênh thông tin Phòng Trọ số 1 Việt Nam";
    if (filterObject.province) {
      heading = `Cho Thuê Phòng Trọ ${filterObject.province}, 
      ${filterObject.district ? filterObject.district : ""}, 
      ${filterObject.ward ? filterObject.ward : ""}`;

      heading += " Giá Rẻ, Mới Nhất 2021";
    }

    return heading;
  };

  const generateDescription = () => {
    let description =
      "Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng";
    if (filterObject.province) {
      description = `Cho Thuê Phòng Trọ ${filterObject.province}, 
      ${filterObject.district ? filterObject.district : ""}, 
      ${filterObject.ward ? filterObject.ward : ""}
      nhà trọ giá rẻ mới nhất năm 2021`;

      description += " Giá Rẻ, Mới Nhất 2021";
    }

    return description;
  };

  return (
    <div className="page-header">
      <h1 className="page-heading">{generateHeading()}</h1>
      <p className="description">{generateDescription()}</p>
    </div>
  );
};

export default PageHeader;
