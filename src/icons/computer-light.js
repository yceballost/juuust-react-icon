import React from 'react';
import PropTypes from 'prop-types';

const ComputerLight = props => {
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
        d="M5.319 17.452c-1.042 0-1.84-.283-2.381-.84-.518-.538-.782-1.32-.782-2.32V8.015c0-1 .264-1.776.782-2.305.535-.55 1.336-.827 2.378-.827l13.356-.008c1.042 0 1.843.277 2.378.826.518.533.781 1.308.781 2.306v6.277c0 1-.263 1.781-.781 2.32-.538.557-1.34.84-2.381.84l-13.35.008zM18.674 5.435L5.32 5.444c-1.751 0-2.603.84-2.603 2.571v6.277c0 .852.21 1.499.625 1.93.429.446 1.093.67 1.978.67l13.355-.009c.883 0 1.55-.224 1.978-.67.415-.428.625-1.078.625-1.929V8.007c-.003-1.731-.855-2.572-2.603-2.572zM2.156 18.82c0 .154.126.28.28.28l19.118-.008a.28.28 0 00.28-.28.28.28 0 00-.28-.28l-19.118.008a.28.28 0 00-.28.28z"
      ></path>
    </svg>
  );
};

ComputerLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ComputerLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ComputerLight;
