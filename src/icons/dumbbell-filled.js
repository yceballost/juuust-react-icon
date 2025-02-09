import React from 'react';
import PropTypes from 'prop-types';

const DumbbellFilled = props => {
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
        d="M8.045 9.49V6.675c0-.74-.574-1.339-1.28-1.336H5.667c-.692 0-1.255.577-1.275 1.297v10.532c.02.717.583 1.294 1.275 1.294h1.098c.708 0 1.28-.596 1.28-1.336v-2.815h.014V9.49h-.014zm12.361-2.703c.706 0 1.28.6 1.28 1.336v7.55c0 .739-.574 1.335-1.28 1.335h-.24V6.784h.24v.003zM2 8.126c0-.74.571-1.336 1.28-1.336h.26v10.224h-.26c-.706 0-1.28-.6-1.28-1.336V8.126zm6.91 5.793v-4.04h5.894v4.04H8.91zm10.4-7.132v-.112c0-.74-.57-1.339-1.28-1.336h-1.097c-.709 0-1.28.597-1.28 1.336v10.448c0 .737.574 1.336 1.28 1.336h1.098c.706 0 1.28-.596 1.28-1.336v-.112h.003V6.787h-.003z"
      ></path>
    </svg>
  );
};

DumbbellFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DumbbellFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DumbbellFilled;
