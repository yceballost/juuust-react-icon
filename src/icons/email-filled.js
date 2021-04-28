import React from 'react';
import PropTypes from 'prop-types';

const EmailFilled = props => {
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
        d="M10.866 11.471c.064.045.93.636 1.896.006l8.854-5.393a1.687 1.687 0 00-1.504-1.061L3.892 5.02c-.486 0-.9.168-1.203.487-.168.177-.28.381-.358.583l8.535 5.381zm10.543 6.793c.457-.55.418-1.222.392-1.437l.014-9.465-8.409 5.123a2.805 2.805 0 01-1.563.485 3.037 3.037 0 01-1.658-.51L2.16 7.4v9.468c0 .68.196 1.213.577 1.585.49.476 1.09.482 1.151.48H4.94c2.016.004 6.487.01 10.024.01 2.364 0 4.31-.002 4.829-.01.888-.018 1.37-.373 1.616-.67z"
      ></path>
    </svg>
  );
};

EmailFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmailFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmailFilled;
