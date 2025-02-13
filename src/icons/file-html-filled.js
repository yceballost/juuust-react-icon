import React from 'react';
import PropTypes from 'prop-types';

const FileHtmlFilled = props => {
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
        d="M21.639 7.76c.03.072.047.153.047.237v12.305c0 .751-.644 1.384-1.409 1.384H8.098c-.75 0-1.409-.647-1.409-1.384l.034-2.77H4.42A2.427 2.427 0 012 15.106v-4.092a2.426 2.426 0 012.42-2.426h2.266V3.384C6.686 2.658 7.36 2 8.096 2h7.414c.23 0 .445.087.61.244l5.3 5.131c.112.107.177.241.219.384zm-5.793-4.09l4.117 3.983H18.16c-.692 0-1.275-.21-1.69-.611-.408-.395-.624-.95-.624-1.608V3.67zM4.42 16.315a1.21 1.21 0 01-1.207-1.21v-4.092c0-.67.54-1.21 1.207-1.21h10.493a1.21 1.21 0 011.207 1.21v4.092c0 .667-.54 1.21-1.207 1.21H4.42zm-.602-4.764h.706v1.26h1.09v-1.26h.705v3.095h-.706v-1.303h-1.09v1.303h-.705v-3.095zm3.86.51H6.72v-.51h2.655l-.053.51h-.935v2.582H7.68v-2.582h-.003zm2.622-.51h-.558v3.095h.594v-1.801l.661 1.095h.544l.641-1.075v1.781h.647v-3.095h-.543l-1.009 1.728-.977-1.728zm3.199 0h.705v2.582h1.37v.513H13.5v-3.095z"
      ></path>
    </svg>
  );
};

FileHtmlFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileHtmlFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileHtmlFilled;
