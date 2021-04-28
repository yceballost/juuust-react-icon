import React from 'react';
import PropTypes from 'prop-types';

const SettingsFilled = props => {
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
        d="M18.843 10.11h1.852c.543 0 .98.439.983.982v1.505c0 .54-.44.98-.98.98h-1.855a7.354 7.354 0 01-.652 2.11l1.366 1.366a.997.997 0 010 1.406l-1.098 1.098a.997.997 0 01-1.406 0l-1.37-1.37a7.307 7.307 0 01-2.109.653v1.855c0 .54-.44.98-.98.98H11.09c-.541 0-.98-.44-.98-.98V18.84A7.353 7.353 0 018 18.188l-1.37 1.37a.997.997 0 01-1.406 0l-1.098-1.099a.998.998 0 010-1.406l1.367-1.367c-.317-.56-.543-1.462-.65-2.112H2.99c-.54 0-.98-.44-.98-.98v-1.505c0-.54.44-.98.98-.98h1.854c.107-.647.333-1.552.65-2.112L4.126 6.63a.997.997 0 010-1.406l1.098-1.098a.997.997 0 011.406 0L8 5.496a7.354 7.354 0 012.11-.653V2.989c0-.54.439-.98.98-.98h1.504c.54 0 .98.44.98.98v1.854a7.308 7.308 0 012.11.653l1.37-1.37a.998.998 0 011.405 0l1.101 1.098a.997.997 0 010 1.406L18.19 8c.309.619.527 1.328.653 2.11zm-4.269 1.733c0-1.863-.868-2.731-2.73-2.731-1.864 0-2.732.868-2.732 2.731s.868 2.731 2.731 2.731 2.731-.868 2.731-2.731z"
      ></path>
    </svg>
  );
};

SettingsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SettingsFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SettingsFilled;
