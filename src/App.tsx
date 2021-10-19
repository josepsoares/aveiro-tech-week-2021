import React from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useTransition, config } from '@react-spring/web';

import Routes from './routes/routes';
import ScrollToTop from './routes/ScrollToTop';
import Footer from './components/Footer';

const App = () => {
  // Transition between routes
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { position: 'absolute' as any, opacity: 0, display: 'none' },
    enter: { position: 'static' as any, opacity: 1, display: 'block' },
    leave: { position: 'absolute' as any, opacity: 0, display: 'none' },
    config: { duration: 1000, mass: 1, tension: 280, friction: 60 },
  });

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden">
        {transitions((props, item) => (
          <animated.main
            style={{
              display: props.display,
              opacity: props.opacity,
              position: props.position,
            }}
          >
            <Routes location={item} />
          </animated.main>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default App;
