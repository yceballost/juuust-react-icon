import React from 'react';
import PropTypes from 'prop-types';

const TrendDownRegular = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M21.842 14.778l-.429 3.482a.787.787 0 01-.787.686h-3.49a.787.787 0 01-.793-.778.79.79 0 01.793-.779h1.882l-4.986-6.95-6.793 2.928a.818.818 0 01-1.016-.334L2.262 6.168a.777.777 0 01.294-1.062l.008-.005a.8.8 0 011.079.294l3.61 6.255 6.732-2.894a.8.8 0 01.969.263l5.117 7.146.19-1.574a.803.803 0 01.889-.686c.428.047.74.437.692.865v.008z"></path>
    </svg>
  );
};

TrendDownRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrendDownRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrendDownRegular;
