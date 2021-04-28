import React from 'react';
import PropTypes from 'prop-types';

const FilesDigitalFilled = props => {
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
        d="M20.902 14.328c-.499.532-1.235.804-2.182.804l-7.171.002v.79h9.479c.339 0 .602.28.602.617a.605.605 0 01-.602.616h-9.479v1.784c0 .591-.496 1.093-1.081 1.093H3.08A1.103 1.103 0 012 18.94V8.457c0-.591.504-1.101 1.081-1.101h1.275V6.64c0-.935.252-1.666.73-2.168.5-.523 1.236-.787 2.183-.787l11.45-.008c.948 0 1.687.263 2.183.79.49.51.731 1.232.731 2.168v5.512c0 .939-.24 1.67-.731 2.18zm-10.558 4.476H3.202V8.59H6.81v1.134c0 .681.232 1.275.672 1.71.434.433 1.017.657 1.7.657h1.162v6.712zM8.014 8.64l2.289 2.219h-1.12c-.259 0-.603-.048-.866-.305-.202-.205-.306-.485-.306-.83V8.641h.003z"
      ></path>
    </svg>
  );
};

FilesDigitalFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilesDigitalFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilesDigitalFilled;
