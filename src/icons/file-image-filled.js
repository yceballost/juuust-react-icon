import React from 'react';
import PropTypes from 'prop-types';

const FileImageFilled = props => {
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
        d="M19.197 7.768a.61.61 0 01.048.238v12.28c0 .748-.633 1.38-1.384 1.38H5.895c-.737 0-1.384-.644-1.384-1.38V3.4c0-.723.658-1.381 1.384-1.381h7.283c.227 0 .442.086.602.246l5.205 5.118c.106.103.17.24.212.384zM17.55 7.66l-4.042-3.977v1.761c0 .656.21 1.21.614 1.605.406.398.98.611 1.66.611h1.768zm-9.882 2.07h8.42c.544 0 1.023.437 1.017.933v7.815c0 .499-.476.936-1.02.936h-8.42c-.552 0-1.02-.432-1.02-.936v-7.815c0-.504.468-.933 1.023-.933zm1.826 4.4a.864.864 0 01-.857-.87c0-.482.384-.872.857-.872.474 0 .857.39.857.872a.867.867 0 01-.857.87zM8.34 17.396c.104.126.25.19.398.19a.497.497 0 00.328-.123l2.087-1.767 1.409 1.35a.513.513 0 00.73-.023.531.531 0 00-.022-.742l-.714-.686 1.126-.91 1.18.918a.51.51 0 00.725-.098.534.534 0 00-.098-.736L13.99 13.6a.506.506 0 00-.633.005l-1.557 1.26-.27-.257a.517.517 0 00-.685-.02l-2.437 2.065a.536.536 0 00-.068.742z"
      ></path>
    </svg>
  );
};

FileImageFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileImageFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileImageFilled;
