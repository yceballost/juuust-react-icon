import React from 'react';
import PropTypes from 'prop-types';

const PenFilled = props => {
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
        d="M20.352 3.244c.081.078.174.17.25.249 1.338 1.392 2.01 3.625-.12 5.728L9.24 20.398l-.01.007-.01.007c-.003.001-.004.004-.006.007 0 .002-.002.004-.005.007-.02.02-.043.033-.066.046a.521.521 0 00-.034.021l-.007.005a.612.612 0 01-.324.104.07.07 0 01-.017-.003.07.07 0 00-.017-.002L2.88 21.672a.612.612 0 01-.535-.157.6.6 0 01-.177-.523l.942-6.096c.003-.019.01-.035.016-.052a.63.63 0 00.023-.065l.011-.034a.614.614 0 01.123-.182l11.311-11.19c2.154-2.132 4.39-1.465 5.76-.13zM13.91 5.75l1.686 1.67-9.336 9.237-1.686-1.666L13.91 5.75zM7.117 17.507l1.664 1.644 9.313-9.26-1.638-1.622-9.34 9.238zm-3.37 1.221L5.12 20.07l2.397-.468-3.383-3.347-.387 2.473z"
      ></path>
    </svg>
  );
};

PenFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PenFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PenFilled;
