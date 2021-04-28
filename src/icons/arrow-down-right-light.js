import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRightLight = props => {
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
        d="M19.831 20.474a.637.637 0 00.47-.188.669.669 0 00.183-.537v-12.6c.002-.383-.188-.686-.519-.829-.358-.154-.826-.081-1.09.171l-.005.006-2.773 2.773a.143.143 0 01-.11.042.192.192 0 01-.134-.06l-5.168-5.237-.002-.003c-.275-.272-.85-.84-1.594-.157l-.009.009L4.033 8.92c-.334.33-.496.658-.502.997-.002.341.16.68.485 1.005l5.067 5.096c.04.036.059.084.062.134a.155.155 0 01-.042.11L6.54 18.823l-.009.009c-.266.288-.341.787-.176 1.16.134.3.4.473.728.473h.011l12.667.005a.609.609 0 00.07.003zm-.056-.56l-12.68-.006h-.003c-.076 0-.166-.016-.222-.143-.075-.168-.039-.422.073-.549l2.56-2.56a.711.711 0 00.205-.523.756.756 0 00-.224-.513L4.41 10.527c-.219-.218-.322-.414-.32-.602.003-.185.115-.39.337-.61l5.045-5.05c.274-.25.408-.259.815.145l5.168 5.238c.137.14.319.218.512.224a.707.707 0 00.524-.204l2.77-2.77c.093-.085.311-.132.48-.06.123.054.179.152.179.314v12.616l.003.028c.005.045-.003.084-.02.101s-.053.025-.101.02c-.008-.003-.02-.003-.028-.003z"
      ></path>
    </svg>
  );
};

ArrowDownRightLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownRightLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownRightLight;
