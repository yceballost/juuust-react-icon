import React from 'react';
import PropTypes from 'prop-types';

const CheckedFilled = props => {
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
        d="M11.997 1c3.495 0 6.213.912 8.081 2.71C22.018 5.58 23 8.37 23 12.004c0 3.632-.984 6.418-2.922 8.286C18.21 22.088 15.492 23 11.997 23c-3.495 0-6.213-.912-8.079-2.71C1.981 18.42 1 15.634 1 12.002c0-3.632.981-6.421 2.918-8.289C5.784 1.912 8.502 1 11.998 1zm-1.138 15.62l6.458-8.638a.58.58 0 00-.12-.808.576.576 0 00-.805.116l-6.01 8.041-2.489-3.127a.577.577 0 00-.9.718l2.954 3.713c.11.138.276.216.451.216h.01a.572.572 0 00.45-.232z"
      ></path>
    </svg>
  );
};

CheckedFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckedFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckedFilled;
