import React from 'react';
import PropTypes from 'prop-types';

const ArrowsLeftAndRightLight = props => {
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
        d="M16.641 13.583c.073.034.149.05.224.05.115 0 .23-.041.325-.117l.004-.004.006-.005.005-.004.005-.004 4.473-4.415a.488.488 0 00.168-.429.497.497 0 00-.168-.31l-4.47-4.429a.515.515 0 00-.569-.084.489.489 0 00-.283.44l-.02 2.247-3.392.002c-.53 0-.96.432-.96.961v2.46c0 .529.43.96.96.96l3.39-.005.02 2.243c0 .191.106.36.282.443zm.258-2.767a.503.503 0 00-.502-.485c-.002 0-.005 0-.008-.003l-3.44.006a.4.4 0 01-.4-.4v-2.46a.4.4 0 01.4-.4l3.44-.004h.008a.503.503 0 00.502-.484V6.58l.017-2.176 4.341 4.308-4.341 4.286-.017-2.177v-.005zm-9.756 9.367a.51.51 0 01-.342-.135l-4.474-4.437a.498.498 0 01-.168-.31.488.488 0 01.168-.43l4.474-4.414a.122.122 0 01.01-.008l.01-.009a.515.515 0 01.548-.064.485.485 0 01.283.442l.02 2.244 3.39-.005c.529 0 .96.43.96.96v2.46c0 .53-.431.96-.96.96l-3.393.003-.02 2.25c0 .187-.109.355-.282.44a.489.489 0 01-.224.053zm-.05-.634L2.75 15.241l4.342-4.283.017 2.177v.005c.008.275.238.49.51.485l3.44-.005a.4.4 0 01.4.4v2.46a.4.4 0 01-.4.4l-3.44.003a.501.501 0 00-.51.484v.006l-.017 2.176z"
      ></path>
    </svg>
  );
};

ArrowsLeftAndRightLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowsLeftAndRightLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowsLeftAndRightLight;
