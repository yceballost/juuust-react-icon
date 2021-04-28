import React from 'react';
import PropTypes from 'prop-types';

const HeadphonesRegular = props => {
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
        d="M11.74 2c5.075 0 7.89 3.196 7.98 9 1.263.655 1.966 2.02 1.97 4 0 2.745-1.332 4.32-3.738 4.431l-.274.009h-.126a.37.37 0 01-.11-.017c-1.21.888-2.775 1.44-4.655 1.636-.05.104-.1.204-.176.28-.241.232-.577.35-.986.35h-.068c-.442-.008-.792-.162-1.028-.417-.232-.255-.341-.614-.325-1.056.026-.92.57-1.415 1.446-1.39.686.017 1.137.359 1.288.93 1.222-.162 2.266-.479 3.135-.963-.667-.743-.843-2.081-.843-3.793 0-2.625.392-4.381 2.339-4.448.092-.009.187-.009.283 0 .036 0 .084 0 .134.008.101.005.196.02.29.034.061.01.123.018.186.025-.193-4.868-2.44-7.339-6.72-7.339-4.28 0-6.53 2.48-6.714 7.364a4.69 4.69 0 01.712-.087c.016-.008.067-.008.117-.008.098-.008.199-.008.3 0 1.907.067 2.308 1.824 2.308 4.448 0 2.616-.4 4.373-2.342 4.44h-.109l-.277-.008C3.327 19.319 2 17.742 2 14.997c0-1.865.62-3.17 1.765-3.871C3.812 5.241 6.639 2 11.739 2zm-5.953 9.835l.059-.005.059-.004h.176c.476.017 1.126.04 1.126 3.171 0 3.12-.648 3.143-1.19 3.163h-.233c-1.084-.054-2.53-.437-2.53-3.163 0-2.736 1.446-3.12 2.533-3.162zm12.104 6.325h-.283c-.05 0-.101 0-.151-.009a.447.447 0 00-.149-.025c-.409-.118-.826-.63-.826-3.129 0-3.128.649-3.15 1.19-3.17h.116l.108.008c1.087.045 2.541.425 2.541 3.162-.006 2.726-1.46 3.11-2.546 3.163z"
      ></path>
    </svg>
  );
};

HeadphonesRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HeadphonesRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HeadphonesRegular;
