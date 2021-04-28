import React from 'react';
import PropTypes from 'prop-types';

const AddMoreRegular = props => {
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
      <path d="M18.354 11.318H12.68V5.644a.681.681 0 00-1.36 0v5.676H5.644a.681.681 0 000 1.36h5.676v5.676a.681.681 0 001.36 0V12.68h5.676a.681.681 0 00-.002-1.362z"></path>
    </svg>
  );
};

AddMoreRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddMoreRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AddMoreRegular;
