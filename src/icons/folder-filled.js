import React from 'react';
import PropTypes from 'prop-types';

const FolderFilled = props => {
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
      <path d="M20.406 6.038h-8.563v-.991a1.264 1.264 0 00-1.272-1.255H3.255A1.262 1.262 0 002 5.047v13.795c.006.692.563 1.25 1.255 1.255h17.151a1.264 1.264 0 001.28-1.247V7.293a1.264 1.264 0 00-1.271-1.255h-.009z"></path>
    </svg>
  );
};

FolderFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderFilled;
