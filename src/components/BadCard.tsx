import React from 'react';
import Emoji from './Emoji';

const BadCard: React.FC<{
  imgSrc: string;
  title: string;
  text: string;
  emoji: string;
  emojiLabel: string;
}> = ({ imgSrc, title, text, emoji, emojiLabel }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full">
      <img
        src={imgSrc}
        alt={title}
        className="rounded-t-lg w-full h-60 object-cover"
      />
      <div className="p-6">
        <h2 className="font-bold mb-2 text-2xl text-secondary-bg flex items-center gap-1">
          <span>{title}</span>
          <span className="flex-none">
            <Emoji symbol={emoji} label={emojiLabel} isList={false} />
          </span>
        </h2>
        <p className="text-gray-800 mb-2 pl-0 md:pl-4">{text}</p>
      </div>
    </div>
  );
};

export default BadCard;
