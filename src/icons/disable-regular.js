import React from 'react';
import PropTypes from 'prop-types';

const DisableRegular = props => {
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
        d="M0 12.003C0 3.828 4.415 0 11.997 0 19.577 0 24 3.828 24 12.003 24 20.18 19.578 24 11.997 24 4.415 24 0 20.179 0 12.003zM11.997 1.5c3.182 0 5.62.704 7.349 2.114L3.613 19.349c-1.41-1.728-2.114-4.166-2.114-7.346C1.5 4.935 4.935 1.5 11.997 1.5zm0 21.002c-3.166 0-5.597-.697-7.322-2.094l15.73-15.729c1.4 1.725 2.096 4.16 2.096 7.329 0 7.059-3.439 10.494-10.504 10.494z"
      ></path>
    </svg>
  );
};

DisableRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DisableRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DisableRegular;
