import React from 'react';
import PropTypes from 'prop-types';

const FileCompressedFilled = props => {
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
        d="M19.03 7.375c.165.163.26.39.26.622v12.311a1.4 1.4 0 01-1.384 1.381h-12c-.737 0-1.384-.644-1.384-1.38V3.38C4.522 2.658 5.181 2 5.906 2h2.255v3.19h-.935a.6.6 0 00-.594.606.6.6 0 00.594.605h.935v1.523h-.935a.6.6 0 00-.594.605.6.6 0 00.594.605h.935v1.524h-.935a.6.6 0 00-.594.605.6.6 0 00.594.605h.935v1.857h-.927a.6.6 0 00-.594.606v2.266a.6.6 0 00.594.605h3a.6.6 0 00.594-.605V14.33a.6.6 0 00-.594-.604h-.885v-.494h.907a.6.6 0 00.594-.604.6.6 0 00-.594-.606H9.35V10.5h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605H9.35V7.765h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605H9.35V5.03h.907a.6.6 0 00.594-.605.6.6 0 00-.594-.605H9.35V2h3.862a.86.86 0 01.6.244l5.218 5.131zm-3.21.28h1.784l-4.068-4v1.776c0 .659.213 1.216.614 1.611.409.4.986.613 1.67.613zm-7.99 7.522v.815h1.81v-.816H7.83z"
      ></path>
    </svg>
  );
};

FileCompressedFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileCompressedFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileCompressedFilled;
