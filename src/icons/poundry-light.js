import React from 'react';
import PropTypes from 'prop-types';

const PoundryLight = props => {
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
        d="M11.997 5.655c4.274-2.187 9.252-1.829 9.467-1.81.213.018.379.191.373.404v13.457a.408.408 0 01-.409.409c-5.1 0-8.978 1.919-9.219 2.039h-.002l-.02.011a.38.38 0 01-.137.034.112.112 0 00-.022.006c-.01.004-.019.008-.029.008a.406.406 0 01-.19-.045l-.002-.001c-.112-.057-4.05-2.05-9.242-2.05a.409.409 0 01-.409-.406V4.252c0-.213.166-.39.378-.403.213-.02 5.188-.379 9.463 1.806zm9.025 11.653c-4.101.076-7.325 1.291-8.614 1.857V6.355c3.404-1.725 7.384-1.753 8.614-1.716v12.669zM2.977 4.641c1.224-.039 5.21-.008 8.613 1.717v12.81c-1.285-.566-4.512-1.779-8.613-1.857V4.64z"
      ></path>
    </svg>
  );
};

PoundryLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PoundryLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PoundryLight;
