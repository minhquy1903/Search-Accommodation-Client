import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import postAPI from '../../api/postAPI';

import './Pagination.scss';
interface Props {
  setPosts: any;
}

const Pagination: React.FC<Props> = ({ setPosts }) => {
  const [numberPost, setNumberPost] = useState<number>(15);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(8);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([]);

  useEffect(() => {
    const getNumberPost = async () => {
      const nPost = await postAPI.getNumberOfPosts();
      setNumberPost(nPost.data.data);
    };
    getNumberPost();

    const arrNumber = [];
    for (let i = 1; i <= Math.ceil(numberPost / 15); i++) {
      arrNumber.push(i);
    }
    setPageNumbers(arrNumber);
  }, [numberPost]);

  const getPosts = async (number: number) => {
    try {
      const posts = await postAPI.getPosts(number);
      if (posts.data.result === true) {
        setPosts(posts.data.data);
        setCurrentPage(number);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevBtn = () => {
    if (currentPage === 1) return;
    console.log('before: ', currentPage);

    setCurrentPage(currentPage - 1);
    console.log('after: ', minPageNumberLimit);
    if (currentPage <= minPageNumberLimit + 1) {
      setMinPageNumberLimit(minPageNumberLimit - 1);
      setMaxPageNumberLimit(maxPageNumberLimit - 1);
    }
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage >= maxPageNumberLimit) {
      setMaxPageNumberLimit(currentPage + 1);
      setMinPageNumberLimit(minPageNumberLimit + 1);
    }
  };
  const renderPageNumber = pageNumbers.map((number, i) => {
    if (number <= maxPageNumberLimit && number > minPageNumberLimit) {
      return (
        <li className='page-item' key={i}>
          <span
            className={currentPage === number ? 'active' : ''}
            key={i}
            onClick={() => getPosts(number)}>
            {number}
          </span>
        </li>
      );
    } else return null;
  });

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        <li className='page-item' onClick={handlePrevBtn}>
          <span>«</span>
        </li>
        {renderPageNumber}
        <li className='page-item' onClick={handleNextBtn}>
          <span>»</span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
