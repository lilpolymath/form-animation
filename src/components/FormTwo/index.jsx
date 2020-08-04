import React, { useState } from 'react';
import { animated } from 'react-spring';

const Two = ({ next, style }) => {
  const [active, setActive] = useState(false);

  return (
    <animated.section style={{ ...style }}>
      <form action='post'>
        <h1>What is your Gender?</h1>
        <div className='options gender radio'>
          <input
            onChange={() => setActive(true)}
            type='radio'
            name='gender'
            id='male'
            value='male'
          />
          <label htmlFor='male'>
            <svg
              id='Capa_1'
              height='7rem'
              viewBox='0 0 512 512'
              width='7rem'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='m276.956 0v57.674h136.589l-101.389 101.389c-32.544-24.144-72.837-38.431-116.471-38.431-108.074 0-195.685 87.61-195.685 195.684 0 108.073 87.611 195.684 195.684 195.684s195.684-87.611 195.684-195.684c0-43.634-14.287-83.928-38.431-116.472l101.389-101.388v136.589h57.674v-235.045zm-81.272 447.552c-72.48 0-131.237-58.757-131.237-131.237s58.757-131.237 131.237-131.237 131.237 58.757 131.237 131.237c0 72.481-58.757 131.237-131.237 131.237z' />
              </g>
            </svg>
          </label>
          <input
            onChange={() => setActive(true)}
            type='radio'
            name='gender'
            id='female'
            value='female'
          />
          <label htmlFor='female'>
            <svg
              id='Capa_1'
              height='7rem'
              viewBox='0 0 512 512'
              width='7rem'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='m401.9 145.9c0-80.578-65.321-145.9-145.9-145.9s-145.9 65.322-145.9 145.9c0 70.706 50.298 129.659 117.063 143.045v103.209h-61.891v57.674h61.891v62.172h57.674v-62.172h61.891v-57.674h-61.891v-103.209c66.766-13.386 117.063-72.339 117.063-143.045zm-236.628 0c0-50.108 40.62-90.728 90.728-90.728s90.728 40.62 90.728 90.728-40.62 90.728-90.728 90.728-90.728-40.62-90.728-90.728z' />
              </g>
            </svg>
          </label>
        </div>
        <button
          onClick={() => next(2)}
          className={active ? 'submit' : 'button_inactive'}
          type='submit'
        >
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
