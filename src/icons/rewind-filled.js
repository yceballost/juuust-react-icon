import React from 'react';
import PropTypes from 'prop-types';

const RewindFilled = props => {
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
        d="M11.999 2.15c3.131 0 5.566.818 7.238 2.428 1.737 1.676 2.616 4.174 2.616 7.426s-.88 5.75-2.616 7.423c-1.672 1.61-4.11 2.429-7.238 2.429-3.13 0-5.563-.818-7.236-2.429C3.03 17.755 2.15 15.26 2.15 12.004s.88-5.75 2.616-7.426C6.436 2.968 8.867 2.15 12 2.15zm5.042 13.092a.56.56 0 00.56-.56V8.716a.56.56 0 00-.849-.479l-4.988 2.997a.569.569 0 00-.213.232V8.71a.56.56 0 00-.849-.479l-4.989 2.997a.56.56 0 00.003.96l4.989 2.97a.56.56 0 00.846-.482V11.96c.047.098.123.18.215.236l4.989 2.969a.57.57 0 00.286.078z"
      ></path>
    </svg>
  );
};

RewindFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RewindFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RewindFilled;
