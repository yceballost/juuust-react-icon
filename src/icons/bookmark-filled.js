import React from 'react';
import PropTypes from 'prop-types';

const BookmarkFilled = props => {
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
      <path d="M18.477 3.286v17.109c0 .496-.271.941-.722 1.16a1.413 1.413 0 01-.577.134 1.3 1.3 0 01-.79-.269l-3.731-3.67a.463.463 0 00-.644 0l-3.698 3.637c-.442.336-.96.386-1.412.168a1.283 1.283 0 01-.73-1.16V3.285C6.172 2.58 6.757 2 7.471 2h9.703c.726 0 1.302.58 1.302 1.286z"></path>
    </svg>
  );
};

BookmarkFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BookmarkFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BookmarkFilled;
