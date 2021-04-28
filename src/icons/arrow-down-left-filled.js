import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeftFilled = props => {
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
      <path d="M14.048 3.68h.022c.395.006.779.194 1.143.56l5.048 5.026.016.017c.32.347.44.709.362 1.078-.073.336-.303.605-.521.824l-.014.014-5.115 4.812 2.58 2.58.008.008c.316.331.409.894.218 1.34-.176.414-.565.66-1.039.66H4.664a.901.901 0 01-.717-.255.894.894 0 01-.252-.717L3.7 7.482a1.009 1.009 0 01.614-.955c.456-.205 1.047-.112 1.406.215l.017.014 2.378 2.378 4.79-4.904.005-.006c.356-.361.74-.543 1.138-.543z"></path>
    </svg>
  );
};

ArrowDownLeftFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownLeftFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownLeftFilled;
