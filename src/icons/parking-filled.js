import React from 'react';
import PropTypes from 'prop-types';

const ParkingFilled = props => {
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
        d="M16.046 2.527c1.037.263 1.891.711 2.54 1.333 1.113 1.05 1.676 2.675 1.679 4.82 0 2.119-.513 3.777-1.524 4.928-.602.7-1.39 1.221-2.33 1.55-.889.31-1.975.467-3.23.467h-2.028v5.392c0 .457-.364.83-.813.83H6.312a.822.822 0 01-.812-.83V2.99c0-.46.364-.83.812-.83h6.068c1.47 0 2.703.124 3.666.368zm-1.96 8.658c.246-.073.459-.202.655-.4.367-.373.557-1.093.557-2.079 0-.625-.087-1.454-.512-1.871-.154-.143-.398-.263-.709-.339-.403-.098-.95-.148-1.622-.148H11.15v4.974h1.431c.846 0 1.286-.072 1.504-.137z"
      ></path>
    </svg>
  );
};

ParkingFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ParkingFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ParkingFilled;
