import CreatePostLeft from "./CreatePostLeft";
import CreatePostRight from "./CreatePostRight";
import "./CreatePost.scss";

export default function CreatePost() {
  return (
    <div>
      <h1 className="header__page__post">Đăng tin mới</h1>
      <div className="container__post__wrap">
        <CreatePostLeft />
        <CreatePostRight />
      </div>
    </div>
  );
}
