import React from 'react';
import PropTypes from 'prop-types';

const LayersRegular = props => {
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
        d="M20.93 10.6c.482.247.784.743.784 1.287 0 .54-.305 1.036-.795 1.277l-.68.347.685.35a1.442 1.442 0 01-.002 2.569l-8.485 4.303a1.409 1.409 0 01-.644.154 1.41 1.41 0 01-.653-.157l-8.339-4.303a1.44 1.44 0 01-.006-2.557l.684-.356-.678-.35a1.433 1.433 0 01-.779-1.277c0-.541.297-1.034.774-1.28l.683-.356-.678-.35a1.44 1.44 0 01-.006-2.557l8.34-4.34c.207-.109.43-.162.658-.162.224 0 .445.053.65.157l8.484 4.339a1.442 1.442 0 01-.003 2.568l-.68.345.686.35zm-9.132-6.318l8.485 4.339-8.485 4.305L3.46 8.62l8.34-4.34zM3.46 11.884l8.34 4.302 8.484-4.3-1.622-.831-6.218 3.154a1.412 1.412 0 01-1.297-.006l-6.098-3.148-1.589.829zm8.34 7.563l8.484-4.303-1.622-.829-6.218 3.154a1.412 1.412 0 01-1.297-.006l-6.098-3.145-1.589.826 8.34 4.303z"
      ></path>
    </svg>
  );
};

LayersRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LayersRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LayersRegular;
