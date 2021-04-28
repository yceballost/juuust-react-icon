import React from 'react';
import PropTypes from 'prop-types';

const FileBoxFilled = props => {
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
        d="M21.677 12.968a.306.306 0 00-.002.026l.005.041c.003.023.006.045.006.066v7.129c0 .804-.65 1.456-1.45 1.456H3.453a1.456 1.456 0 01-1.451-1.456v-7.132c0-.038.005-.076.01-.113 0-.013.002-.026.004-.038 0-.01-.001-.02-.003-.029a.137.137 0 010-.047l1.591-9.476A1.457 1.457 0 015.056 2l13.577.014c.754 0 1.381.566 1.53 1.375l1.515 9.552c0 .01 0 .018-.002.027zm-8.243-.685c0-.347.28-.63.628-.63v.002h6.14l-1.278-8.05c-.03-.182-.16-.328-.29-.328l-13.58-.014a.194.194 0 00-.194.194c0 .033-.003.07-.008.103L3.49 11.653h6.135a.63.63 0 01.627.63v.868c.003.824.67 1.49 1.493 1.49h.193c.827 0 1.493-.666 1.496-1.49v-.868z"
      ></path>
    </svg>
  );
};

FileBoxFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileBoxFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileBoxFilled;
