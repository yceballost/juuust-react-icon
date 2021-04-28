import React from 'react';
import PropTypes from 'prop-types';

const CloudLight = props => {
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
        d="M6.033 18.881h10.728a5.077 5.077 0 005.076-5.07 5.079 5.079 0 00-5.286-5.067l-.033.003-.006-.011a6.11 6.11 0 00-5.569-3.611c-3.319 0-5.734 2.555-5.75 6.078a.628.628 0 01-.138.05c-.778.22-1.498.701-2.03 1.36-.569.703-.869 1.529-.869 2.392a3.882 3.882 0 003.877 3.876zM7.207 7.257c.944-1.014 2.269-1.572 3.736-1.572a5.555 5.555 0 015.062 3.286c0 .003.001.006.003.008.09.224.24.334.448.328l.06-.003.06-.003h.022a4.516 4.516 0 014.676 4.508 4.519 4.519 0 01-4.513 4.512H6.033a3.32 3.32 0 01-3.317-3.316c0-.732.255-1.437.743-2.04a3.49 3.49 0 011.748-1.173c.134-.037.543-.154.543-.552 0-1.558.513-2.97 1.457-3.983z"
      ></path>
    </svg>
  );
};

CloudLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudLight;
