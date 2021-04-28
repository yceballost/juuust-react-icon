import React from 'react';
import PropTypes from 'prop-types';

const FilePptRegular = props => {
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
        d="M21.667 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.123c-.75 0-1.409-.647-1.409-1.383l.034-2.774H4.445a2.427 2.427 0 01-2.42-2.425v-4.093a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.725.67-1.384 1.41-1.384h7.414a.86.86 0 01.613.25L21.445 7.4c.115.109.18.243.222.386zM20.305 20.5c.098 0 .194-.096.194-.168V8.896h-2.314c-1.014 0-1.89-.33-2.532-.952-.65-.63-.995-1.487-.995-2.482V3.244H8.123c-.073 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.093a2.427 2.427 0 01-2.42 2.425h-6.33l-.034 2.78c0 .05.1.159.193.159h12.182v.003zM3.241 15.135c0 .666.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.093c0-.667-.54-1.21-1.207-1.21H4.448a1.21 1.21 0 00-1.207 1.21v4.092zm16.745-7.457l.003.003v-.003h-.003zm0 0l-4.112-3.983v1.764c0 .656.216 1.213.622 1.608.414.4.997.61 1.689.61h1.8zM6.01 11.333H4.717v3.77h.86v-1.3h.605c.496 0 .838-.114 1.059-.363.188-.21.28-.513.28-.916s-.098-.695-.303-.882c-.243-.227-.616-.309-1.207-.309zm.49 1.681c-.109.104-.227.143-.501.143v.003h-.426v-1.202h.404c.266 0 .425.04.529.132.098.092.143.24.143.445 0 .221-.05.381-.149.479zm1.63-1.68h1.295c.59 0 .963.08 1.207.308.205.187.303.479.303.882s-.093.706-.28.916c-.222.25-.564.364-1.06.364h-.604v1.3h-.86v-3.77zm1.785 1.68c-.11.104-.227.143-.501.143v.003h-.426v-1.202h.403c.266 0 .426.04.53.132.098.092.142.24.142.445 0 .221-.05.381-.148.479zm2.465-1.059h-1.168v-.622h3.235l-.067.622h-1.14v3.149h-.86v-3.149z"
      ></path>
    </svg>
  );
};

FilePptRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilePptRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilePptRegular;
