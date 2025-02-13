import React from 'react';
import PropTypes from 'prop-types';

const FileMp4Regular = props => {
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
        d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.095c-.75 0-1.406-.647-1.406-1.383l.034-2.774h-2.3a2.427 2.427 0 01-2.42-2.425v-4.096a2.427 2.427 0 012.42-2.425h2.266V3.406c0-.722.67-1.384 1.406-1.384h7.415a.86.86 0 01.613.25l5.297 5.126c.112.109.177.246.219.39zM20.277 20.5c.098 0 .194-.096.194-.168V8.896h-2.314c-1.014 0-1.89-.33-2.535-.952-.65-.63-.995-1.487-.995-2.482V3.244H8.092c-.072 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.095a2.427 2.427 0 01-2.42 2.426h-6.33l-.034 2.779c0 .05.101.16.193.16h12.185zM3.213 15.135c0 .666.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.096c0-.666-.54-1.21-1.207-1.21H4.42a1.21 1.21 0 00-1.207 1.21v4.095zM15.846 3.697L19.96 7.68H18.16c-.695 0-1.278-.21-1.692-.61-.406-.396-.622-.95-.622-1.609V3.698zM13.443 14.09h-1.62a.778.778 0 01-.022-.188c0-.151.028-.322.112-.56l.765-2.09h.742l-.829 2.26h.852v-.876h.77v.877h.431v.577h-.431v.846h-.77v-.846zm-9.26-2.835h.66l1.163 2.056 1.201-2.056h.647v3.68h-.77v-2.12l-.765 1.28h-.647l-.787-1.302v2.143h-.703v-3.681zm4.472 0H9.92c.577 0 .94.081 1.179.302.199.182.297.468.297.86 0 .393-.092.69-.275.894-.215.24-.549.356-1.033.356h-.591v1.269h-.84v-3.681zm1.74 1.641c-.11.104-.221.14-.49.14h-.412v-1.173h.392c.258 0 .415.036.515.129.099.092.14.238.14.437 0 .215-.047.37-.145.467z"
      ></path>
    </svg>
  );
};

FileMp4Regular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileMp4Regular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileMp4Regular;
