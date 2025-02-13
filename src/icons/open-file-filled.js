import React from 'react';
import PropTypes from 'prop-types';

const OpenFileFilled = props => {
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
        d="M19.532 8.587h.807c.742 0 1.347.605 1.35 1.353 0 .039-.003.078-.011.115L20.23 18a1.353 1.353 0 01-1.345 1.289H4.115c-.742 0-1.347-.61-1.347-1.356l.001-.024.001-.02L2 5.94v-.025a1.402 1.402 0 011.415-1.39h6.128c.782 0 1.418.616 1.418 1.376v.4h7.1c.782 0 1.418.616 1.418 1.375l.064.813c.002.02-.002.04-.005.06-.002.013-.005.025-.006.038zM9.543 5.775H3.415c-.107 0-.177.067-.177.123l.451 6.994.558-3.02A1.35 1.35 0 015.59 8.585h12.717v-.003l-.064-.86c0-.106-.073-.17-.18-.17h-7.722a.622.622 0 01-.62-.625V5.898c0-.06-.072-.123-.179-.123z"
      ></path>
    </svg>
  );
};

OpenFileFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OpenFileFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OpenFileFilled;
