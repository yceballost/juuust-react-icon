import React from 'react';
import PropTypes from 'prop-types';

const CoughSyrupFilled = props => {
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
        d="M18.462 9.964c0-1.63-.644-2.816-1.826-3.398l.01-.076c.007-.046.013-.091.015-.137V3.426c0-.785-.639-1.423-1.42-1.423H8.496c-.782 0-1.42.638-1.42 1.423v2.927c0 .087.01.176.025.263-.263.146-.51.306-.717.513-.692.67-1.045 1.622-1.045 2.837v7.916c0 1.213.35 2.166 1.036 2.838.661.639 1.586.966 2.751.966h5.566c2.358 0 3.762-1.423 3.762-3.806l.008-7.916zM8.272 3.423V6.35c0 .12.095.224.224.224h6.745c.12 0 .224-.103.224-.224V3.423a.229.229 0 00-.224-.224H8.496a.223.223 0 00-.224.224zm1.033 2.613a.6.6 0 01-.6-.599V4.42a.598.598 0 111.196 0v1.017c.004.33-.265.6-.596.6zm1.709 0a.598.598 0 01-.597-.599V4.42a.6.6 0 01.597-.6.6.6 0 01.6.6v1.017a.602.602 0 01-.6.6zm1.11-.599a.598.598 0 101.192 0V4.42a.598.598 0 10-1.193 0v1.017zm2.304.6a.598.598 0 01-.596-.6V4.42a.598.598 0 111.193 0v1.017c0 .33-.266.6-.597.6zm2.799 3.319H6.574c.087-.583.294-1.04.639-1.37.168-.168.39-.289.622-.392.199.103.423.176.66.176h6.746c.258 0 .496-.078.703-.199.725.289 1.154.888 1.283 1.785zm-2.927 3.63h-1.465v-1.473c0-.255-.2-.48-.415-.48H11.2c-.221 0-.423.225-.423.48v1.473H9.308c-.255 0-.479.19-.479.414v1.225c0 .232.224.423.48.423h1.467l.008 1.473c0 .255.194.479.415.479h1.221c.233 0 .415-.224.415-.479v-1.479H14.3c.255 0 .479-.199.479-.415v-1.224c0-.215-.224-.417-.48-.417zm2.815 5.958c-.303 1.022-1.115 1.543-2.423 1.543H9.126c-.837 0-1.482-.218-1.922-.633a2.125 2.125 0 01-.526-.91h10.437z"
      ></path>
    </svg>
  );
};

CoughSyrupFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CoughSyrupFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CoughSyrupFilled;
