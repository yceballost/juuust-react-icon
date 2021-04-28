import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpDownFilled = props => {
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
        d="M7.46 11.908h2.316c.664 0 1.202-.538 1.199-1.202l-.003-2.902 1.82-.014c.294 0 .561-.17.684-.437a.778.778 0 00-.116-.849c-.006-.006-.013-.012-.018-.02l-4.154-4.21a.756.756 0 00-1.126 0L3.888 6.483c-.014.011-.025.025-.036.039a.788.788 0 00-.101.832.749.749 0 00.68.437l1.824.014.003 2.902c0 .664.538 1.202 1.201 1.202zm7.131 9.58a.756.756 0 001.126.003l4.182-4.216c.014-.012.025-.026.037-.04a.787.787 0 00.098-.832.753.753 0 00-.684-.437l-1.826-.014-.003-2.904c0-.664-.538-1.202-1.202-1.202H14a1.206 1.206 0 00-1.202 1.204l.006 2.902-1.824.014c-.294 0-.56.171-.683.437a.782.782 0 00.116.852c.006.006.013.012.018.02l4.16 4.212z"
      ></path>
    </svg>
  );
};

ArrowUpDownFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpDownFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpDownFilled;
