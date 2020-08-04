import React from 'react';

const One = ({ next }) => {
  return (
    <section>
      <form action='post'>
        <h1>What is your Zip Code?</h1>
        <input
          type='text'
          name='zip code'
          pattern='\d{5}-?(\d{4})?'
          id='zip'
          placeholder='Zip Code'
        />
        <button className='submit' onClick={() => next(1)} type='submit'>
          Continue
        </button>
        <button className='back' type='submit'>
          Go Back
        </button>
      </form>
    </section>
  );
};

export default One;
