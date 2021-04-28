import React from 'react';
import PropTypes from 'prop-types';

const HospitalRegular = props => {
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
        d="M21.686 6.235c0-.787-.291-1.255-.779-1.255l-2.271-.002V3.403c0-.722-.628-1.378-1.32-1.378H6.379c-.692 0-1.32.656-1.32 1.378v1.575h-2.28c-.484 0-.775.47-.775 1.255v14.226c0 .788.288 1.255.776 1.255h18.128c.488 0 .78-.47.78-1.255V6.235zM6.255 20.51V3.406c0-.067.087-.162.118-.17H17.3c.044.01.131.106.131.173v17.1h-2.566v-6.545a.6.6 0 00-.599-.603H9.42a.6.6 0 00-.6.603v6.546H6.256zm14.232-.05V6.182h-1.854v14.324h1.854v-.048zm-10.465.05h3.647v-5.944h-3.647v5.944zM3.2 20.46v.05h1.854v-.799c0-.003 0-.005-.002-.007V6.185H3.195v14.274H3.2zM8.922 7.352v1.14h1.75a.6.6 0 01.6.602v1.76h1.143l-.006-1.757c0-.16.062-.314.176-.426a.593.593 0 01.426-.176h1.757V7.347H13.01a.6.6 0 01-.6-.602V4.986h-1.14v1.765a.6.6 0 01-.599.602h-1.75zm-1.2 1.31c0 .572.494 1.037 1.102 1.037h1.249v1.255c0 .6.47 1.107 1.03 1.107h1.482c.558 0 1.031-.507 1.031-1.11L13.613 9.7h1.25c.6 0 1.106-.476 1.106-1.036V7.177c0-.563-.507-1.037-1.106-1.037H13.61V4.89c0-.601-.471-1.111-1.031-1.111h-1.476c-.558 0-1.031.51-1.031 1.112v1.255h-1.25c-.596 0-1.1.476-1.1 1.036v1.482z"
      ></path>
    </svg>
  );
};

HospitalRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HospitalRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HospitalRegular;
