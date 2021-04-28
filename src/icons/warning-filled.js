import React from 'react';
import PropTypes from 'prop-types';

const WarningFilled = props => {
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
        d="M11.621 1c.285 0 .582.006.84.013C14.613 1.063 23 1.914 23 12.028c0 10.14-8.396 10.928-10.496 10.966-.2.003-.432.006-.664.006-.115 0-.231 0-.344-.003C9.286 22.966 1 22.164 1 11.962 1 1.776 9.208 1.02 11.418 1h.203zm-.313 4.72a.689.689 0 011.377 0v9.498a.689.689 0 11-1.377 0V5.721zm.689 12.69a.786.786 0 010-1.571c.432 0 .783.351.783.786 0 .435-.351.786-.783.786z"
      ></path>
    </svg>
  );
};

WarningFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WarningFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WarningFilled;
