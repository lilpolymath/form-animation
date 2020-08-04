import React, { useState } from 'react';

const Four = ({ next }) => {
  const [active, setActive] = useState(false);

  return (
    <section>
      <form action='post'>
        <h1>How many members in your household?</h1>
        <div className='options radio'>
          <input
            onChange={() => setActive(true)}
            type='radio'
            name='number'
            id='one'
            value='1'
          />
          <label htmlFor='one'>1</label>
          <input
            onChange={() => setActive(true)}
            type='radio'
            name='number'
            id='two'
            value='2'
          />
          <label htmlFor='two'>2</label>
          <input
            onChange={() => setActive(true)}
            type='radio'
            name='number'
            id='more'
            value='3'
          />
          <label htmlFor='more'>3+</label>
        </div>
        <button className={active ? 'submit' : 'button_inactive'} type='submit'>
          View my Options
        </button>
        <button onClick={() => next(2)} className='back' type='submit'>
          Go Back
        </button>
      </form>
    </section>
  );
};

export default Four;
