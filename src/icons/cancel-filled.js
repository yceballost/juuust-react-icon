import React from 'react';
import PropTypes from 'prop-types';

const CancelFilled = props => {
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
        d="M0 12.003C0 3.828 4.415 0 11.997 0 19.577 0 24 3.828 24 12.003 24 20.18 19.578 24 11.997 24 4.415 24 0 20.179 0 12.003zm17.85 5.854a.75.75 0 000-1.063L13.052 12l4.798-4.795a.75.75 0 10-1.062-1.062l-4.795 4.798-4.78-4.78a.746.746 0 00-1.06 0 .746.746 0 000 1.058L10.936 12l-4.781 4.78a.75.75 0 001.058 1.063l4.781-4.781 4.795 4.795a.752.752 0 001.062 0z"
      ></path>
    </svg>
  );
};

CancelFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CancelFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CancelFilled;
