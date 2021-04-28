import React from 'react';
import PropTypes from 'prop-types';

const PinFilled = props => {
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
      <path d="M21.523 8.167l-5.66-5.689a1.041 1.041 0 00-1.5 0c-.736.743-1.178 1.56-1.316 2.437l-2.53 2.55c-1.456-.253-3.529-.01-5.72 2.195l-.03.034a1.23 1.23 0 00-.361.88c0 .33.129.64.361.876l3.443 3.468-5.866 5.854a.634.634 0 00-.003.891.625.625 0 00.886.003l5.868-5.857 3.518 3.546a1.2 1.2 0 00.86.358c.333 0 .672-.134.947-.411 1.767-1.782 2.49-3.709 2.143-5.734l2.532-2.552c.877-.148 1.7-.602 2.462-1.37a.995.995 0 00.291-.708 1.093 1.093 0 00-.325-.77z"></path>
    </svg>
  );
};

PinFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PinFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PinFilled;
