import React from 'react';
import PropTypes from 'prop-types';

const DisconnectFilled = props => {
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
        d="M21.714 9.38c0-4.755-2.63-7.38-7.39-7.38-3.439 0-5.775 1.375-6.797 3.941H5.073c-.986 0-1.723.266-2.263.807-.527.535-.785 1.266-.785 2.24v9.648c0 1 .258 1.74.793 2.266s1.269.784 2.255.784h4.843c.986 0 1.728-.26 2.255-.784.535-.527.793-1.266.793-2.266V16.66c.434.05.885.084 1.36.084 4.76 0 7.39-2.616 7.39-7.364zM11.711 8.99v9.647c0 .641-.131 1.1-.425 1.384-.286.274-.734.417-1.37.417H5.073c-.636 0-1.087-.143-1.37-.418-.291-.282-.426-.742-.426-1.383V8.989c0-.625.135-1.073.426-1.364.294-.292.737-.435 1.37-.435h4.843c.644 0 1.095.143 1.378.426.283.283.417.731.417 1.373zm4.46 3.092a.633.633 0 00.885 0 .627.627 0 000-.885l-1.9-1.894V6.748a.628.628 0 00-1.255 0v2.815c0 .165.068.325.186.443l2.084 2.075zm-7.857 6.44c0-.515-.306-.82-.818-.82-.513 0-.818.305-.818.82 0 .252.07.45.213.597.143.145.353.224.605.224s.462-.079.605-.224c.143-.146.213-.345.213-.597z"
      ></path>
    </svg>
  );
};

DisconnectFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DisconnectFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DisconnectFilled;
