import React from 'react';
import PropTypes from 'prop-types';

const FileMp4Filled = props => {
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
        d="M21.639 7.76c.03.072.047.153.047.237v12.305c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.409-.647-1.409-1.384l.034-2.773H4.423A2.427 2.427 0 012 15.106v-4.092a2.426 2.426 0 012.42-2.426h2.266V3.384C6.686 2.658 7.36 2 8.096 2h7.414c.232 0 .448.087.613.247l5.297 5.126a.847.847 0 01.219.386zm-5.793-4.09l4.115 3.983H18.16c-.692 0-1.275-.21-1.69-.611-.408-.395-.624-.95-.624-1.608V3.67zM4.42 16.315a1.21 1.21 0 01-1.207-1.21v-4.095c0-.67.54-1.21 1.207-1.21h9.846a1.21 1.21 0 011.207 1.21v4.095c0 .667-.54 1.21-1.207 1.21H4.42zm9.023-2.254h-1.62a.778.778 0 01-.022-.188c0-.151.028-.322.112-.56l.765-2.09h.742l-.829 2.26h.852v-.876h.77v.877h.431v.577h-.431v.846h-.77v-.846zm-9.26-2.835h.66l1.163 2.056 1.201-2.056h.647v3.68h-.77v-2.12l-.765 1.28h-.647l-.787-1.302v2.143h-.703v-3.681zm4.472 0H9.92c.577 0 .94.081 1.179.302.199.182.297.468.297.86 0 .393-.092.69-.275.894-.215.24-.549.356-1.033.356h-.591v1.269h-.84v-3.681zm1.74 1.641c-.11.104-.221.14-.49.14h-.412v-1.173h.392c.258 0 .415.036.515.129.099.092.14.238.14.436 0 .216-.047.37-.145.468z"
      ></path>
    </svg>
  );
};

FileMp4Filled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileMp4Filled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileMp4Filled;
