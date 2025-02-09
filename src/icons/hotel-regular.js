import React from 'react';
import PropTypes from 'prop-types';

const HotelRegular = props => {
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
        d="M12.255 2.011A20.49 20.49 0 0011.518 2h-.196C9.347 2.017 2 2.697 2 11.812c0 9.13 7.417 9.843 9.395 9.874.1.003.204.003.308.003.196 0 .395-.003.591-.006 1.877-.036 9.392-.74 9.392-9.812 0-9.053-7.504-9.815-9.431-9.86zm-.922 1.219h.185c.236 0 .47.002.706.008 2.476.062 8.23 1.02 8.233 8.63 0 7.611-5.723 8.538-8.183 8.583-.173.003-.37.006-.57.006-.099 0-.197 0-.292-.003-2.46-.034-8.18-.947-8.18-8.642 0-7.68 5.664-8.56 8.101-8.582zm4.34 2.815c.588 0 1.066.476 1.066 1.067v9.465c0 .588-.476 1.067-1.067 1.067h-2.16a1.067 1.067 0 01-1.067-1.067v-2.922h-1.204v2.92c0 .587-.48 1.066-1.067 1.064h-2.16a1.067 1.067 0 01-1.067-1.068V7.112c0-.588.476-1.067 1.067-1.067h2.16c.588 0 1.067.476 1.067 1.064v2.799h1.202V7.112c0-.588.476-1.067 1.067-1.067h2.162zm-2.16 1.067h2.16v9.465h-2.16v-3.986h-3.34v3.986H8.015V7.112h2.16v3.86h3.339v-3.86z"
      ></path>
    </svg>
  );
};

HotelRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HotelRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HotelRegular;
