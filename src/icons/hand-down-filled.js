import React from 'react';
import PropTypes from 'prop-types';

const HandDownFilled = props => {
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
      <path d="M14.758 2.16H6.974c-.984 0-1.824.308-2.364.866-.538.554-.81 1.33-.81 2.3v6.997c0 1.271.782 2.061 2.036 2.061.283 0 .541-.04.774-.117.238.857.94 1.366 1.946 1.366.286 0 .547-.039.776-.117.244.848.941 1.353 1.944 1.353.247 0 .476-.031.684-.09v2.902c0 1.333.818 2.162 2.134 2.162 1.266 0 2.042-.773 2.129-2.117l.003-.045v-7.384c.339.577.641.98 1.008 1.272.359.286.787.431 1.207.431.404 0 .802-.131 1.132-.397.65-.521.81-1.41.409-2.26a428.848 428.848 0 00-2.745-5.648c-.574-1.165-1.07-2.17-1.21-2.476-.143-.317-.488-1.059-1.269-1.059z"></path>
    </svg>
  );
};

HandDownFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HandDownFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HandDownFilled;
