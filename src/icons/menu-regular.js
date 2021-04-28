import React from 'react';
import PropTypes from 'prop-types';

const MenuRegular = props => {
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
        d="M3.003 6.242a.834.834 0 01-.843-.821c0-.451.378-.82.843-.82H21c.465 0 .843.366.843.82a.834.834 0 01-.843.82H3.003zm18 4.921c.465 0 .843.367.843.82a.832.832 0 01-.843.822h-18a.832.832 0 01-.843-.821c0-.454.378-.82.843-.82h18zm.843 7.384a.832.832 0 00-.843-.82h-18a.832.832 0 00-.843.82c.006.46.384.826.843.82h18a.832.832 0 00.843-.82z"
      ></path>
    </svg>
  );
};

MenuRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MenuRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MenuRegular;
