import React from 'react';
import PropTypes from 'prop-types';

const CreditCardFilled = props => {
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
        d="M21.705 9.28a.172.172 0 01.01.048v3.764a.173.173 0 01-.01.049.208.208 0 00-.008.036v4.64c0 .805-.666 1.46-1.484 1.46H3.523c-.82 0-1.487-.655-1.487-1.46v-4.674a.132.132 0 00-.005-.02c-.003-.009-.006-.018-.006-.028V9.328c0-.01.003-.02.006-.028a.133.133 0 00.005-.02V6.793c0-.807.667-1.46 1.488-1.46h16.689c.818 0 1.484.653 1.484 1.46v2.45a.21.21 0 00.008.036zM3.524 6.565h16.689c.129 0 .232.1.232.227v1.919H3.291v-1.92c0-.125.104-.226.233-.226zm16.689 11.479H3.523a.229.229 0 01-.232-.227V13.71h17.154v4.107a.233.233 0 01-.232.227z"
      ></path>
    </svg>
  );
};

CreditCardFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CreditCardFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CreditCardFilled;
