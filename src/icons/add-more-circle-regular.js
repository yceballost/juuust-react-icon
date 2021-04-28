import React from 'react';
import PropTypes from 'prop-types';

const AddMoreCircleRegular = props => {
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
        d="M24 12.03C24 .998 14.855.069 12.499.01a36.73 36.73 0 00-.895-.01h-.24C8.955.02 0 .847 0 11.962c0 11.13 9.04 12 11.45 12.035.13.003.26.003.39.003.249 0 .495-.003.71-.007C14.838 23.95 24 23.092 24 12.031zM12.52 22.495c3-.055 9.977-1.185 9.977-10.463 0-9.279-7.017-10.45-10.033-10.522-.286-.006-.573-.01-.86-.01h-.225c-2.971.027-9.876 1.096-9.876 10.463 0 9.381 6.973 10.494 9.971 10.535.348.004.697.004 1.045-.003zm5.46-11.28a.751.751 0 110 1.503h-5.236v5.245a.751.751 0 01-1.502 0v-5.248H6.017a.751.751 0 110-1.503h5.225V6.038a.751.751 0 011.502 0v5.177h5.236z"
      ></path>
    </svg>
  );
};

AddMoreCircleRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddMoreCircleRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AddMoreCircleRegular;
