import React, { useState, useEffect, useRef } from 'react';
import { useTransition, animated, config } from 'react-spring';

import One from '../../components/FormOne';
import Two from '../../components/FormTwo';
import Three from '../../components/FormThree';
import Four from '../../components/FormFour';
import ProgressRing from '../../components/ProgressRing';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Main = () => {
  const [progress, setProgress] = useState(0);
  const [activeForm, setActiveForm] = useState(0);

  const forms = [
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <One next={setActiveForm} />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Two next={setActiveForm} />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Three next={setActiveForm} />
      </animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style }}>
        <Four next={setActiveForm} />
      </animated.div>
    ),
  ];

  const animatedForms = useTransition(forms[activeForm], p => p, {
    from: {
      opacity: 0,
      position: 'absolute',
    },
    enter: {
      opacity: 1,
      position: 'relative',
    },
    leave: {
      opacity: 0,
      position: 'absolute',
    },
    // config: { ...config.gentle, duration: 2000 },
  });

  useInterval(() => {
    progress !== 100 && setProgress(progress + 25);
  }, 1000);

  return (
    <main>
      <div className='rings'>
        <ProgressRing radius='120' stroke='20' progress={progress} />
      </div>
      <div className='forms'>
        {animatedForms.map(({ item, props, key }) => {
          const Item = item;
          return <Item style={props} />;
        })}
      </div>
    </main>
  );
};

export default Main;
