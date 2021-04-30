import React from 'react';

import './Notification.scss';

interface Props {
  type: string;
  heading: string;
  text: string;
  status?: string;
  hide: () => void;
}

const Notice: React.FC<Props> = ({ type, heading, text, status, hide }) => {
  const Type = () => {
    if (type === 'YN')
      return (
        <div className='btn-wrap'>
          <button onClick={hide}>Yes</button>
          <button onClick={hide}>No</button>
        </div>
      );
    else if (type === 'OK') {
      return (
        <div className='btn-wrap'>
          <button onClick={hide}>OK</button>
        </div>
      );
    }
  };

  return (
    <div className={`${status} notification-container`}>
      <h2 className={`${status}`}>{heading}</h2>
      <div className='content'>
        <div className='text-content'>
          <p>{text}</p>
        </div>
        {Type()}
      </div>
    </div>
  );
};

export default Notice;
