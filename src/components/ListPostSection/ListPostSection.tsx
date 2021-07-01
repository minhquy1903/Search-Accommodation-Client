import React from "react";

import PostItem from "../PostItem/PostItem";
import Pagination from "../Pagination/Pagination";
import { IPost } from "../../interfaces/post";

import "./ListPostSection.scss";

interface Props {
  posts: Array<IPost>;
}

const ListPostSection: React.FC<Props> = ({ posts }) => {
  return (
    <section className="list-post-section">
      <div className="section-header">
        <span className="section-title">Danh sách tin đăng</span>
      </div>
      <div className="post-list">
        {posts && posts.map((post, i) => <PostItem data={post} key={i} />)}
      </div>
      <Pagination />
    </section>
  );
};

export default ListPostSection;
