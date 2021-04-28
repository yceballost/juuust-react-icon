import React from 'react';
import PropTypes from 'prop-types';

const MoonFilled = props => {
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
      <path d="M21.281 16.23a.423.423 0 00-.493-.056c-1.431.812-2.972.96-3.77.98-.2.008-.448.008-.672.008-1.605-.022-6.838-.616-6.838-7.17 0-4.835 2.793-6.446 5.134-6.947a.42.42 0 00-.01-.824 11.652 11.652 0 00-1.796-.187l-.897-.009c-2.201.031-9.389.82-9.389 9.818 0 1.622.457 9.723 9.457 9.871.296 0 .616 0 .873-.008 1.463-.023 6.396-.457 8.496-4.992a.415.415 0 00-.095-.484z"></path>
    </svg>
  );
};

MoonFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoonFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoonFilled;
