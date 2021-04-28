import React from 'react';
import PropTypes from 'prop-types';

const MicrophoneRegular = props => {
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
        d="M11.993 2.16c2.921 0 4.53 1.61 4.53 4.532v6.72c0 2.922-1.609 4.532-4.53 4.532-2.922 0-4.53-1.61-4.53-4.532v-6.72c0-2.921 1.608-4.532 4.53-4.532zM15.3 13.412v-6.72c0-2.227-1.081-3.31-3.308-3.31s-3.308 1.08-3.308 3.31v6.72c0 2.227 1.08 3.31 3.308 3.31 2.227 0 3.308-1.083 3.308-3.31zm-2.33 7.479a.957.957 0 00-.956-.958.957.957 0 000 1.913.956.956 0 00.955-.955zm2.372-1.913a.956.956 0 11-.003 1.913.956.956 0 01.003-1.913zm3.627-1.325a.956.956 0 10-.955.955.955.955 0 00.955-.955zm0-4.21a.814.814 0 110 1.63.814.814 0 110-1.63zm-9.372 6.49a.956.956 0 10-1.913.002.956.956 0 001.913-.002zM5.97 16.698a.956.956 0 010 1.91.956.956 0 010-1.91zm-.955-1.622a.814.814 0 00.815-.815.814.814 0 10-.815.815z"
      ></path>
    </svg>
  );
};

MicrophoneRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicrophoneRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MicrophoneRegular;
