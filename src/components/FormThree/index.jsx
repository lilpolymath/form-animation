import React from 'react';
import { animated } from 'react-spring';

const Three = ({ next, style }) => {
  return (
    <animated.section style={{ ...style }}>
      <form action='post'>
        <h1>What is your birthdate?</h1>
        <input type='date' name='birthday' id='bday' />
        <button onClick={() => next(3)} className='submit' type='submit'>
          Continue
        </button>
        <button onClick={() => next(1)} className='back' type='submit'>
          Go Back
        </button>
      </form>
    </animated.section>
  );
};

export default Three;
