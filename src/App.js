import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  const [please, setPlease] = useState(false);
  const [p, setP] = useState(null);

  const prettyPlease = () => {
    setPlease(!please);
  };

  const nope = () => {
    setTimeout(() => {
      const x = Math.random() * 90;
      const y = Math.random() * 90;

      setP({ x: `${x}%`, y: `${y}%` });
    }, 200);
  };


  return (
    <div className='box'>
      <img
        alt={please ? 'excited' : 'flowers'}
        className='gif'
        src={please ? 'excited.gif' : 'flowers.gif'}
      />
      Will you go out with me ?
      <div className='btns'>
        <Link className='yes' to='/yay'>
          <button onMouseOver={prettyPlease} onMouseOut={prettyPlease} style={{ backgroundColor: 'green'}}>
            Yes
          </button>
        </Link>
        <Link className='no' to='/no'>
          <button
            className='no'
            style={p ? { position: 'absolute', top: p.x, right: p.y } : null}
            // onClick={() => window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            onMouseOver={nope}
          >
            No
          </button>
        </Link>

      </div>
    </div>
  );
};

export default App;
