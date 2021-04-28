import React from 'react';
import PropTypes from 'prop-types';

const CloseLight = props => {
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
      <path d="M12.569 12l5.31-5.319a.384.384 0 00.017-.543l-.017-.017a.384.384 0 00-.543-.017c-.007.005-.012.012-.017.017L12 11.431l-5.319-5.31a.384.384 0 00-.543-.017l-.017.017a.384.384 0 00-.017.543c.005.007.012.012.017.017L11.431 12l-5.31 5.319a.383.383 0 00-.017.543l.017.017a.38.38 0 00.28.12.377.377 0 00.28-.12L12 12.569l5.319 5.31a.383.383 0 00.543.017l.017-.017a.384.384 0 00.017-.543l-.017-.017L12.569 12z"></path>
    </svg>
  );
};

CloseLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloseLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloseLight;
