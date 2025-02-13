import React from 'react';
import PropTypes from 'prop-types';

const PlugRegular = props => {
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
        d="M17.318 7.266h-.608V3.6a1.603 1.603 0 00-3.204 0v3.664l-2.502-.003V3.6a1.603 1.603 0 00-3.204 0v3.66h-.46c-.638 0-1.162.522-1.162 1.205 0 2.776 1.168 4.26 2.258 5.04v1.14c0 .865.355 1.358.647 1.613.355.327.843.501 1.437.532v3.95a.95.95 0 00.95.946h1.727a.947.947 0 00.947-.947v-3.95c.6-.027 1.093-.2 1.448-.531.289-.26.633-.754.633-1.614V13.5c1.09-.785 2.258-2.264 2.258-5.003v-.07a1.17 1.17 0 00-1.165-1.16zm-.062 1.23c0 1.944-.66 3.344-1.969 4.157a.612.612 0 00-.288.518v1.47c0 .331-.079.572-.236.715-.199.182-.537.221-.787.221h-3.28c-.364 0-.633-.076-.804-.232-.16-.14-.24-.376-.24-.704v-1.465a.61.61 0 00-.292-.52c-1.294-.802-1.955-2.191-1.97-4.177l9.858.006v.01h.008z"
      ></path>
    </svg>
  );
};

PlugRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlugRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlugRegular;
