import React from 'react';
import PropTypes from 'prop-types';

const HotelFilled = props => {
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
        d="M21.686 11.868c0-9.053-7.504-9.815-9.431-9.86A49.983 49.983 0 0011.322 2C9.347 2.02 2 2.695 2 11.812c0 9.13 7.415 9.843 9.392 9.871.254.005.528.002.768 0l.134-.002c1.88-.037 9.392-.743 9.392-9.813zm-8.179-5.165h2.16c.226 0 .409.182.409.409v9.468a.41.41 0 01-.41.409h-2.159a.41.41 0 01-.409-.41v-3.576h-2.515v3.577a.41.41 0 01-.41.409H8.015a.41.41 0 01-.409-.41V7.113a.41.41 0 01.409-.409h2.16a.41.41 0 01.409.409v3.451h2.515V7.112a.41.41 0 01.409-.409z"
      ></path>
    </svg>
  );
};

HotelFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HotelFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HotelFilled;
