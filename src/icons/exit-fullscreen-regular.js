import React from 'react';
import PropTypes from 'prop-types';

const ExitFullscreenRegular = props => {
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
        d="M8.346 2.15c.465 0 .843.378.843.843v5.353a.844.844 0 01-.843.843H2.993a.845.845 0 010-1.689H7.5V2.993c0-.465.378-.843.846-.843zm.843 13.49a.844.844 0 00-.843-.843H2.993a.845.845 0 00-.812.812.84.84 0 00.812.874h4.51v4.51a.845.845 0 001.686 0V15.64zm12.614.034a.845.845 0 00-.813-.877h-5.353a.842.842 0 00-.843.843v5.356a.844.844 0 001.69 0v-4.51h4.506a.845.845 0 00.813-.812zm-7.006-7.328c0 .465.378.843.843.843h5.353a.845.845 0 000-1.689h-4.51V2.993a.845.845 0 00-1.686 0v5.353z"
      ></path>
    </svg>
  );
};

ExitFullscreenRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ExitFullscreenRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ExitFullscreenRegular;
