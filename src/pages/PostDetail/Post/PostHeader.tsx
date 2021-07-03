import React from "react";
import { IAddress } from "../../../interfaces/post";
import { subtractTime } from "../../../services";

interface Props {
  title: string;
  address: IAddress;
  retail: number;
  area: number;
  _id: string;
  timeStart: Date;
}

const PostHeader: React.FC<Props> = ({
  title,
  address,
  retail,
  area,
  _id,
  timeStart,
}) => {
  const time = new Date(timeStart);

  return (
    <header className="section post-header">
      <h1>{title}</h1>
      <p className="post-address">
        Địa chỉ: {address.street}, {address.ward}, {address.district},{" "}
        {address.province}
      </p>
      <div className="post-price">
        <span className="post-price-item price">
          <span>Giá cho thuê</span>
          {retail} triệu/tháng
        </span>
        <span className="post-price-item">
          <span>Diện tích</span>
          {area}m²
        </span>

        <span className="post-price-item">
          <span>Cập nhật</span>
          {subtractTime(new Date(timeStart!))}
        </span>
      </div>
    </header>
  );
};

export default PostHeader;
