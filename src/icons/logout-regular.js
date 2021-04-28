import React from 'react';
import PropTypes from 'prop-types';

const LogoutRegular = props => {
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
        d="M16.823 21.5h-8.16a3.674 3.674 0 01-3.67-3.67.75.75 0 011.5 0c0 1.196.974 2.17 2.17 2.17h8.16c1.197 0 2.17-.974 2.17-2.17V5.67c0-1.196-.973-2.17-2.17-2.17h-8.16c-1.196 0-2.17.974-2.17 2.17a.75.75 0 01-1.5 0A3.674 3.674 0 018.663 2h8.16a3.674 3.674 0 013.67 3.67v12.16a3.674 3.674 0 01-3.67 3.67zM4.543 11l1.722-1.721a.75.75 0 10-1.061-1.061L2.22 11.202a.75.75 0 00.003 1.064l3.013 2.983a.744.744 0 00.527.217.749.749 0 00.527-1.283L4.591 12.5h7.152a.75.75 0 000-1.5h-7.2z"
      ></path>
    </svg>
  );
};

LogoutRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoutRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LogoutRegular;
