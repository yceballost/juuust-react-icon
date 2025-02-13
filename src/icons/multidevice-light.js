import React from 'react';
import PropTypes from 'prop-types';

const MultideviceLight = props => {
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
        d="M5.167 16.64h10.099v.382c0 1.221.593 1.815 1.815 1.815h2.938c1.221 0 1.815-.594 1.815-1.818v-6.49c0-.61-.148-1.056-.45-1.362-.306-.305-.752-.453-1.365-.453h-1.47v-.286c0-1.045-.244-1.852-.72-2.398-.508-.58-1.278-.874-2.292-.874H5.167c-1.014 0-1.784.294-2.29.874-.48.546-.72 1.353-.72 2.398v4.941c0 1.045.243 1.852.72 2.398.506.58 1.276.874 2.29.874zm0-.56h10.099v-5.548c0-.603.148-1.042.453-1.353.308-.311.754-.465 1.362-.465h.907v-.286c0-1.852-.779-2.714-2.45-2.714H5.167c-1.673 0-2.452.862-2.452 2.714v4.938c0 1.852.78 2.715 2.451 2.715zm2.457 2.763h5.462a.28.28 0 00.28-.28.28.28 0 00-.28-.28H7.624a.28.28 0 00-.28.28c0 .154.126.28.28.28zm8.202-8.311c0-.891.364-1.255 1.255-1.255h2.938c.902 0 1.255.35 1.255 1.255v6.49c0 .902-.35 1.255-1.255 1.255h-2.938c-.902 0-1.255-.35-1.255-1.255v-6.49zm2.257 6.4c0-.322.185-.47.468-.47.283 0 .465.148.468.47 0 .154-.042.266-.118.345-.084.084-.201.123-.35.123-.148 0-.269-.04-.35-.123-.076-.076-.118-.19-.118-.345z"
      ></path>
    </svg>
  );
};

MultideviceLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MultideviceLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MultideviceLight;
