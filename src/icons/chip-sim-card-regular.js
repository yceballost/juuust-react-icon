import React from 'react';
import PropTypes from 'prop-types';

const ChipSimCardRegular = props => {
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
        d="M16.818 21.675H7.54c-.482 0-1.16-.106-1.647-.622-.362-.384-.552-.927-.552-1.577V6.104a.56.56 0 01.179-.412l3.82-3.544A.566.566 0 019.724 2h7.095c.482 0 1.16.106 1.647.622.361.384.552.927.552 1.577v15.277c0 .65-.19 1.194-.552 1.577-.269.283-.773.622-1.647.622zM6.462 6.347v13.13c0 .744.334 1.078 1.079 1.078h9.277c.745 0 1.078-.334 1.078-1.079V4.2c0-.745-.333-1.079-1.078-1.079H9.944L6.462 6.347zm4.345 12.88H8.08a.562.562 0 01-.56-.56v-8.611c0-.308.252-.56.56-.56h8.193c.309 0 .56.252.56.56v8.61a.56.56 0 01-.56.56H10.807zm0-3.852H8.64v-2.028h7.073v2.028h-4.907zm-.56 1.12H8.64v1.611h1.605v-1.61zm1.12 1.611v-1.61h1.61v1.61h-1.61zm2.731 0v-1.61h1.616v1.61h-1.616zm-3.852-5.88H8.641v-1.61h1.605v1.61zm2.732 0h-1.611v-1.61h1.61v1.61zm2.736 0h-1.616v-1.61h1.616v1.61z"
      ></path>
    </svg>
  );
};

ChipSimCardRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChipSimCardRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChipSimCardRegular;
