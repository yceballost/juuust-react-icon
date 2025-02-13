import React from 'react';
import PropTypes from 'prop-types';

const BookmarkLight = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.206 2.156h9.703c.717 0 1.3.577 1.305 1.28v17.115c0 .493-.277.936-.725 1.154a1.303 1.303 0 01-1.37-.132l-3.731-3.672a.464.464 0 00-.644.006L8.04 21.54c-.437.336-.961.387-1.41.168a1.277 1.277 0 01-.725-1.154V3.439c0-.706.583-1.283 1.3-1.283zm9.9 18.799a.44.44 0 00.254-.401h.003V3.442a.448.448 0 00-.451-.445H7.209a.448.448 0 00-.451.445v17.115c0 .174.092.322.252.4a.452.452 0 00.473-.044l3.664-3.603c.255-.249.591-.372.922-.372.336 0 .666.126.918.372l3.687 3.636c.095.067.274.087.431.009z"
      ></path>
    </svg>
  );
};

BookmarkLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BookmarkLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BookmarkLight;
