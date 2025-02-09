import React from 'react';
import PropTypes from 'prop-types';

const InternetPendriveLight = props => {
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
        d="M11.904 5.843a.414.414 0 00.41-.42.418.418 0 00-.41-.423C5.436 5 2.156 8.381 2.156 15.048c0 .235.182.423.41.423.226 0 .408-.19.408-.423 0-6.194 2.919-9.205 8.93-9.205zm.473 9.308c0-.47-.263-.689-.672-.689-.409 0-.675.219-.678.69 0 .226.062.394.171.51.118.122.292.181.505.181.212 0 .386-.059.504-.182.109-.115.17-.283.17-.51zm-.08-6.308c0 .233-.183.42-.41.42-3.804 0-5.652 1.908-5.652 5.827 0 .232-.182.42-.41.42a.414.414 0 01-.408-.42c0-4.364 2.238-6.67 6.47-6.67.224 0 .41.188.41.423zm8.728 4.742v3.028c0 .2-.154.365-.342.367h-.96v-3.756h.98c.176.017.319.177.322.361zm-2.659 4.519c.3 0 .547-.258.547-.572v-.134h-.009v-4.703a.56.56 0 00-.546-.572h-5.941c-1.785.06-2.695 1.065-2.695 2.986 0 1.922.91 2.927 2.709 2.995h5.935zm3.477-4.53c-.015-.66-.538-1.199-1.171-1.199h-.667v.003h-.322c-.14-.627-.684-1.098-1.33-1.098h-5.956c-2.255.073-3.498 1.434-3.498 3.83 0 2.389 1.243 3.753 3.498 3.837h5.966c.659 0 1.208-.485 1.337-1.126h.98c.642 0 1.163-.544 1.163-1.208v-3.039z"
      ></path>
    </svg>
  );
};

InternetPendriveLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InternetPendriveLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InternetPendriveLight;
