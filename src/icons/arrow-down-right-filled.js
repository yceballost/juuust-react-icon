import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRightFilled = props => {
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
      <path d="M3.675 10.289v-.023c.006-.395.193-.779.56-1.143l5.026-5.047.016-.017c.348-.32.709-.44 1.079-.362.336.073.605.303.823.521l.014.014 4.813 5.115 2.58-2.58.008-.008c.33-.316.893-.409 1.339-.218.414.176.66.565.66 1.039v12.09c.02.28-.07.532-.254.717a.894.894 0 01-.717.252l-12.146-.006a1.009 1.009 0 01-.955-.613c-.204-.457-.112-1.05.216-1.407l.014-.016 2.378-2.379-4.905-4.79-.006-.005c-.36-.353-.543-.737-.543-1.134z"></path>
    </svg>
  );
};

ArrowDownRightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownRightFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownRightFilled;
