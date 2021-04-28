import React from 'react';
import PropTypes from 'prop-types';

const CloudUploadFilled = props => {
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
        d="M11.052 3.35c.82 0 4.91.193 6.087 3.924 1.414.112 4.697.85 4.697 5.213 0 4.992-4.31 5.247-5.173 5.247l-1.58.008v2.081c0 .415-.364.754-.799.754h-4.59c-.438 0-.799-.34-.799-.762v-2.04l-2.515.018c-2.05 0-4.23-1.143-4.23-4.331 0-2.613 1.448-3.63 2.501-4.02.107-5.795 5.34-6.092 6.401-6.092zm5.193 11.658a.338.338 0 00.303-.201.358.358 0 00-.067-.367l-4.205-4.46a.366.366 0 00-.238-.1.313.313 0 00-.232.1l-4.303 4.544a.316.316 0 00-.064.364.312.312 0 00.294.204l1.868.009a.118.118 0 01.123.117v2.529l-.008.01v1.963l4.543.008v-4.594c.006-.075.056-.126.132-.126h1.854z"
      ></path>
    </svg>
  );
};

CloudUploadFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudUploadFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudUploadFilled;
