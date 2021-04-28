import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRightRegular = props => {
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
        d="M9.118 20.025c.373.373.77.557 1.166.557.389 0 .778-.179 1.137-.54l.006-.006 4.79-4.905 2.375 2.381a.074.074 0 01.017.014c.358.328.95.42 1.406.216.39-.174.616-.53.613-.955l.006-12.146a.89.89 0 00-.252-.717.902.902 0 00-.717-.255H7.578c-.476-.002-.866.244-1.045.659-.19.445-.098 1.008.218 1.338l.009.009 2.58 2.58-5.115 4.812-.014.014c-.219.219-.448.487-.521.824-.079.37.042.73.361 1.078l.017.017 5.05 5.025zm.76-.762l-5.04-5.017a.55.55 0 01-.092-.126c.011-.028.053-.103.221-.274l5.185-4.88.011-.011a.995.995 0 00.294-.675.95.95 0 00-.274-.7L7.53 4.927a.241.241 0 01-.008-.176.175.175 0 01.05-.006h11.989l-.006 12.022c-.064.014-.17 0-.212-.03l-2.449-2.449a.973.973 0 00-1.375.017l-.006.006-4.854 4.972c-.104.103-.252.227-.378.227h-.003c-.1-.003-.244-.09-.4-.247z"
      ></path>
    </svg>
  );
};

ArrowUpRightRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpRightRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpRightRegular;
