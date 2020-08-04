import React from 'react';
import { animated } from 'react-spring';

const Two = ({ next, style }) => {
  return (
    <animated.section style={{ ...style }}>
      <form action='post'>
        <h1>What is your Gender?</h1>
        <input type='radio' name='gender' value='male' />
        <input type='radio' name='gender' value='female' />
        <button onClick={() => next(2)} className='submit' type='submit'>
          Continue
        </button>
        <button onClick={() => next(0)} className='back' type='submit'>
          Go Back
        </button>
      </form>
    </animated.section>
  );
};

export default Two;
