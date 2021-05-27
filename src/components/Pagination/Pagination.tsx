import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../store';
import postAPI from '../../api/postAPI';

import './Pagination.scss';
interface Props {
  setPosts: any;
}

const Pagination: React.FC<Props> = ({ setPosts }) => {
  const [numberPost, setNumberPost] = useState<number>(1000);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(8);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([]);

  const filterObject = useSelector((state: AppState) => state.filter);

  useEffect(() => {
    const getNumberPost = async () => {
      const nPost = await postAPI.getNumberOfPosts(filterObject);
      setNumberPost(nPost.data.data);
    };
    getNumberPost();

    if (numberPost / 15 < 8) {
      setMaxPageNumberLimit(Math.ceil(numberPost / 15));
    }

    const arrNumber = [];
    for (let i = 1; i <= Math.ceil(numberPost / 15); i++) {
      arrNumber.push(i);
    }

    setPageNumbers(arrNumber);
  }, [numberPost, filterObject]);

  const getFilterPosts = async (number: number) => {
    try {
      const posts = await postAPI.getFilterPost(filterObject, number);
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
    getFilterPosts(currentPage - 1);

    setCurrentPage(currentPage - 1);
    if (currentPage <= minPageNumberLimit + 1) {
      setMinPageNumberLimit(minPageNumberLimit - 1);
      setMaxPageNumberLimit(maxPageNumberLimit - 1);
    }
  };

  const handleNextBtn = () => {
    if (currentPage >= Math.ceil(numberPost / 15)) return;
    getFilterPosts(currentPage + 1);
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
            onClick={() => getFilterPosts(number)}>
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
