import React from 'react';
import PropTypes from 'prop-types';

const ClipboardLight = props => {
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
        d="M17.927 3.62c.756 0 1.445.54 1.445 1.131v15.964c0 .613-.661 1.131-1.443 1.131H6.053c-.782 0-1.443-.518-1.443-1.131V4.75c0-.591.69-1.132 1.443-1.132h3.15c.418-.946 1.376-1.459 2.785-1.459 1.717 0 2.462.74 2.782 1.46h3.157zM9.775 4.75c.056-1.221.76-1.79 2.213-1.79 1.171 0 1.86.381 2.112 1.163.067.226.104.459.11.694v.132c-.012.344-.029.818-2.22.818-2.19 0-2.206-.47-2.22-.863l.005-.154zm8.785 0v15.964c0 .109-.275.33-.633.33H6.05c-.356 0-.63-.218-.63-.33V4.75c0-.078.26-.33.63-.33H9l-.013.073c-.011.065-.022.13-.024.201l-.006.092v.194c.048 1.319 1.247 1.59 3.031 1.59 1.787 0 2.986-.271 3.03-1.573l.004-.093-.006-.19c-.002-.072-.01-.141-.02-.21l-.01-.085h2.943c.367 0 .63.25.63.331zm-7.88-.059c.003.224.185.4.406.4h1.801c.224 0 .406-.179.406-.4 0-.221-.182-.4-.406-.4h-1.8a.404.404 0 00-.407.4z"
      ></path>
    </svg>
  );
};

ClipboardLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClipboardLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClipboardLight;
