import React from 'react';
import PropTypes from 'prop-types';

const FileBoxLight = props => {
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
        d="M21.83 13.19a.136.136 0 00-.002.02.604.604 0 00.015.075v7.3c0 .694-.564 1.258-1.253 1.258H3.411a1.257 1.257 0 01-1.255-1.258v-7.3c0-.023.003-.047.006-.07a.843.843 0 00.005-.047.229.229 0 00-.002-.029c-.002-.016-.004-.031 0-.047l1.638-9.748c-.005-.625.558-1.188 1.247-1.188l13.899.017c.655 0 1.204.499 1.336 1.216l1.53 9.647v.011l.016.115c.002.01 0 .019 0 .028zM4.613 3.411c0-.238.193-.434.431-.434l13.9.017c.252 0 .473.224.526.532l1.356 8.552-.06-.014c-.061-.014-.122-.028-.187-.028h-6.316a.408.408 0 00-.41.412v.887c0 .97-.79 1.76-1.761 1.76h-.196c-.972 0-1.762-.79-1.762-1.76v-.887a.412.412 0 00-.41-.412H3.407c-.084 0-.163.008-.241.025l1.448-8.65zm16.403 17.174c0 .24-.193.437-.434.437H3.406a.44.44 0 01-.435-.437v-7.3c0-.232.2-.428.435-.428h5.91v.476a2.582 2.582 0 002.58 2.58h.196a2.585 2.585 0 002.582-2.58v-.476h5.91c.205 0 .379.14.421.325l.006.033.003.021a.29.29 0 01.005.05v7.299h-.003z"
      ></path>
    </svg>
  );
};

FileBoxLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileBoxLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileBoxLight;
