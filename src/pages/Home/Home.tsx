import React, { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader/PageHeader";
import TopLocationSection from "./TopLocationSection";
import Filter from "../../components/Filter/Filter";
import ListPostSection from "../../components/ListPostSection/ListPostSection";
import NewPostSection from "../../components/NewPostSection/NewPostSection";
import SubLinkSection from "../../components/SubLinkSection/SubLinkSection";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import postAPI from "../../api/postAPI";
import { IPost } from "../../interfaces/post";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

import "./Home.scss";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Array<IPost>>();
  const [newPosts, setNewPosts] = useState<Array<IPost>>();
  const filterObject = useSelector((state: AppState) => state.filter);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await postAPI.getFilterPost({}, 1);
        if (data.data.result === true) {
          setPosts(data.data.data);
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const data = await postAPI.getFilterPost({ newPost: true }, 1);
        if (data.data.result === true) {
          setNewPosts(data.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  return (
    <main id="main">
      <div className="container">
        <Filter setPosts={setPosts} setNewPosts={setNewPosts} />
        <Breadcrumb filterObject={filterObject} />
        <PageHeader filterObject={filterObject} />
        {!filterObject.province && <TopLocationSection setPosts={setPosts} />}
        <div className="container-wrapper">
          {posts && <ListPostSection posts={posts} setPosts={setPosts} />}
          <div className="aside">
            <SubLinkSection />
            {newPosts && <NewPostSection newPosts={newPosts} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
