import React from 'react';
import PropTypes from 'prop-types';

const MicrophoneLight = props => {
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
        d="M11.993 2.16c2.79 0 4.325 1.555 4.325 4.375v6.79c0 2.82-1.535 4.376-4.328 4.376-2.79 0-4.325-1.555-4.325-4.376v-6.79c0-2.82 1.538-4.375 4.328-4.375zm3.51 11.162V6.535c0-2.355-1.183-3.549-3.51-3.549-2.328 0-3.51 1.194-3.51 3.55v6.79c0 2.352 1.182 3.548 3.51 3.548 2.327 0 3.51-1.196 3.51-3.552zM12.97 20.88a.96.96 0 00-.955-.967.96.96 0 00-.955.967.962.962 0 00.955.966.962.962 0 00.955-.966zm2.373-1.933a.96.96 0 01.955.966.962.962 0 01-.955.967.96.96 0 01-.955-.967.96.96 0 01.955-.966zm3.627-1.336a.96.96 0 00-.955-.966.96.96 0 00-.955.966.962.962 0 00.955.966.962.962 0 00.955-.966zm0-4.255a.82.82 0 01.816.824.82.82 0 01-.816.826.82.82 0 01-.815-.826.818.818 0 01.815-.824zm-9.375 6.557a.96.96 0 00-.955-.966.96.96 0 00-.955.966.96.96 0 00.955.967.962.962 0 00.955-.967zM5.97 16.645a.96.96 0 01.956.966.962.962 0 01-.956.966.962.962 0 01-.955-.966c0-.532.429-.966.955-.966zm-.955-1.64a.82.82 0 00.815-.825.818.818 0 00-.815-.824.818.818 0 00-.815.824.82.82 0 00.815.826z"
      ></path>
    </svg>
  );
};

MicrophoneLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicrophoneLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MicrophoneLight;
