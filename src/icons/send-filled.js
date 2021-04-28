import React from 'react';
import PropTypes from 'prop-types';

const SendFilled = props => {
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
      <path d="M21.378 11.205L3.336 2.235a.82.82 0 00-1.168.908l1.865 8.782-1.835 8.924a.823.823 0 001.177.9l18.008-9.074a.82.82 0 00-.005-1.47z"></path>
    </svg>
  );
};

SendFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SendFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SendFilled;
