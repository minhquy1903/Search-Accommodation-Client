import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import PageHeader from "../../components/PageHeader/PageHeader";
import TopLocationSection from "./TopLocationSection";
import Filter from "../../components/Filter/Filter";
import ListPostSection from "../../components/ListPostSection/ListPostSection";
import NewPostSection from "../../components/NewPostSection/NewPostSection";
import SubLinkSection from "../../components/SubLinkSection/SubLinkSection";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { filterPosts, filterNewPosts } from "../../redux/postSlice";

import postAPI from "../../api/postAPI";
import { AppState } from "../../store";

import "./Home.scss";

const Home: React.FC = () => {
  const filterObject = useSelector((state: AppState) => state.filter);

  const dispatch = useDispatch();
  const posts = useSelector((state: AppState) => state.post.posts);
  const newPosts = useSelector((state: AppState) => state.post.newPosts);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const post = await postAPI.getFilterPost({}, 1);
        if (post.data.result === true) {
          dispatch(filterPosts(post.data.data));
        }
        const newPost = await postAPI.getFilterPost({ newPost: true }, 1);
        if (newPost.data.result === true) {
          dispatch(filterNewPosts(newPost.data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, [dispatch]);

  return (
    <main id="main">
      <div className="container">
        <Filter />
        <Breadcrumb filterObject={filterObject} />
        <PageHeader filterObject={filterObject} />
        {!filterObject.province && <TopLocationSection />}
        <div className="container-wrapper">
          {posts && <ListPostSection posts={posts} />}
          <div className="aside">
            {newPosts && <NewPostSection newPosts={newPosts} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
