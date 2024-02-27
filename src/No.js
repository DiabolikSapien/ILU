import React from 'react';
import { Link } from 'react-router-dom';
import './No.css';

const No = () => {
  return (
    <div className='box'>
      <img alt='No' className='image' src='tears.gif' />
      <div className='text'>No, don't do this to me</div>
      <div>
        <Link className='app' to='/'>
          <button style={{ backgroundColor: 'green' }}>👈Go BAcK!😭</button>
        </Link>
      </div>
    </div>
  );
};

export default No;
