import React from 'react';
import PropTypes from 'prop-types';

const WarningLight = props => {
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
        d="M23 12.028C23 1.911 14.614 1.06 12.46 1.01c-.253-.006-.548-.009-.83-.009h-.212C9.21 1.019 1 1.776 1 11.966c0 10.201 8.286 11 10.496 11.03.113.004.229.004.344.004.232 0 .464-.003.664-.006C14.604 22.956 23 22.167 23 12.028zm-.917 0c0 9.16-7.347 10.008-9.598 10.049-.131.004-.277.005-.427.007-.072 0-.145 0-.218.002l-.328-.003c-.961-.013-3.431-.194-5.604-1.562-2.648-1.672-3.99-4.546-3.99-8.555 0-4.004 1.326-6.872 3.95-8.521 2.153-1.356 4.604-1.518 5.56-1.528h.203c.275 0 .56.003.807.01.961.025 3.428.225 5.613 1.596 2.676 1.678 4.032 4.539 4.032 8.505zm-10.086 3.65a.458.458 0 01-.457-.457V5.724a.458.458 0 01.914 0v9.497a.458.458 0 01-.457.457zm.72 1.885a.717.717 0 10-1.434 0 .717.717 0 001.434 0z"
      ></path>
    </svg>
  );
};

WarningLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WarningLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WarningLight;
