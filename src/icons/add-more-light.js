import React from 'react';
import PropTypes from 'prop-types';

const AddMoreLight = props => {
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
      <path d="M18.536 11.535h-6.069V5.466a.467.467 0 00-.932 0v6.069H5.466a.466.466 0 100 .932h6.069v6.067a.467.467 0 00.932 0v-6.067h6.067a.467.467 0 00.002-.932z"></path>
    </svg>
  );
};

AddMoreLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddMoreLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AddMoreLight;
