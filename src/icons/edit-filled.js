import React from 'react';
import PropTypes from 'prop-types';

const EditFilled = props => {
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
        d="M21.067 6.431c.58.583.925 1.418.922 2.233-.003.818-.325 1.569-.936 2.168-.126.126-.733.675-1.61 1.457v5.271c0 1.23-.345 2.224-1.028 2.953-.729.778-1.762 1.173-3.065 1.173H6.392c-1.305 0-2.333-.395-3.061-1.173C2.645 19.784 2.3 18.79 2.3 17.56V6.176C2.3 3.6 3.869 2 6.392 2h8.958c2.303 0 3.81 1.361 4.045 3.569a3.2 3.2 0 011.672.862zM12.83 16.555c4.44-3.933 7.132-6.334 7.381-6.58.376-.37.575-.824.575-1.317a1.973 1.973 0 00-.57-1.375 1.954 1.954 0 00-1.366-.569c-.46 0-.93.171-1.328.569-.325.325-4.916 4.392-7.398 6.585a.636.636 0 00-.168.25l-1.243 3.347-.005.012c-.025.071-.106.3.036.445.14.14.38.07.46.047l.019-.005 3.417-1.255.19-.154z"
      ></path>
    </svg>
  );
};

EditFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EditFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EditFilled;
