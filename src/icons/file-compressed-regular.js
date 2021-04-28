import React from 'react';
import PropTypes from 'prop-types';

const FileCompressedRegular = props => {
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
        d="M13.814 2.247l5.215 5.128c.166.163.258.39.258.622v12.308a1.4 1.4 0 01-1.384 1.381H5.906c-.737 0-1.384-.647-1.384-1.38V3.38C4.522 2.658 5.181 2 5.906 2h7.305c.227 0 .44.087.603.247zm4.092 18.23c.098 0 .193-.099.193-.172h-.002V8.863h-2.28c-.998 0-1.86-.33-2.494-.953-.638-.627-.977-1.484-.977-2.479V3.207H9.349v.614h.907a.6.6 0 01.594.605.6.6 0 01-.594.605H9.35v1.524h.907a.6.6 0 01.594.605.6.6 0 01-.594.605H9.35v1.524h.907a.6.6 0 01.594.605.6.6 0 01-.594.605H9.35v1.523h.907a.6.6 0 01.594.605.6.6 0 01-.594.605H9.35v.494h.885a.6.6 0 01.594.604v2.267a.6.6 0 01-.594.605h-3a.6.6 0 01-.594-.605V14.33a.6.6 0 01.594-.604h.927v-1.86h-.936a.6.6 0 01-.593-.605.6.6 0 01.593-.605h.936V9.131h-.936a.6.6 0 01-.593-.605.6.6 0 01.593-.605h.936V6.398h-.936a.6.6 0 01-.593-.605.6.6 0 01.593-.605h.936v-1.98H5.906c-.075 0-.19.111-.196.173v16.924c0 .062.098.171.196.171h12zM9.64 15.991H7.83v-.816h1.81v.816zm3.896-12.334l4.065 3.997h-1.784c-.684 0-1.261-.212-1.667-.61-.4-.395-.614-.953-.614-1.61V3.657z"
      ></path>
    </svg>
  );
};

FileCompressedRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileCompressedRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileCompressedRegular;
