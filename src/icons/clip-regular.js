import React from 'react';
import PropTypes from 'prop-types';

const ClipRegular = props => {
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
      <path d="M12.363 21.836c-2.863 0-4.507-1.563-4.507-4.291V5.305c0-2.004 1.207-3.155 3.31-3.155 2.104 0 3.312 1.148 3.312 3.154l.025 11.053c0 1.166-.76 1.888-1.98 1.888-1.222 0-1.981-.722-1.981-1.885V6.28c0-.34.289-.61.641-.61.356 0 .642.274.642.61v10.078c0 .496.176.661.695.661.52 0 .694-.165.694-.66l-.028-11.054c0-1.316-.644-1.93-2.025-1.93-1.38 0-2.025.614-2.025 1.93v12.241c0 2.064 1.053 3.067 3.221 3.067s3.221-1.003 3.221-3.067l.012-11.32c0-.338.288-.61.641-.61.356 0 .641.275.641.613l-.01 11.32c.008 2.725-1.636 4.288-4.5 4.288z"></path>
    </svg>
  );
};

ClipRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClipRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClipRegular;
