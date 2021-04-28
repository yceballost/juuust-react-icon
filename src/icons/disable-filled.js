import React from 'react';
import PropTypes from 'prop-types';

const DisableFilled = props => {
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
        d="M0 12.003C0 3.828 4.415 0 11.997 0 19.577 0 24 3.828 24 12.003 24 20.18 19.578 24 11.997 24 4.415 24 0 20.179 0 12.003zM11.997 2.001c2.895 0 5.146.608 6.775 1.834L3.8 18.805C2.59 17.185 2 14.93 2 12.004c0-6.823 3.176-10.002 9.996-10.002zm0 19.998c-2.913 0-5.157-.587-6.779-1.783l14.964-14.96C21.394 6.884 22 9.125 22 12.003c0 6.82-3.18 9.996-10.002 9.996z"
      ></path>
    </svg>
  );
};

DisableFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DisableFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DisableFilled;
