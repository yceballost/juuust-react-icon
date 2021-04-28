import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeftRegular = props => {
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
        d="M13.927 20.639c.073.014.143.022.216.022.291 0 .582-.129.86-.384l.017-.017 5.025-5.047c.367-.364.554-.748.56-1.143.006-.406-.177-.796-.543-1.162l-.006-.006-4.905-4.79 2.384-2.375a.074.074 0 01.014-.017c.328-.359.42-.95.216-1.406a1.009 1.009 0 00-.956-.614L4.665 3.695a.89.89 0 00-.717.252.901.901 0 00-.255.717V16.75c-.003.476.244.865.658 1.044.446.19 1.009.098 1.34-.218l.007-.008 2.58-2.58 4.813 5.115.014.014c.218.218.487.448.823.52zm.213-1.056c-.028-.012-.104-.054-.274-.222l-4.877-5.19-.011-.011a.995.995 0 00-.675-.294.954.954 0 00-.7.274L4.95 16.793a.241.241 0 01-.177.008.175.175 0 01-.005-.05V4.765l12.022.005c.014.065 0 .171-.03.213l-2.45 2.448a.973.973 0 00.018 1.376l.005.005 4.972 4.857c.107.104.23.255.227.381-.003.101-.09.244-.246.4l-5.017 5.04a.602.602 0 01-.129.093z"
      ></path>
    </svg>
  );
};

ArrowUpLeftRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpLeftRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpLeftRegular;
