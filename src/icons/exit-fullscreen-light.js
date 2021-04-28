import React from 'react';
import PropTypes from 'prop-types';

const ExitFullscreenLight = props => {
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
        d="M8.24 2.15c.319 0 .58.258.58.577V8.24a.59.59 0 01-.578.58H2.73a.579.579 0 110-1.157h4.933V2.73c0-.322.257-.58.577-.58zm.58 13.594c0-.32-.261-.577-.58-.577 0 0-5.51 0-5.51-.003a.58.58 0 100 1.16h4.93v4.932a.581.581 0 001.16 0v-5.512zm13.016.003c0-.32-.26-.58-.58-.58h-5.515c-.32 0-.577.26-.577.58v5.512a.581.581 0 001.16 0v-4.933h4.932c.32 0 .58-.26.58-.58zm-6.67-7.505c0 .32.261.577.58.577v.003h5.51a.581.581 0 000-1.16h-4.932V2.73a.579.579 0 10-1.157 0v5.512z"
      ></path>
    </svg>
  );
};

ExitFullscreenLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ExitFullscreenLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ExitFullscreenLight;
