import React from 'react';
import PropTypes from 'prop-types';

const ThrowLightRegular = props => {
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
        d="M20.456 2.16H12.87a1.401 1.401 0 00-.991 2.392l.697.698-6.221 6.22a1.402 1.402 0 000 1.981l4.196 4.2a1.401 1.401 0 001.98 0l6.222-6.225.708.711c.26.264.617.412.99.412.772 0 1.4-.627 1.402-1.4V3.56c0-.773-.624-1.4-1.397-1.4zm0 1.12a.28.28 0 01.28.28v7.586a.28.28 0 01-.28.28h-.003a.274.274 0 01-.196-.084l-1.292-1.291-.204-.205c-.07.062-.14.123-.204.194l-6.816 6.817a.279.279 0 01-.394 0l-4.2-4.198a.279.279 0 010-.396l6.816-6.815a.279.279 0 000-.395l-1.292-1.29a.279.279 0 01.2-.477h7.585V3.28zM2.156 21.29a.56.56 0 00.955.395l4.636-4.633.014-.014a.561.561 0 00-.807-.78l-4.633 4.634a.562.562 0 00-.165.398zm5.597.563a.562.562 0 01-.56-.56.55.55 0 01.165-.395c.933-.934 2.018-2.063 2.243-2.298l.042-.044a.562.562 0 11.813.776c-.011.014-1.252 1.308-2.303 2.358a.583.583 0 01-.4.163zm-5.547-5.547a.562.562 0 00.958.398 163.972 163.972 0 002.311-2.37.562.562 0 00-.82-.764l-.043.044c-.225.234-1.31 1.364-2.243 2.298a.56.56 0 00-.163.394z"
      ></path>
    </svg>
  );
};

ThrowLightRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThrowLightRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThrowLightRegular;
