import React from 'react';
import PropTypes from 'prop-types';

const ChipSimCardFilled = props => {
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
        d="M16.818 2c.482 0 1.16.106 1.647.622.361.384.552.927.552 1.577v15.277c0 .65-.19 1.193-.552 1.577-.269.283-.773.622-1.647.622H7.54c-.485 0-1.163-.107-1.647-.622-.362-.384-.552-.927-.552-1.577V6.104a.56.56 0 01.179-.412l3.824-3.544A.566.566 0 019.725 2h7.093zm-5.171 8.616a.281.281 0 00-.28.28v1.05c0 .155.126.28.28.28h1.05c.155 0 .28-.125.28-.28v-1.05a.281.281 0 00-.28-.28h-1.05zm-3.006.28c0-.154.126-.28.28-.28h1.045c.154 0 .28.126.28.28v1.05a.28.28 0 01-.28.28H8.922a.28.28 0 01-.28-.28v-1.05zm1.325 7.21c.154 0 .28-.126.28-.28v-1.05a.281.281 0 00-.28-.28H8.922a.281.281 0 00-.28.28v1.05c0 .154.125.28.28.28h1.044zm3.012-.28c0 .154-.127.28-.28.28h-1.051a.281.281 0 01-.28-.28v-1.05c0-.154.126-.28.28-.28h1.05c.155 0 .28.126.28.28v1.05zm2.456.28a.28.28 0 00.28-.28v-1.05a.28.28 0 00-.28-.28h-1.059a.28.28 0 00-.28.28v1.05c0 .154.126.28.28.28h1.06zm.28-3.01a.28.28 0 01-.28.28H8.922a.281.281 0 01-.28-.28v-1.469a.28.28 0 01.28-.28h6.512a.28.28 0 01.28.28v1.468zm-.28-2.87a.28.28 0 00.28-.28v-1.05a.28.28 0 00-.28-.28h-1.059a.28.28 0 00-.28.28v1.05c0 .155.126.28.28.28h1.06z"
      ></path>
    </svg>
  );
};

ChipSimCardFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChipSimCardFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChipSimCardFilled;
