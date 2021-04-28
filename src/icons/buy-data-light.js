import React from 'react';
import PropTypes from 'prop-types';

const BuyDataLight = props => {
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
        d="M14.179 14.677c-1.703 0-3.538-.395-3.538-1.26v-2.605c0-.154.126-.28.28-.28a.28.28 0 01.28.28c0 .039.134.238.754.423.588.179 1.378.277 2.224.277.846 0 1.633-.098 2.224-.274.622-.188.753-.387.753-.423 0-.154.126-.28.28-.28.154 0 .28.126.28.28v2.605c0 .865-1.832 1.257-3.537 1.257zm-2.978-3.14v1.883c0 .039.134.238.754.422.588.177 1.378.275 2.224.275.846 0 1.633-.098 2.224-.275.622-.187.753-.386.753-.422v-1.883c-.672.364-1.854.535-2.977.535-1.124 0-2.303-.17-2.978-.535z"
      ></path>
    </svg>
  );
};

BuyDataLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BuyDataLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BuyDataLight;
