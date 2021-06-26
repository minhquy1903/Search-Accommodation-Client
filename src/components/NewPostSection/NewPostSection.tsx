import React from "react";
import { IPost } from "../../interfaces/post";

import NewPostItem from "./NewPostItem";

import "./NewPostSection.scss";

interface Props {
  newPosts: Array<IPost>;
}

const NewPostSection: React.FC<Props> = ({ newPosts }) => {
  return (
    <section className="new-post-section">
      <div className="section-header">
        <span className="title">Tin mới đăng</span>
      </div>
      <div className="post-list">
        {newPosts &&
          newPosts.map((post, i) => <NewPostItem post={post} key={i} />)}
      </div>
    </section>
  );
};

export default NewPostSection;
