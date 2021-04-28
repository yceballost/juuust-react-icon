import React from 'react';
import PropTypes from 'prop-types';

const FileBoxRegular = props => {
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
        d="M21.704 12.968c0 .008-.002.017 0 .026a.636.636 0 00.004.04.494.494 0 01.006.07v7.129c0 .803-.65 1.456-1.45 1.456H3.475a1.454 1.454 0 01-1.45-1.456v-7.13c0-.035.004-.07.01-.104l.006-.05c0-.01 0-.02-.002-.03-.001-.015-.002-.03 0-.045l1.593-9.476c.03-.776.67-1.395 1.448-1.395l13.58.014c.754 0 1.381.566 1.53 1.375l1.515 9.55c.001.009 0 .017-.002.026zM4.88 3.558a.674.674 0 00.008-.104c0-.107.087-.193.193-.193l13.58.014c.132 0 .258.145.294.327l1.278 8.048h-6.14a.629.629 0 00-.628.63v.866c0 .823-.67 1.49-1.496 1.49h-.193c-.824 0-1.493-.67-1.493-1.49v-.866c0-.347-.28-.63-.628-.63H3.521L4.88 3.557zm15.383 16.87H3.482a.202.202 0 01-.196-.195v-7.13a.2.2 0 01.196-.19h5.546v.238a2.753 2.753 0 002.748 2.751h.193a2.754 2.754 0 002.75-2.75v-.239h5.547c.112 0 .177.081.19.137l.006 7.185a.2.2 0 01-.199.194z"
      ></path>
    </svg>
  );
};

FileBoxRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileBoxRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileBoxRegular;
