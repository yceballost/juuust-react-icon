import React from 'react';
import PropTypes from 'prop-types';

const RewindRegular = props => {
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
        d="M4.763 19.424C6.436 21.035 8.87 21.853 12 21.853c3.129 0 5.563-.815 7.238-2.426 1.737-1.672 2.616-4.17 2.616-7.423 0-3.255-.88-5.75-2.616-7.426-1.675-1.61-4.11-2.428-7.238-2.428-3.13 0-5.563.818-7.236 2.426C3.03 6.25 2.15 8.749 2.15 12c0 3.255.88 5.751 2.613 7.423zm-1.523-7.42c0-5.815 2.946-8.764 8.759-8.764 5.815 0 8.762 2.95 8.764 8.764 0 5.813-2.95 8.76-8.764 8.76-5.813 0-8.76-2.947-8.76-8.76zm7.487 3.154a.55.55 0 00.286.079.565.565 0 00.56-.56v-2.594a.57.57 0 00.134.112l4.99 2.969a.55.55 0 00.285.078.565.565 0 00.56-.56V8.716a.558.558 0 00-.849-.48l-4.988 2.998a.553.553 0 00-.132.11V8.71a.558.558 0 00-.849-.479l-4.989 2.997a.564.564 0 00-.271.482c0 .196.106.378.274.48l4.989 2.968zm-.274-1.465l-3.337-1.989 3.337-2.002v3.991zm2.63-1.983l3.339 1.986V9.705l-3.34 2.005z"
      ></path>
    </svg>
  );
};

RewindRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RewindRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RewindRegular;
