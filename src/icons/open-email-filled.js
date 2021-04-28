import React from 'react';
import PropTypes from 'prop-types';

const OpenEmailFilled = props => {
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
        d="M21.68 9.763l-.008 9.804c.026.222.062.902-.403 1.46-.25.3-.734.66-1.627.677H4.045c-.897-.02-1.381-.378-1.63-.677-.463-.555-.426-1.238-.401-1.457l-.008-9.793c.022-1.016.44-1.523.787-1.773l.137-.087 7.283-4.599c.042-.034.697-.482 1.625-.482.593 0 1.173.174 1.669.502l7.359 4.65c.375.266.792.773.815 1.775zm-9.963 5.065c.328-.006.647-.107.919-.291l7.798-4.863c-.022-.32-.112-.56-.263-.667l-7.359-4.65a1.841 1.841 0 00-.963-.288 1.84 1.84 0 00-.95.271L3.49 9.024c-.143.104-.238.38-.25.767v.003l7.514 4.737c.285.188.621.291.963.297z"
      ></path>
    </svg>
  );
};

OpenEmailFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OpenEmailFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OpenEmailFilled;
