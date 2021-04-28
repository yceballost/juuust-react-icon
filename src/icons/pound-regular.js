import React from 'react';
import PropTypes from 'prop-types';

const PoundRegular = props => {
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
        d="M12 2.16c6.44 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.44 0-9.84-3.403-9.84-9.84C2.16 5.563 5.563 2.16 12 2.16zm0 18.479c5.731 0 8.639-2.905 8.639-8.633 0-5.731-2.905-8.639-8.639-8.639-5.728 0-8.633 2.908-8.633 8.639 0 5.728 2.905 8.633 8.633 8.633zm3.247-3.69a.405.405 0 00-.403-.402h-4.72c.817-.872 1.114-1.628 1.114-2.69 0-.498-.067-1.014-.198-1.54h2.109c.224 0 .403-.18.403-.404v-.397a.404.404 0 00-.403-.404h-2.476c-.171-.574-.325-1.218-.325-1.86 0-1.456.764-2.134 2.403-2.134.524 0 1.188.073 1.871.202a.402.402 0 00.476-.398v-.367a.406.406 0 00-.283-.387c-.728-.224-1.652-.305-2.224-.305-2.249 0-3.54 1.24-3.54 3.4 0 .71.14 1.387.302 1.93l-.66.045a.406.406 0 00-.376.404v.271c0 .224.18.404.403.404h.997c.168.563.244 1.045.244 1.526 0 .745-.168 1.342-1.04 2.183-.464.445-.697.672-.697 1.117 0 .163.031.303.093.423a.4.4 0 00.358.219h6.168c.225 0 .404-.18.404-.404v-.431z"
      ></path>
    </svg>
  );
};

PoundRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PoundRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PoundRegular;
