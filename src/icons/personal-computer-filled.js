import React from 'react';
import PropTypes from 'prop-types';

const PersonalComputerFilled = props => {
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
        d="M4.684 15.769c-1.597 0-2.513-.91-2.513-2.502v-4.28c0-.776.213-1.386.636-1.815.434-.442 1.067-.666 1.877-.666l9.16-.006c.809 0 1.442.224 1.876.667.423.428.636 1.039.636 1.815v4.28c0 1.59-.916 2.501-2.513 2.501l-2.203.002.557.574 3.621-.002a.55.55 0 010 1.099L2.71 17.44a.55.55 0 010-1.098l3.53-.001.55-.574H4.683zm3.623-.002l-.549.574 2.911-.001-.557-.574H8.307zm12.057 1.652h-1.997a1.28 1.28 0 01-1.12-.61c-.213-.34-.317-.8-.317-1.407l-.005-6.88c0-.607.103-1.067.316-1.406.25-.392.647-.61 1.12-.61h1.998c.434 0 1.448.196 1.448 2.014l.003 6.88c.003 1.823-1.011 2.019-1.445 2.019z"
      ></path>
    </svg>
  );
};

PersonalComputerFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PersonalComputerFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PersonalComputerFilled;
