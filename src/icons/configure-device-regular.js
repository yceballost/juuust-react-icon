import React from 'react';
import PropTypes from 'prop-types';

const ConfigureDeviceRegular = props => {
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
        d="M5.243 12.868l-.875.874-.707-.707.874-.874c-.196-.325-.317-.729-.369-1.203H2.8v-1h1.366c.052-.474.173-.878.37-1.203l-.875-.874.707-.707.875.875c.332-.202.737-.322 1.202-.372V6.312h1v1.365c.465.05.87.17 1.203.372l.874-.875.707.707-.874.874c.197.325.318.73.37 1.203h1.366v1H9.724c-.05.474-.172.878-.369 1.203l.874.874-.707.707-.874-.874c-.333.2-.738.321-1.203.372v1.363h-1V13.24c-.465-.05-.87-.172-1.202-.372zm5.552-.398l-.242-.244c.054-.149.102-.303.14-.468h.398a.799.799 0 00.8-.8v-1c0-.442-.358-.8-.8-.8h-.5a3.792 3.792 0 00-.13-.377l.334-.335a.8.8 0 000-1.13l-.707-.708a.8.8 0 00-1.13 0l-.438.437a3.252 3.252 0 00-.275-.075v-.658a.784.784 0 00-.407-.683v-.768c0-.75.61-1.36 1.361-1.36h8.491c.751 0 1.362.61 1.362 1.36V19.64c0 .75-.61 1.361-1.362 1.361H9.2a1.362 1.362 0 01-1.362-1.36v-4.352a.79.79 0 00.407-.685v-.473c.144-.033.283-.072.416-.118l.296.295a.794.794 0 001.131 0l.707-.707a.8.8 0 000-1.13zM17.69 2H9.2a2.864 2.864 0 00-2.862 2.861v.673a.791.791 0 00-.693.778v.744l-.074.023a2.467 2.467 0 00-.127.04l-.51-.51a.796.796 0 00-1.13 0l-.708.706a.799.799 0 000 1.131l.511.513a4.187 4.187 0 00-.062.2H2.8a.8.8 0 00-.8.8v1a.8.8 0 00.8.8h.696c.02.083.041.165.065.245l-.465.466a.797.797 0 000 1.13l.707.707a.794.794 0 001.13 0l.365-.363c.111.046.227.084.347.12v.54a.79.79 0 00.693.778v4.257A2.864 2.864 0 009.2 22.5h8.491a2.865 2.865 0 002.862-2.86V4.86a2.865 2.865 0 00-2.862-2.86zM6.06 10.458c0-.629.257-.886.886-.886s.885.257.885.886-.256.886-.885.886c-.63 0-.886-.257-.886-.886zm2.629 0c0-1.107-.636-1.743-1.743-1.743-1.108 0-1.743.636-1.743 1.743 0 1.107.635 1.743 1.743 1.743 1.107 0 1.743-.636 1.743-1.743zm6.127 8.043a1.25 1.25 0 11-2.501 0 1.25 1.25 0 012.5 0z"
      ></path>
    </svg>
  );
};

ConfigureDeviceRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ConfigureDeviceRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ConfigureDeviceRegular;
