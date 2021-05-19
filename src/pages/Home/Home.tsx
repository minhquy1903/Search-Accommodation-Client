import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import TopLocationSection from './TopLocationSection';
import Filter from '../../components/Filter/Filter';
import HotPostSection from '../../components/HotPostSection/HotPostSection';
import ListPostSection from '../../components/ListPostSection/ListPostSection';
import NewPostSection from '../../components/NewPostSection/NewPostSection';
import SubLinkSection from '../../components/SubLinkSection/SubLinkSection';

import postAPI from '../../api/postAPI';
import { IPost } from '../../interfaces/post';

import './Home.scss';

const Home: React.FC = () => {
  const [hotPosts, setHotPosts] = useState<Array<IPost>>();
  const [posts, setPosts] = useState<Array<IPost>>();
  useEffect(() => {
    const getHotPost = async () => {
      try {
        const data = await postAPI.getHotPosts();
        console.log(data.data);
        if (data.data.result === true) {
          setHotPosts(data.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getPosts = async () => {
      try {
        const data = await postAPI.getPosts(1);
        console.log(data.data);
        if (data.data.result === true) {
          setPosts(data.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getHotPost();
    getPosts();
  }, []);

  return (
    <main id='main'>
      <div className='container'>
        <Filter />
        <PageHeader
          heading={'Phòng trọ, Nhà nguyên căn, Căn hộ, Ở ghép'}
          description='Kênh phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 70.000+ tin đăng và 2.000.000 lượt xem mỗi tháng.'
        />
        <TopLocationSection />
        {hotPosts && <HotPostSection hotPosts={hotPosts} />}
        <div className='container-wrapper'>
          {posts && <ListPostSection posts={posts} setPosts={setPosts} />}
          <div className='aside'>
            <SubLinkSection />
            <NewPostSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
