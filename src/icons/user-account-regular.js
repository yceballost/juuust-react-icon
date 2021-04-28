import React from 'react';
import PropTypes from 'prop-types';

const UserAccountRegular = props => {
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
        d="M12.25 2.5c3.342 0 5.25 1.839 5.25 5.25S15.591 13 12.25 13c-3.26 0-5.155-1.748-5.247-4.997l-.004-.253.004-.253C7.095 4.247 8.99 2.5 12.249 2.5zm0 1.5C9.722 4 8.5 5.18 8.5 7.75c0 2.57 1.223 3.75 3.75 3.75 2.525 0 3.75-1.18 3.75-3.75C16 5.18 14.774 4 12.25 4zm4.188 10.505h-8.42A4.517 4.517 0 003.5 19.023v2.223c0 .414.335.75.75.75h16a.75.75 0 00.741-.648l.007-.11-.041-2.229c0-2.481-2.023-4.504-4.519-4.504zm-8.42 1.498h8.42a3.02 3.02 0 013.016 2.843l.032 1.651H4.998v-1.474a3.02 3.02 0 013.02-3.02z"
      ></path>
    </svg>
  );
};

UserAccountRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UserAccountRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UserAccountRegular;
