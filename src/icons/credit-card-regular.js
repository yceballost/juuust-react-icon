import React from 'react';
import PropTypes from 'prop-types';

const CreditCardRegular = props => {
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
        d="M21.714 13.095V9.328c0-.018-.004-.033-.009-.049a.21.21 0 01-.008-.035V6.793c0-.807-.666-1.46-1.484-1.46H3.523c-.82 0-1.487.653-1.487 1.46V9.28a.133.133 0 01-.005.02c-.003.009-.006.018-.006.028v3.767c0 .01.003.02.006.028a.132.132 0 01.005.02v4.678c0 .804.667 1.46 1.488 1.46h16.689c.818 0 1.484-.656 1.484-1.46v-4.642c.002-.014.005-.026.009-.038a.156.156 0 00.008-.046zm-1.269 4.723a.233.233 0 01-.232.227s-16.69 0-16.69.003a.229.229 0 01-.232-.227v-4.11h17.154v4.107zM3.524 6.566a.229.229 0 00-.233.227v1.919h17.151v-1.92a.229.229 0 00-.232-.226H3.524zm16.918 5.913H3.293V9.944h17.15v2.535z"
      ></path>
    </svg>
  );
};

CreditCardRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CreditCardRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CreditCardRegular;
