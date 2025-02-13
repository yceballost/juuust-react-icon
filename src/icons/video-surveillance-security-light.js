import React from 'react';
import PropTypes from 'prop-types';

const VideoSurveillanceSecurityLight = props => {
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
        d="M20.957 8.221c.303.076.563.269.72.538.16.266.207.585.126.888l-.372 1.462c0 .003 0 .005-.002.007a1.166 1.166 0 01-1.424.842l-.955-.241-.107.423a1.282 1.282 0 01-1.557.927l-5.499-1.4-2.406 6.82a.417.417 0 01-.395.28H5.823c-.006 0-.01-.001-.014-.003l-.014-.002v1.798c0 .706-.574 1.28-1.28 1.28H3.439a1.282 1.282 0 01-1.283-1.28v-5.431c0-.706.574-1.283 1.283-1.283h1.073c.706 0 1.28.577 1.28 1.283v2.804c.006 0 .01-.002.014-.003a.041.041 0 01.014-.003h2.966l2.283-6.468-6.283-1.6A1.273 1.273 0 014 9.275a1.284 1.284 0 01-.14-.972l1.317-5.179c.176-.686.871-1.1 1.557-.927l12.6 3.207c.686.177 1.1.874.927 1.56l-.258 1.014.955.244zm-3.361 4.036a.442.442 0 00.535-.322s1.317-5.179 1.314-5.182a.441.441 0 00-.32-.538L6.526 3.011a.445.445 0 00-.538.322L4.672 8.51a.436.436 0 00.05.333.434.434 0 00.272.204l12.596 3.21h.006zm3.025-1.355l.373-1.463a.343.343 0 00-.241-.411l-.955-.244-.538 2.115.955.244.003.002h.003a.33.33 0 00.4-.243zm-15.666 9.66a.444.444 0 01-.443.443H3.439a.444.444 0 01-.442-.445v-5.431c0-.244.198-.443.442-.443h1.076c.243 0 .442.199.442.443v5.434h-.002z"
      ></path>
    </svg>
  );
};

VideoSurveillanceSecurityLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VideoSurveillanceSecurityLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VideoSurveillanceSecurityLight;
