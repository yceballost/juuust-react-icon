import React from 'react';
import PropTypes from 'prop-types';

const ComputerFilled = props => {
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
        d="M5.603 17.999l12.804.008c1.117 0 1.985-.31 2.58-.927.57-.591.86-1.437.86-2.512V8.29c0-2.199-1.222-3.412-3.44-3.412L5.6 4.87c-2.219 0-3.44 1.21-3.44 3.412v6.277c0 1.076.289 1.922.863 2.513.59.616 1.46.927 2.58.927zM2.72 20.212l18.566.008c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56L2.72 19.09a.562.562 0 00-.56.56c0 .309.252.56.56.56z"
      ></path>
    </svg>
  );
};

ComputerFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ComputerFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ComputerFilled;
