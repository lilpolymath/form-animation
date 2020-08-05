import React, { useState } from 'react';
import { animated } from 'react-spring';

const One = ({ next, style }) => {
  const [active, setActive] = useState(false);

  return (
    <animated.section style={{ ...style }}>
      <form action='post'>
        <h1>What is your Zip Code?</h1>
        <input
          onChange={() => setActive(true)}
          type='text'
          name='zip code'
          pattern='\d{5}-?(\d{4})?'
          id='zip'
          placeholder='Zip Code'
        />
        <button
          disabled={!active}
          className={active ? 'submit' : 'button_inactive'}
          onClick={() => next(1)}
          type='submit'
        >
          Continue
        </button>
        <button className='back' type='submit'>
          Go Back
        </button>
      </form>
    </animated.section>
  );
};

export default One;
