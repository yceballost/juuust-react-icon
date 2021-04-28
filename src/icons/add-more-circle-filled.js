import React from 'react';
import PropTypes from 'prop-types';

const AddMoreCircleFilled = props => {
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
        d="M11.582 0c.314 0 .642.007.922.014 2.35.054 11.5.983 11.496 12.02 0 11.058-9.16 11.918-11.452 11.96-.212.003-.457.006-.707.006-.13 0-.263 0-.39-.003C9.042 23.962 0 23.092 0 11.962 0 .847 8.955.02 11.366 0h.216zm1.164 12.714h5.236a.753.753 0 00.752-.748.751.751 0 00-.752-.751h-5.236V6.038a.751.751 0 00-1.503 0v5.173H6.018a.751.751 0 100 1.503h5.225v5.248a.751.751 0 001.503 0v-5.248z"
      ></path>
    </svg>
  );
};

AddMoreCircleFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddMoreCircleFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AddMoreCircleFilled;
