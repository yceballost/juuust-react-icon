import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeftFilled = props => {
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
      <path d="M20.605 14.048v.022c-.006.395-.196.779-.56 1.143l-5.025 5.045-.017.017c-.348.319-.709.44-1.079.36-.336-.072-.605-.302-.823-.52l-.014-.014-4.81-5.112-2.58 2.58-.008.008c-.33.316-.893.409-1.339.218-.414-.176-.66-.565-.66-1.039V4.664a.901.901 0 01.254-.717.894.894 0 01.717-.252l12.146.005c.414-.01.792.233.955.614.204.456.112 1.047-.216 1.406l-.014.017-2.38 2.378 4.904 4.79.006.005c.361.356.543.74.543 1.138z"></path>
    </svg>
  );
};

ArrowUpLeftFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpLeftFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpLeftFilled;
