import React from 'react';
import PropTypes from 'prop-types';

const DownloadLight = props => {
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
        d="M11.45 21.57a.698.698 0 001.08 0l9.131-9.417.017-.016a.755.755 0 00.098-.813.711.711 0 00-.644-.417h-4.197c-.09 0-.16-.081-.16-.185l.004-6.885c0-.927-.754-1.68-1.681-1.68h-6.21c-.927 0-1.68.753-1.68 1.68v6.888c0 .1-.074.185-.16.185H2.877a.708.708 0 00-.645.414.76.76 0 00.096.813l.016.016 9.107 9.418zm.413-.38l-9.104-9.415a.208.208 0 01-.02-.213.153.153 0 01.14-.095h4.169c.397 0 .72-.333.72-.745v-6.88c0-.619.5-1.12 1.12-1.12h6.207c.62 0 1.12.501 1.12 1.12l-.002 6.883c0 .409.322.745.72.745h4.199c.061 0 .117.04.14.095a.21.21 0 01-.02.21l-9.126 9.415-.017.017a.146.146 0 01-.115.058.155.155 0 01-.114-.058l-.017-.017z"
      ></path>
    </svg>
  );
};

DownloadLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadLight;
