import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import One from '../../components/FormOne';
import Two from '../../components/FormTwo';
import Three from '../../components/FormThree';
import Four from '../../components/FormFour';
import ProgressRing from '../../components/ProgressRing';
import Final from '../../components/Final';

const Main = () => {
  const [progress, setProgress] = useState(0);
  const [activeForm, setActiveForm] = useState(0);

  const forms = [
    {
      key: 0,
      render: () => <One next={setActiveForm} />,
    },
    {
      key: 1,
      render: () => <Two next={setActiveForm} />,
    },
    {
      key: 2,
      render: () => <Three next={setActiveForm} />,
    },
    {
      key: 3,
      render: () => <Four next={setActiveForm} />,
    },
    {
      key: 4,
      render: () => <Final next={setActiveForm} />,
    },
  ];

  const animatedForms = useTransition(activeForm, p => p, {
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
    config: config.stiff,
  });

  useEffect(() => {
    setProgress(activeForm * 25);
  }, [activeForm]);

  return (
    <main>
      <div className='rings'>
        <ProgressRing radius='160' stroke='20' progress={progress} />
      </div>
      <div className='forms'>
        {animatedForms.map(({ item, props, key }) => {
          const Item = forms[item].render;
          console.log(item);
          return (
            <animated.div key={key} style={{ ...props }}>
              <Item />
            </animated.div>
          );
        })}
        {/* <Final /> */}
      </div>
    </main>
  );
};

export default Main;
