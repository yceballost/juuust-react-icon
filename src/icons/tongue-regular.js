import React from 'react';
import PropTypes from 'prop-types';

const TongueRegular = props => {
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
        d="M20.713 4.081a.624.624 0 01.854-.17c.283.184.364.56.177.834-.815 1.21-1.9 2.151-3.213 2.846a.299.299 0 00.007.02.178.178 0 01.01.036c.067.807.1 1.689.1 2.703 0 5.913-1.125 9.851-6.63 9.851-5.504 0-6.633-3.938-6.633-9.851 0-1.036.037-1.938.107-2.754C4.17 6.9 3.08 5.955 2.262 4.736a.596.596 0 01.177-.837.625.625 0 01.854.174c1.653 2.467 4.585 3.72 8.714 3.72 4.123 0 7.053-1.25 8.706-3.712zm-8.698 14.916c4.037 0 5.398-2.182 5.398-8.641 0-.824-.022-1.555-.07-2.224-1.364.515-2.94.798-4.73.851l.038 7.048a.61.61 0 01-.613.608h-.003a.612.612 0 01-.616-.603l-.04-7.056c-1.772-.053-3.338-.336-4.694-.843a33.057 33.057 0 00-.067 2.219c0 6.459 1.361 8.641 5.397 8.641z"
      ></path>
    </svg>
  );
};

TongueRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TongueRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TongueRegular;
