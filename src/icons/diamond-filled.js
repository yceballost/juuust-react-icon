import React from 'react';
import PropTypes from 'prop-types';

const DiamondFilled = props => {
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
        d="M10.964 2H5.583l1.633 5.143L10.964 2zm7.142 0h-5.392l3.751 5.143L18.106 2zm.76.697L17.271 7.7h4.414l-2.82-5.003zm-1.894 5.947h4.613l-8.38 11.852 3.767-11.852zm-.975 0H7.692l4.151 13.042 4.154-13.042zM7.98 7.7l3.863-5.305L15.697 7.7H7.98zM2 7.7l2.824-5.01L6.417 7.7H2zm4.714.944h-4.61L10.482 20.5 6.714 8.644z"
      ></path>
    </svg>
  );
};

DiamondFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DiamondFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DiamondFilled;
