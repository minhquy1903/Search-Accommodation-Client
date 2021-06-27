import React from "react";

import { Link } from "react-router-dom";
import { IPost } from "../../interfaces/post";
import { subtractTime } from "../../services/index";
import "./PostItem.scss";

interface Props {
  data: IPost;
}

const PostItem: React.FC<Props> = ({ data }) => {
  const createPathName = (str: string): string => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace("%", "")
      .replace(/ /g, "-")
      .toLowerCase();
  };
  const pathname = createPathName(data.accommodation.title);

  return (
    <div className={`${data.typePost === 1 ? "hot-post" : "vip1"} post-item`}>
      <figure>
        <Link
          to={{
            pathname: `thong-tin-chi-tiet/${pathname}`,
            search: `_id=${data._id}`,
          }}>
          {data.accommodation.images[0] !== null ? (
            <img
              src={data.accommodation.images[0].src}
              alt={data.accommodation.images[0].alt}
            />
          ) : null}
        </Link>
      </figure>
      <div className="post-meta">
        <h3 className="post-title">
          <Link
            to={{
              pathname: `thong-tin-chi-tiet/${pathname}`,
              search: `_id=${data._id}`,
            }}>
            {data.accommodation.title}
          </Link>
        </h3>
        <span className="room-price mgb-10">
          {data.accommodation.retail} triệu/tháng
        </span>
        <span className="room-area mgb-10">{data.accommodation.area}m²</span>
        <span className="room-location mgb-10">
          {data.accommodation.address.district},{" "}
          {data.accommodation.address.province}
        </span>
        <time className="post-time mgb-10">
          Cập nhật: {subtractTime(new Date(data.timeStart))}
        </time>
        {data.typePost === 1 ? (
          <span className="hot-post-stick">
            <img src="/resources/images/hot-post.svg" alt="hot-post" />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default PostItem;
