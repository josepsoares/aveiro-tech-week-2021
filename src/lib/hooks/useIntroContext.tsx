import React, { createContext, useState } from 'react';

export const IntroContext = createContext<
  | {
      playIntro: boolean;
      loading: boolean;
      checkIntroInLocalStorage: () => void;
    }
  | any
>(null);

const IntroContextProvider: React.FC<{
  children?: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [playIntro, setPlayIntro] = useState(true);
  const [loading, setLoading] = useState(true);

  const checkIntroInLocalStorage = () => {
    setLoading(true);
    const storage = window.localStorage;
    const currTimestamp = Date.now();
    const storedTimestamp = storage.getItem('timestamp');

    if (storedTimestamp && typeof storedTimestamp === 'string') {
      const timeLimit = 2 * 60 * 60 * 1000;
      const timestamp = JSON.parse(storedTimestamp);
      const hasTimePassed = currTimestamp - timestamp > timeLimit;

      if (hasTimePassed) {
        storage.setItem('timestamp', currTimestamp.toString());
        setPlayIntro(true);
        setLoading(false);
      } else {
        setPlayIntro(false);
        setLoading(false);
      }
    } else {
      storage.setItem('timestamp', currTimestamp.toString());
      setPlayIntro(true);
      setLoading(false);
    }
  };

  console.log(playIntro);

  return (
    <IntroContext.Provider
      value={{ playIntro, loading, checkIntroInLocalStorage }}
    >
      {children}
    </IntroContext.Provider>
  );
};

export default IntroContextProvider;
