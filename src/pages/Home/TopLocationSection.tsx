import React from "react";
import { useDispatch } from "react-redux";

import postAPI from "../../api/postAPI";
import { saveFilter } from "../../redux/filterSlice";

interface Props {
  setPosts: any;
}

const TopLocationSection: React.FC<Props> = ({ setPosts }) => {
  const dispatch = useDispatch();

  const filterSubmit = async (province: string) => {
    const filterObj = {
      province: province,
    };

    console.log(filterObj);
    dispatch(saveFilter(filterObj));
    try {
      const posts = await postAPI.getFilterPost(filterObj, 1);
      if (posts.data.result === true) {
        setPosts(posts.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-top-location">
      <div className="section-title">
        <span className="title">Khu vực nổi bật</span>
      </div>
      <div className="location-city">
        <div
          className="location-item"
          onClick={() => filterSubmit("Hồ Chí Minh")}>
          <img src="/resources/images/location_hcm.jpg" alt="khu-vuc-noi-bat" />
          <div className="location-cap">
            <span>Phòng trọ Hồ Chí Minh</span>
          </div>
        </div>
        <div className="location-item" onClick={() => filterSubmit("Hà Nội")}>
          <img src="/resources/images/location_hn.jpg" alt="khu-vuc-noi-bat" />
          <div className="location-cap">
            <span>Phòng trọ Hà Nội</span>
          </div>
        </div>
        <div className="location-item" onClick={() => filterSubmit("Đà Nẵng")}>
          <img src="/resources/images/location_dn.jpg" alt="khu-vuc-noi-bat" />
          <div className="location-cap">
            <span>Phòng trọ Đà Nẵng</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopLocationSection;
