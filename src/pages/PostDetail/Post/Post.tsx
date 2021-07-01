import React from "react";

import PostHeader from "./PostHeader";
import PostMain from "./PostMain";
import PostImages from "./PostImages";
import PostOverview from "./PostOverview";
import PostMap from "./PostMap";
import { IPost } from "../../../interfaces/post";

interface Props {
  post: IPost;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <article className="post">
      <PostHeader
        title={post.accommodation.title}
        address={post.accommodation.address}
        area={post.accommodation.area}
        retail={post.accommodation.retail}
        _id={post._id}
        timeStart={post.timeStart!}
      />
      <PostMain description={post.accommodation.description} />
      <PostImages images={post.accommodation.images} />
      <PostOverview
        _id={post._id}
        timeEnd={post.timeEnd!}
        timeStart={post.timeStart!}
        province={post.accommodation.address.province}
      />
      <PostMap />
    </article>
  );
};

export default Post;
