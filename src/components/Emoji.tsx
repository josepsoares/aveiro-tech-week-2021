import React, { memo } from 'react';
import twemoji from 'twemoji';

const Emoji: React.FC<{ label: string; symbol: string; isList: boolean }> = ({
  label,
  symbol,
  isList,
}) => (
  <span
    className="px-1.5 py-0 h-full inline-flex items-end justify-center cursor-default"
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
    role="img"
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(symbol, {
        className: isList ? 'w-4 md:w-8' : 'w-4 md:w-8 h-auto ',
        folder: 'svg',
        ext: '.svg',
      }),
    }}
  />
);

export default memo(Emoji);
