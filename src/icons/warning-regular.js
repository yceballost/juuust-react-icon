import React from 'react';
import PropTypes from 'prop-types';

const WarningRegular = props => {
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
        d="M23 12.03C23 1.914 14.617 1.063 12.46 1.013c-.257-.01-.554-.013-.842-.013h-.2C9.21 1.019 1 1.776 1 11.964c0 10.2 8.29 10.998 10.496 11.033l.17.001.174.002c.232 0 .464-.003.664-.006C14.601 22.954 23 22.167 23 12.03zm-1.374-.003c0 8.5-6.396 9.536-9.147 9.586-.194.004-.416.007-.645.007l-.322-.003c-2.749-.038-9.14-1.058-9.14-9.656 0-8.58 6.332-9.562 9.055-9.587h.191c.276 0 .56.003.808.01 2.767.065 9.2 1.139 9.2 9.643zm-9.63 3.878a.689.689 0 01-.688-.689V5.72a.689.689 0 011.377 0v9.496a.693.693 0 01-.688.689zm.787 1.718a.787.787 0 00-.786-.783.784.784 0 000 1.568H12a.788.788 0 00.783-.785z"
      ></path>
    </svg>
  );
};

WarningRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WarningRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WarningRegular;
