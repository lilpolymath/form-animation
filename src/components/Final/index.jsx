import React from 'react';

const Final = ({ next }) => {
  return (
    <section className='success'>
      <h1>
        Thank you! <br />
        Your response has been recorded.
      </h1>
      <button onClick={() => next(3)} className='back' type='submit'>
        Go Back
      </button>
    </section>
  );
};

export default Final;
