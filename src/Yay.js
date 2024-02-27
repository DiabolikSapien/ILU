import React from 'react';
import { Link } from 'react-router-dom';
import './Yay.css';

const Yay = () => {
  return (
    <div className='box'>
      <img alt='yayyy' className='gif' src='yay2.gif' />
      <div className='text box'>Yayyy~</div>
      <div>
        <Link className='app' to='https://wa.me/8210226151?text=Hey%20love%21%20I%20wanted%20to%20take%20a%20moment%20to%20tell%20you%20how%20much%20you%20mean%20to%20me.%20You%20are%20the%20reason%20I%20wake%20up%20with%20a%20smile%20every%20morning.%20Your%20existence%20fills%20my%20heart%20with%20childish%20joy,%20and%20I%20am%20so%20grateful%20to%20you.%20I%20love%20you%20more%20than%20words%20can%20express,%20and%20I%20just%20can%27t%20wait%20to%20create%20countless%20memories%20together.%20Thinking%20of%20you%20always%20and%20forever%20💖'>
          <button style={{ backgroundColor: 'green' }}>Umm HeRe👉</button>
        </Link>
      </div>

    </div>
  );
};

export default Yay;
