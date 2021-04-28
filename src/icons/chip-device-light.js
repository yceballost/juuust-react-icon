import React from 'react';
import PropTypes from 'prop-types';

const ChipDeviceLight = props => {
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
        d="M14.217 21.834H7.032c-1.026 0-1.762-.24-2.25-.734-.487-.493-.72-1.238-.72-2.277V5.167c0-2.025.972-3.01 2.97-3.01h7.185c2.025 0 2.969.957 2.969 3.01v1.365h1.722c.62 0 1.003.383 1.003 1.002v6.746c0 .616-.386 1-1.003 1h-1.722v3.543c0 1.04-.235 1.784-.723 2.277-.487.493-1.221.734-2.246.734zm2.408-16.667v1.365h-.82a.277.277 0 00-.2.08l-1.638 1.634a.289.289 0 00-.081.199v5.832c0 .619.384 1.003 1.003 1.003h1.736v3.543c0 .885-.184 1.501-.56 1.885-.375.384-.98.569-1.848.569H7.032c-.869 0-1.47-.185-1.849-.569-.378-.384-.56-1-.56-1.885V5.167c0-1.717.72-2.45 2.409-2.45h7.185c1.711 0 2.408.708 2.408 2.45zm2.283 9.552h-4.016c-.311 0-.443-.131-.443-.442V8.56l1.473-1.471h2.986c.311 0 .443.132.443.443v6.745c0 .31-.132.442-.443.442zm-8.283 3.107c-.504 0-.831.266-.831.834 0 .275.075.477.21.614.145.148.358.221.622.221.263 0 .476-.073.621-.221.135-.137.21-.342.21-.614-.002-.568-.33-.834-.832-.834zm7.961-4.05h-3.375a.281.281 0 01-.28-.28V9.948c0-.154.126-.28.28-.28h3.375a.28.28 0 01.28.28v3.543a.282.282 0 01-.28.283zm-.28-1.127v.566h-.568v-.566h.568zm0-.56h-2.813v-.734h2.814v.734zm0-1.294h-.568v-.566h.568v.566zm-1.129 0v-.566h-.563v.566h.563zm-1.123 0v-.566h-.563v.566h.563zm-.56 1.854v.566h.56v-.566h-.56zm1.12 0v.566h.563v-.566h-.563z"
      ></path>
    </svg>
  );
};

ChipDeviceLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChipDeviceLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChipDeviceLight;
