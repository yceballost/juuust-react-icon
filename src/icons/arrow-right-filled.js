import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightFilled = props => {
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
      <path d="M11.893 21.69c-.15 0-.3-.029-.44-.085-.433-.176-.7-.602-.694-1.106l-.003-3.65a.253.253 0 00-.039-.056l-6.882-.02c-.617.009-1.07-.146-1.384-.468-.314-.322-.46-.776-.443-1.392V8.874c-.008-.42.031-1.025.437-1.445.407-.42 1.009-.48 1.426-.488h.009l6.711.003a.453.453 0 00.157-.053l-.008-3.56v-.006c.005-.857.414-1.149.658-1.247.417-.168.899-.014 1.322.42l8.658 8.712c.087.084.336.33.334.69a.82.82 0 01-.275.593l-8.476 8.706c-.306.32-.692.49-1.068.49z"></path>
    </svg>
  );
};

ArrowRightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightFilled;
