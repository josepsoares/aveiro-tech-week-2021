import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 px-24">
      <p className="text-sm text-right text-lg-grey">
        {new Date().getFullYear()} -{' '}
        <a
          rel="noopener noreferrer"
          href="https://www.ua.pt/pt/curso/508"
          target="_blank"
        >
          mtcw
        </a>{' '}
        -{' '}
        <a rel="noopener noreferrer" href="https://www.ua.pt" target="_blank">
          ua
        </a>
      </p>
    </footer>
  );
};

export default Footer;
