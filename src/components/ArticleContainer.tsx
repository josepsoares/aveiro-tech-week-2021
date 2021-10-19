import React from 'react';
import EnterDirectionWhenVisible from './animations/EnterDirectionWhenVisible';

const ArticleContainer: React.FC<{
  type: string;
  colors: string[];
}> = ({ type, colors, children }) => {
  return (
    <article
      className={`min-h-screen py-16 px-8 md:px-14 lg:px-24 ${colors[1]}`}
    >
      <div className={`${colors[0]}`}>
        <EnterDirectionWhenVisible dir="left" delay={0}>
          <h3 className="leading-tight text-big md:leading-none opacity-75 italic">
            the
          </h3>
        </EnterDirectionWhenVisible>
        <EnterDirectionWhenVisible dir="left" delay={0.6}>
          <h3 className="font-bold text-8xl md:text-huge leading-tight md:leading-none opacity-75 italic pl-4">
            {type}
          </h3>
        </EnterDirectionWhenVisible>
      </div>
      {children}
    </article>
  );
};

export default ArticleContainer;
