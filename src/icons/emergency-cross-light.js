import React from 'react';
import PropTypes from 'prop-types';

const EmergencyCrossLight = props => {
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
        d="M9.938 21.837l4.129.003c.641 0 1.204-.659 1.204-1.41l-.003-5.167h5.166c.736 0 1.409-.575 1.409-1.205V9.93c0-.63-.673-1.204-1.41-1.204l-5.168.003V3.565c0-.736-.574-1.409-1.204-1.409H9.932c-.63 0-1.204.673-1.204 1.41L8.73 8.73l-5.16.003c-.753 0-1.41.563-1.41 1.205l-.004 4.126c0 .641.659 1.204 1.41 1.204l5.164-.003.003 5.163c0 .75.563 1.409 1.205 1.409zm-.39-6.983a.41.41 0 00-.409-.41l-5.577.01c-.325 0-.59-.236-.59-.387v-4.13c0-.15.265-.383.59-.383l5.575-.003a.41.41 0 00.409-.409l-.003-5.577c0-.322.258-.588.386-.588h4.126c.13 0 .384.266.384.588l.003 5.572a.41.41 0 00.409.409l5.577-.003c.322 0 .588.255.588.384v4.128c0 .132-.266.384-.588.384l-5.574.003a.41.41 0 00-.41.409l.004 5.577c0 .325-.233.591-.384.591l-4.129-.003c-.151 0-.384-.263-.384-.588l-.003-5.574z"
      ></path>
    </svg>
  );
};

EmergencyCrossLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmergencyCrossLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmergencyCrossLight;
