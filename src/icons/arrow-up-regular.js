import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRegular = props => {
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
        d="M15.028 21.734c.563 0 .986-.146 1.283-.448.322-.317.476-.768.468-1.384l.02-6.882a.317.317 0 01.055-.037l3.65-.003c.507.009.93-.26 1.107-.694.201-.488.039-1.079-.407-1.505L12.502 2.3a.82.82 0 00-.593-.275h-.006c-.359 0-.602.247-.686.334l-8.712 8.658c-.434.423-.588.905-.42 1.322.098.244.39.653 1.247.658h.005l3.563-.005a.47.47 0 01.053.156L6.95 19.86v.008c.008.418.064 1.017.487 1.426.42.406 1.025.445 1.445.437h6.045c.034.003.067.003.1.003zm-.078-1.093H8.87c-.344.009-.577-.036-.672-.128-.095-.093-.149-.32-.154-.656l.003-6.709c0-.437-.342-1.246-.995-1.246l-3.711.006c-.067 0-.12-.006-.163-.012a.866.866 0 01.09-.098l.006-.005 8.619-8.566 8.554 8.336.006.006c.165.156.162.288.148.308a.193.193 0 01-.084.014h-.008l-3.678.005c-.507 0-1.12.47-1.12 1.056l-.02 6.955v.009c.003.207-.02.476-.14.597-.123.117-.395.134-.602.128z"
      ></path>
    </svg>
  );
};

ArrowUpRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpRegular;
