import React from 'react';
import PropTypes from 'prop-types';

const CreditCardVisaFilled = props => {
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
        d="M21.686 11.518V8.527a.171.171 0 00-.009-.05.185.185 0 01-.008-.032V6.742a1.42 1.42 0 00-1.428-1.406H3.44A1.42 1.42 0 002.01 6.742V8.48c0 .005-.003.01-.004.016A.106.106 0 002 8.527v2.991a.1.1 0 00.006.032l.005.019v6.305A1.42 1.42 0 003.44 19.28h16.8c.788 0 1.43-.63 1.43-1.406v-6.272a.228.228 0 01.008-.037.178.178 0 00.008-.047zm-18.246-5a.222.222 0 00-.224.222v1.193h17.246V6.74c0-.12-.1-.222-.221-.222H3.44zm16.8 11.575a.22.22 0 00.222-.219v-5.762H3.216v5.762c0 .12.1.219.224.219h16.8zm-5.733-1.748c.513-.009 1.123-.219 1.123-1.168 0-.95-.616-1.163-1.134-1.177h-.146c-.504.003-1.106.21-1.106 1.168 0 .96.61 1.171 1.12 1.18l.143-.003zm5.017-1.166c0-1.59-1.16-2.182-2.149-2.204a3.837 3.837 0 00-.185-.006c-.215.003-.829.048-1.35.432a2.391 2.391 0 00-1.319-.429c-.056-.003-.12-.003-.185-.003-.986.009-2.14.588-2.14 2.196s1.16 2.194 2.151 2.208h.174a2.37 2.37 0 001.333-.429c.499.37 1.076.429 1.345.431h.173c.992-.016 2.152-.602 2.152-2.196z"
      ></path>
    </svg>
  );
};

CreditCardVisaFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CreditCardVisaFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CreditCardVisaFilled;
