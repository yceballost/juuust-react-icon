import React from 'react';
import PropTypes from 'prop-types';

const ArrowsLeftAndRightFilled = props => {
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
        d="M21.482 9.196a.749.749 0 00.003-1.123l-4.213-4.18a.788.788 0 00-.871-.137.753.753 0 00-.437.684l-.014 1.823-2.905.003c-.664 0-1.202.538-1.202 1.202v2.32c.003.663.54 1.2 1.205 1.2l2.902-.005.014 1.824c0 .293.17.56.437.683a.782.782 0 00.832-.098l.02-.018a.226.226 0 01.019-.018l4.21-4.16zm-9.577 7.132v-2.32c0-.66-.538-1.198-1.205-1.198l-2.899.005-.014-1.82c0-.295-.17-.56-.437-.684a.782.782 0 00-.832.098l-.02.018a.241.241 0 01-.019.018L2.269 14.6a.756.756 0 000 1.127l4.21 4.173c.011.014.025.025.04.037.234.19.557.23.831.1a.749.749 0 00.437-.68l.014-1.824 2.902-.003c.664 0 1.202-.537 1.202-1.201z"
      ></path>
    </svg>
  );
};

ArrowsLeftAndRightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowsLeftAndRightFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowsLeftAndRightFilled;
