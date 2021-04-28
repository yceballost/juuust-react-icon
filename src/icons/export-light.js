import React from 'react';
import PropTypes from 'prop-types';

const ExportLight = props => {
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
        d="M11.832 2.196a.746.746 0 00-.184.126L5.75 8.217a.583.583 0 00.824.823l4.897-4.91v12.08a.581.581 0 001.16 0V4.13l4.805 4.807a.583.583 0 00.823-.824l-5.79-5.79a.904.904 0 00-.197-.127.546.546 0 00-.44 0zm10.008 14.86c0-.32-.26-.58-.58-.58a.577.577 0 00-.577.58v3.624H3.31v-3.625a.581.581 0 00-1.16 0v4.205c0 .32.26.58.58.58h18.53c.32 0 .58-.26.58-.58v-4.205z"
      ></path>
    </svg>
  );
};

ExportLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ExportLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ExportLight;
