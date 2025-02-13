import React from 'react';
import PropTypes from 'prop-types';

const LocationRegular = props => {
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
        d="M11.627 21.811a.6.6 0 00.854 0c.83-.842 6.664-7.921 6.676-12.603C19.17 4.708 16.53 2.014 12.1 2h-.032C7.657 2 5.014 4.677 5 9.165c-.014 4.363 5.276 11.275 6.627 12.646zM6.206 9.168c.011-3.834 2.093-5.945 5.862-5.945h.029c3.789.014 5.868 2.136 5.856 5.982-.011 3.57-4.263 9.36-5.902 11.272-1.8-2.088-5.856-7.902-5.845-11.31zm5.874-1.869c-.97 0-1.445.48-1.445 1.465 0 .987.472 1.468 1.445 1.468.973 0 1.445-.481 1.445-1.465 0-.987-.475-1.465-1.445-1.468zM9.429 8.767c0 1.658 1.015 2.69 2.65 2.69 1.636 0 2.652-1.032 2.652-2.69s-1.016-2.691-2.651-2.691c-1.636 0-2.651 1.033-2.651 2.69z"
      ></path>
    </svg>
  );
};

LocationRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LocationRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LocationRegular;
