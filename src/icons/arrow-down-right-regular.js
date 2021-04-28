import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRightRegular = props => {
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
        d="M19.616 20.644a.879.879 0 00.717-.255.901.901 0 00.255-.717V7.585c.003-.476-.244-.865-.658-1.044-.445-.19-1.008-.098-1.339.218l-.008.008-2.58 2.58-4.813-5.115-.013-.014c-.219-.218-.488-.448-.824-.52-.37-.079-.731.041-1.079.36l-.016.018-5.025 5.047c-.737.737-.746 1.577-.017 2.306l.005.005 4.902 4.79-2.378 2.378c-.003.006-.008.011-.014.017-.328.358-.42.95-.216 1.406.174.384.524.614.944.614h.012l12.145.005zm-.103-1.075L7.49 19.563c-.014-.062 0-.17.031-.21l2.448-2.448a.973.973 0 00-.017-1.376l-.005-.005-4.972-4.857c-.107-.104-.23-.255-.227-.381.003-.101.09-.244.246-.4l5.017-5.037a.604.604 0 01.129-.093c.028.011.104.054.275.222l4.88 5.184.01.012a.97.97 0 001.376.02l2.65-2.65a.241.241 0 01.176-.009.175.175 0 01.006.05v11.983z"
      ></path>
    </svg>
  );
};

ArrowDownRightRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownRightRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownRightRegular;
