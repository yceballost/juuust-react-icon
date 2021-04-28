import React from 'react';
import PropTypes from 'prop-types';

const PendriveFilled = props => {
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
        d="M20.082 7.864c.952 0 1.745.799 1.764 1.782v4.566c0 .988-.784 1.795-1.75 1.795h-1.51c-.188.964-1.023 1.695-2.02 1.695h-9.07c-3.448-.126-5.336-2.168-5.336-5.748 0-3.588 1.888-5.625 5.317-5.734h9.075c.983 0 1.807.709 2.011 1.65h.678v-.003h.84v-.003zm.557 6.35V9.663a.58.58 0 00-.51-.566h-1.515v5.686h1.482a.56.56 0 00.543-.569zm-15.04-2.15c0-.634.362-.928.92-.928.557 0 .921.294.918.927 0 .305-.084.53-.232.684-.16.165-.398.246-.686.246-.289 0-.524-.081-.687-.246-.148-.155-.232-.379-.232-.684z"
      ></path>
    </svg>
  );
};

PendriveFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PendriveFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PendriveFilled;
