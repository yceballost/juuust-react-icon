import React from 'react';
import PropTypes from 'prop-types';

const CreditCardLight = props => {
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
        d="M21.598 13.126V9.317a.315.315 0 00-.003-.088V6.72a1.21 1.21 0 00-.368-.865 1.243 1.243 0 00-.876-.354H3.54A1.233 1.233 0 002.3 6.72v11.234c.008.676.555 1.22 1.23 1.22h16.821c.332 0 .648-.13.884-.36.234-.233.366-.55.363-.876v-4.724a.461.461 0 000-.088zm-18.493-.39V9.724h17.691v3.012H3.105zm.434-6.429a.427.427 0 00-.437.423v2.2h17.677v-2.2a.425.425 0 00-.425-.423H3.539zm17.128 11.944a.43.43 0 01-.313.118H3.54a.427.427 0 01-.436-.423v-4.413h17.691v4.413a.423.423 0 01-.13.305z"
      ></path>
    </svg>
  );
};

CreditCardLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CreditCardLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CreditCardLight;
