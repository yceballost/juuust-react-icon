import React from 'react';
import PropTypes from 'prop-types';

const MuseumLight = props => {
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
        d="M19.386 18.009h1.991c.23 0 .418.187.418.42v3.003c0 .232-.185.42-.418.42H2.632a.419.419 0 01-.417-.42v-3.003c0-.233.185-.42.417-.42h2.025v-8.44H2.58a.418.418 0 01-.4-.294.421.421 0 01.162-.47l9.426-6.57c.143-.1.333-.1.476 0l9.426 6.57a.424.424 0 01.16.47.414.414 0 01-.399.294h-2.044v8.44zm1.571 3.003H3.05v-2.163h17.907v2.163zM5.492 18.009h1.616v-8.44H5.492v8.44zm14.602-9.28l-8.09-5.636-8.092 5.636h1.154l.005-.002a.01.01 0 01.004-.001.01.01 0 01.004.001.01.01 0 00.004.002h2.434l.005-.002.004-.001.004.001a.01.01 0 00.004.002h3.252l.004-.002.005-.001a.01.01 0 01.004.001l.004.002h2.434l.004-.002.005-.001a.01.01 0 01.004.001l.004.002h3.252l.004-.002h.002l.002-.001a.01.01 0 01.005.001l.004.002h2.434l.004-.002.005-.001a.01.01 0 01.004.001l.004.002h1.12zm-6.428 9.28H16.1v-8.44h-2.434v8.44zm-.835 0h-1.616v-8.44h1.616v8.44zm-4.888 0h2.434v-8.44H7.943v8.44zm10.608 0h-1.616v-8.44h1.616v8.44z"
      ></path>
    </svg>
  );
};

MuseumLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MuseumLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MuseumLight;
