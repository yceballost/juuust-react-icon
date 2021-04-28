import React from 'react';
import PropTypes from 'prop-types';

const ArrowForwardRegular = props => {
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
      <path d="M19.949 12.194a.676.676 0 000-.516c-.016-.041-.046-.07-.066-.105-.023-.036-.04-.075-.071-.11L12.95 4.216a.686.686 0 10-.999.943l5.768 6.09H4.662a.688.688 0 000 1.375h13.057l-5.893 6.22a.688.688 0 00.025.97.69.69 0 00.972-.025l6.989-7.382c.032-.032.046-.073.07-.109.021-.034.05-.064.067-.103z"></path>
    </svg>
  );
};

ArrowForwardRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowForwardRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowForwardRegular;
