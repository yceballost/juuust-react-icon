import React from 'react';
import PropTypes from 'prop-types';

const FilesDigitalRegular = props => {
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
        d="M20.902 14.328c-.499.532-1.235.804-2.182.804h-7.168v.79h9.476c.339 0 .602.28.602.616a.605.605 0 01-.602.616h-9.479v1.784c0 .591-.496 1.093-1.081 1.093H3.08A1.103 1.103 0 012 18.938V8.454c0-.591.504-1.101 1.081-1.101h1.275v-.714c0-.936.249-1.667.73-2.168.5-.524 1.236-.788 2.183-.788l11.45-.008c.948 0 1.687.263 2.183.79.49.51.731 1.232.731 2.17v5.516c0 .936-.24 1.667-.731 2.177zm-9.586-3.566c.09.081.146.196.185.31.034.076.05.158.048.25v2.588l7.168-.008c.608 0 1.05-.14 1.322-.429.255-.269.384-.714.384-1.322V6.64c0-.6-.126-1.042-.384-1.306-.263-.28-.706-.42-1.322-.42l-11.45.009c-.609 0-1.06.14-1.323.42-.255.263-.384.706-.384 1.305v.714h2.02c.193 0 .392.082.53.222l3.207 3.179zM8.014 9.199v.526c0 .345.104.625.305.83.264.257.611.305.866.305h.512L8.014 9.199zm2.33 9.605H3.202V8.59H6.81v1.134c0 .681.232 1.275.672 1.71.434.433 1.02.657 1.7.657h1.162v6.712z"
      ></path>
    </svg>
  );
};

FilesDigitalRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilesDigitalRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilesDigitalRegular;
