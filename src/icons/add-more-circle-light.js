import React from 'react';
import PropTypes from 'prop-types';

const AddMoreCircleLight = props => {
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
        d="M24 12.03C24 .995 14.848.066 12.499.01 12.225.003 11.91 0 11.604 0h-.24C8.958.02 0 .847 0 11.962c0 11.13 9.04 12 11.45 12.035a47.375 47.375 0 001.1-.003C14.84 23.948 24 23.091 24 12.03zM12.53 22.994C14.984 22.948 23 22.023 23 12.03c0-4.327-1.483-7.452-4.399-9.279-2.384-1.495-5.074-1.717-6.123-1.741-.266-.007-.574-.01-.87-.01h-.23c-1.041.01-3.715.187-6.061 1.666-2.869 1.8-4.316 4.928-4.316 9.295 0 4.372 1.461 7.513 4.354 9.333 2.37 1.493 5.06 1.687 6.109 1.704.12.004.239.004.358.004L12.06 23c.165-.001.324-.003.47-.007zm5.45-11.53a.5.5 0 010 .998h-5.485v5.498a.5.5 0 01-.997 0v-5.495H6.02a.5.5 0 010-.997h5.475v-5.43a.5.5 0 01.997 0v5.427h5.488z"
      ></path>
    </svg>
  );
};

AddMoreCircleLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddMoreCircleLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AddMoreCircleLight;
