import React, { useState } from 'react';
import { animated } from 'react-spring';

const Three = ({ next, style }) => {
  const [active, setActive] = useState(false);

  return (
    <animated.section style={{ ...style }}>
      <form action='post'>
        <h1>What is your birthdate?</h1>
        <input
          onChange={() => setActive(true)}
          type='date'
          name='birthday'
          id='bday'
        />
        <button
          disabled={!active}
          onClick={() => next(3)}
          className={active ? 'submit' : 'button_inactive'}
          type='submit'
        >
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
