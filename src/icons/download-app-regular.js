import React from 'react';
import PropTypes from 'prop-types';

const DownloadAppRegular = props => {
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
        d="M15.204 21.692c1.107 0 1.91-.266 2.465-.813.555-.551.827-1.364.827-2.479V5.292c0-1.103-.266-1.907-.821-2.465C17.12 2.27 16.314 2 15.205 2H8.65c-1.101 0-1.908.277-2.468.843-.555.563-.823 1.361-.823 2.448v13.11c0 1.114.268 1.927.826 2.479.552.546 1.358.812 2.465.812h6.554zM6.48 5.292c0-1.541.63-2.172 2.17-2.172h6.555c.796 0 1.348.163 1.678.496.33.334.493.883.493 1.675v13.11c0 1.582-.588 2.17-2.17 2.17H8.65c-1.583 0-2.171-.588-2.171-2.17V5.29zm5.064 10.447c.096.11.233.174.379.174a.492.492 0 00.375-.174l3.308-3.81a.499.499 0 00-.378-.828h-1.49V6.232c.005-.03.005-.058.005-.09a.872.872 0 00-.874-.868h-1.837a.9.9 0 00-.7.247.86.86 0 00-.272.658v4.922H8.622a.506.506 0 00-.328.123.498.498 0 00-.05.706l3.3 3.81zm.384 3.62c-.342 0-.627-.107-.82-.306-.194-.199-.29-.47-.29-.81 0-.697.415-1.114 1.113-1.114.697 0 1.11.417 1.11 1.115 0 .341-.099.613-.29.81-.19.195-.481.305-.823.305zM9.72 12.104l2.201 2.546 2.21-2.546h-.893a.5.5 0 01-.501-.502V6.277h-1.675v5.325a.5.5 0 01-.502.502h-.84z"
      ></path>
    </svg>
  );
};

DownloadAppRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadAppRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadAppRegular;
