import React from 'react';
import PropTypes from 'prop-types';

const PlayFilled = props => {
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
        d="M11.986 2.16c3.124 0 5.552.815 7.222 2.423 1.734 1.67 2.61 4.165 2.61 7.412 0 3.246-.88 5.736-2.61 7.406-1.67 1.608-4.098 2.423-7.222 2.423-3.123 0-5.551-.815-7.218-2.423-1.731-1.67-2.608-4.16-2.608-7.406 0-3.247.877-5.74 2.608-7.41 1.667-1.61 4.095-2.425 7.218-2.425zM9.43 16.23l6.653-3.84a.47.47 0 00.176-.18.485.485 0 00-.176-.664l-6.653-3.84a.485.485 0 00-.728.42v7.684a.485.485 0 00.728.42z"
      ></path>
    </svg>
  );
};

PlayFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlayFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlayFilled;
