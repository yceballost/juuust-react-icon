import React from 'react';
import PropTypes from 'prop-types';

const ComputerRegular = props => {
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
        d="M18.219 3.5H6.302A3.801 3.801 0 002.5 7.301v5.897C2.5 15.298 4.202 17 6.302 17h11.917c2.1 0 3.802-1.702 3.802-3.802V7.301c0-2.099-1.702-3.8-3.802-3.8zM6.302 5h11.917a2.301 2.301 0 012.302 2.301v5.897a2.302 2.302 0 01-2.302 2.302H6.302A2.302 2.302 0 014 13.198V7.301c0-1.27 1.03-2.3 2.302-2.3zm15.691 14.254a.75.75 0 00-.75-.75H3.3l-.101.007a.75.75 0 00.101 1.493h17.943l.102-.007a.75.75 0 00.648-.743z"
      ></path>
    </svg>
  );
};

ComputerRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ComputerRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ComputerRegular;
