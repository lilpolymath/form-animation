import React from 'react';

const Two = ({ next }) => {
  return (
    <section>
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
    </section>
  );
};

export default Two;
