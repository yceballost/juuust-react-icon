import React from 'react';
import PropTypes from 'prop-types';

const MicrophoneFilled = props => {
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
        d="M16.318 6.535c0-2.82-1.535-4.375-4.325-4.375S7.665 3.715 7.665 6.535v6.79c0 2.82 1.535 4.376 4.325 4.376 2.793 0 4.328-1.555 4.328-4.376v-6.79zM12.97 20.88a.96.96 0 00-.955-.967.96.96 0 00-.955.967.962.962 0 00.955.966.962.962 0 00.955-.966zm2.373-1.933a.96.96 0 01.955.966.962.962 0 01-.955.967.96.96 0 01-.955-.967.96.96 0 01.955-.966zm3.627-1.336a.96.96 0 00-.955-.966.96.96 0 00-.955.966.962.962 0 00.955.966.962.962 0 00.955-.966zm0-4.255a.82.82 0 01.816.824.82.82 0 01-.816.826.82.82 0 01-.815-.826.818.818 0 01.815-.824zm-9.372 6.557a.96.96 0 00-.955-.966.957.957 0 00-.956.966.96.96 0 00.956.967.962.962 0 00.955-.967zM5.97 16.645a.96.96 0 01.956.966.962.962 0 01-.956.966.962.962 0 01-.955-.966.96.96 0 01.955-.966zm-.955-1.64a.82.82 0 00.815-.825.818.818 0 00-.815-.824.818.818 0 00-.815.824.82.82 0 00.815.826z"
      ></path>
    </svg>
  );
};

MicrophoneFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicrophoneFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MicrophoneFilled;
