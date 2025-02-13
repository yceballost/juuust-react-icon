import React from 'react';
import PropTypes from 'prop-types';

const FileHtmlRegular = props => {
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
        d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.406 1.383H8.098c-.75 0-1.409-.647-1.409-1.383l.034-2.77H4.42A2.427 2.427 0 012 15.133V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.725.67-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.3 5.132c.112.109.177.243.219.386zM20.28 20.5c.098 0 .193-.096.193-.168V8.896h-2.31c-1.015 0-1.891-.33-2.536-.952-.65-.63-.994-1.487-.994-2.482V3.244H8.098c-.073 0-.188.109-.193.168v5.201h7.014c1.333 0 2.42 1.09 2.42 2.426v4.095a2.427 2.427 0 01-2.42 2.426H7.94l-.033 2.779c0 .05.1.16.193.16H20.28zM3.213 15.135c0 .666.54 1.21 1.207 1.21h10.493a1.21 1.21 0 001.207-1.21v-4.096c0-.666-.54-1.21-1.207-1.21H4.42a1.21 1.21 0 00-1.207 1.21v4.095zM19.96 7.677l.003.003v-.003h-.003zm0 0l-4.112-3.983v1.764c0 .659.215 1.213.622 1.608.414.4.997.61 1.691.61h1.799zM3.846 11.58h.706v1.26h1.09v-1.26h.705v3.095h-.706v-1.302h-1.09v1.302h-.705V11.58zm3.86.51h-.958v-.51h2.655l-.053.51h-.935v2.582h-.706V12.09h-.003zm2.622-.51H9.77v3.095h.594v-1.801l.661 1.095h.544l.641-1.075v1.781h.647V11.58h-.543l-1.009 1.728-.977-1.728zm3.199 0h.705v2.582h1.37v.513h-2.075V11.58z"
      ></path>
    </svg>
  );
};

FileHtmlRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileHtmlRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileHtmlRegular;
