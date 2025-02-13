import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeftRegular = props => {
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
        d="M3.944 20.333a.89.89 0 00.641.258c.026 0 .05 0 .079-.003H16.75c.476 0 .865-.246 1.042-.66.19-.446.098-1.01-.219-1.34l-.008-.008-2.58-2.577 5.12-4.815.014-.014c.219-.219.449-.488.521-.824.079-.37-.042-.731-.36-1.078l-.018-.017-5.05-5.025c-.737-.737-1.577-.745-2.305-.017l-.006.005-4.79 4.905-2.378-2.378a.074.074 0 01-.017-.014c-.358-.328-.95-.42-1.406-.216-.39.174-.616.53-.614.956l-.005 12.145a.89.89 0 00.252.717zm12.807-.82H4.767L4.77 7.49c.065-.014.171 0 .213.031l2.448 2.448a.973.973 0 001.376-.017l.005-.005 4.857-4.972c.104-.107.255-.227.381-.227.101.003.244.09.401.246l5.04 5.017c.06.07.083.112.092.129-.012.028-.054.104-.222.274l-5.187 4.877-.012.011a.996.996 0 00-.294.676.95.95 0 00.275.7l2.652 2.652c.026.04.031.14.009.177a.184.184 0 01-.053.006z"
      ></path>
    </svg>
  );
};

ArrowDownLeftRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownLeftRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownLeftRegular;
