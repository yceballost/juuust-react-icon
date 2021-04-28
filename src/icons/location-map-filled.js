import React from 'react';
import PropTypes from 'prop-types';

const LocationMapFilled = props => {
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
        d="M19.522 13.043l2.294 8.026a.605.605 0 01-.826.717l-4.168-1.838-4.605 1.843a.602.602 0 01-.365.026l-.112-.026a.475.475 0 01-.09-.028l-4.428-1.815-4.23 1.838a.605.605 0 01-.815-.737l2.527-8.025a.599.599 0 01.871-.342l2.244 1.269.322-.092c-1.143-1.92-2.112-4.062-2.107-5.748.014-3.734 2.244-5.961 5.97-5.961h.028C15.774 2.16 18 4.402 17.99 8.144c-.006 1.757-1.014 3.913-2.18 5.815l.168.054 2.695-1.345a.601.601 0 01.849.375zm-7.493-3.932c-.89 0-1.305-.415-1.305-1.306 0-.89.414-1.305 1.305-1.305.89 0 1.305.415 1.305 1.305.003.888-.412 1.306-1.305 1.306zm4.672 5.893l.664 3.869 2.941 1.294-1.742-6.093-1.863.93zm-4.084 3.311l-.014 2.028 3.546-1.423-.647-3.793-.364-.117c-1.028 1.532-2.045 2.773-2.52 3.305zm-4.765.591l3.544 1.454.014-1.994c-.555-.597-1.586-1.883-2.605-3.44l-.516.151-.437 3.83zm-1.21-.017l-2.918 1.27 1.907-6.057 1.468.83-.457 3.957z"
      ></path>
    </svg>
  );
};

LocationMapFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LocationMapFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LocationMapFilled;
