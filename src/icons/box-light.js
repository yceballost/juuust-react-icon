import React from 'react';
import PropTypes from 'prop-types';

const BoxLight = props => {
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
        d="M20.392 3.324l1.417 4.857a.376.376 0 01.003.177c.02.092.03.188.03.288v11.692c0 .83-.728 1.505-1.624 1.505H3.78c-.896 0-1.625-.675-1.625-1.505V8.646c.003-.145.028-.288.073-.428L2.23 8.2c0-.007 0-.013.002-.019l1.372-4.857c.034-.65.67-1.168 1.451-1.168h13.888c.78 0 1.418.518 1.448 1.168zm-15.796.054a.377.377 0 01-.014.098L3.54 7.165c.078-.012.157-.023.24-.023h5.474l.44-4.151H5.055c-.254 0-.459.174-.459.387zm15.62 17.627c.35 0 .635-.3.635-.667h.003V8.646c0-.367-.286-.666-.636-.666h-5.745l.003 2.72c0 .23-.222.417-.496.417H9.694c-.274 0-.496-.188-.496-.417V7.98H3.781c-.347 0-.633.3-.633.666v11.692c0 .367.286.667.633.667h16.434zm-6.732-10.723H10.19l-.003-2.302h3.297v2.302zm-.064-3.14l-.53-4.145h-2.204l-.44 4.145h3.174zm6-3.664l1.072 3.692a1.548 1.548 0 00-.277-.025h-5.801l-.527-4.151h5.06c.251 0 .456.173.456.386 0 .034.005.068.017.098z"
      ></path>
    </svg>
  );
};

BoxLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BoxLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BoxLight;
