import React from 'react';
import PropTypes from 'prop-types';

const DumbbellRegular = props => {
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
        d="M19.339 6.787h1.095c.706 0 1.28.6 1.28 1.336v7.55c0 .736-.574 1.335-1.28 1.335H19.34v.113c0 .736-.574 1.336-1.28 1.336H16.96c-.709 0-1.28-.597-1.28-1.337v-2.812H8.067v2.813c0 .736-.574 1.336-1.28 1.336H5.69c-.706 0-1.28-.597-1.28-1.337v-.114a.01.01 0 00-.004 0 .018.018 0 01-.007.002H3.3c-.709 0-1.28-.596-1.28-1.336V8.123c0-.736.574-1.336 1.28-1.336h1.098l.003.001.008.002v-.115c0-.737.574-1.336 1.28-1.336h1.098c.706 0 1.28.597 1.28 1.336V9.49h7.614V6.675c0-.737.574-1.336 1.28-1.336h1.098c.706 0 1.28.597 1.28 1.336v.112zm1.098 8.885h-1.095V8.123h1.095v7.55zm-3.474 1.451v-4.131l.002-.01.001-.01v-2.146l-.001-.01-.002-.01v-4.13h1.099V8.1l-.002.01-.001.015v7.55l.001.012.002.012v1.426h-1.099v-.003zm-1.277-4.151H8.073v-2.146h7.613v2.146zm-9.991 4.149V6.675h1.098v4.003l-.005.04c-.005.036-.01.071-.01.108v2.146c0 .04.006.078.01.116l.005.033v4H5.695zm-1.289-1.449H3.308V8.123h1.098v7.55z"
      ></path>
    </svg>
  );
};

DumbbellRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DumbbellRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DumbbellRegular;
