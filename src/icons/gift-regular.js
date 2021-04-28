import React from 'react';
import PropTypes from 'prop-types';

const GiftRegular = props => {
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
        d="M17.74 6.955h2.638c.768 0 1.465.776 1.465 1.63v2.927c0 .821-.577 1.513-1.294 1.614v7.087c0 .885-.672 1.633-1.465 1.633H4.857c-.792 0-1.465-.748-1.465-1.633V13.12c-.686-.129-1.232-.81-1.232-1.605V8.588c0-.854.697-1.633 1.465-1.633h2.577c-.37-.373-.627-.795-.728-1.258-.152-.692.025-1.437.507-2.16.983-1.47 2.532-1.79 4.044-.831.827.52 1.496 1.694 1.947 2.717.454-1.023 1.12-2.193 1.947-2.717 1.513-.958 3.062-.639 4.045.832.482.722.658 1.467.507 2.16-.101.462-.359.884-.731 1.257zm-3.123-3.207c.913-.577 1.677-.42 2.271.468.297.445.41.854.328 1.22-.079.365-.353.698-.81.987-.722.456-2.535.468-3.621.38.361-1.005 1.103-2.593 1.832-3.055zm-6.3-.34c-.48 0-.902.27-1.263.81-.297.443-.41.855-.328 1.224.078.365.353.698.81.986.72.457 2.532.468 3.618.381-.358-1.008-1.1-2.6-1.829-3.058-.358-.227-.697-.342-1.008-.342zM3.44 8.586c0-.193.149-.367.185-.386h7.683v3.7H3.636c-.059-.022-.193-.176-.193-.387V8.585H3.44zm17.12 2.93c0 .213-.14.373-.184.387h-7.79v-3.7l7.762-.003c.061.022.213.196.213.39v2.926zM19.085 20.6H12.59v-7.454h6.68v7.068c-.003.213-.143.372-.185.386zM4.673 13.145v7.068c0 .213.14.37.198.386h6.435v-7.454H4.673z"
      ></path>
    </svg>
  );
};

GiftRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GiftRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default GiftRegular;
