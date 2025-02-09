import React from 'react';
import PropTypes from 'prop-types';

const ApartmentBuildingFilled = props => {
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
        d="M5.74 2h12.331c.636 0 1.216.574 1.219 1.202v17.283c0 .638-.569 1.201-1.216 1.201h-4.05V16.18a.407.407 0 00-.406-.409h-3.42a.407.407 0 00-.407.41v5.506h-4.05c-.647 0-1.216-.56-1.216-1.201V3.202c0-.628.58-1.202 1.216-1.202zm4.88 6.034a.407.407 0 00.407-.41V5.009a.407.407 0 00-.407-.409H8.032a.407.407 0 00-.406.41v2.616c0 .224.182.409.406.409h2.588zm5.524-.41a.407.407 0 01-.406.41H13.15a.409.409 0 01-.406-.41V5.009c0-.226.182-.409.406-.409h2.588c.224 0 .406.183.406.41v2.616zm0 5.138a.407.407 0 01-.406.409H13.15a.409.409 0 01-.406-.41v-2.618c0-.227.182-.41.406-.41h2.588c.224 0 .406.186.406.41v2.619zm-5.117 0a.407.407 0 01-.407.409H8.032a.409.409 0 01-.406-.41v-2.618c0-.227.182-.41.406-.41h2.588c.225 0 .407.186.407.41v2.619z"
      ></path>
    </svg>
  );
};

ApartmentBuildingFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ApartmentBuildingFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ApartmentBuildingFilled;
