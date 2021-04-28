import React from 'react';
import PropTypes from 'prop-types';

const PoundLight = props => {
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
        d="M12 2.16c6.443 0 9.846 3.406 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84 0-6.44 3.403-9.846 9.84-9.846zm0 18.866c5.99 0 9.023-3.034 9.023-9.02 0-5.989-3.037-9.023-9.023-9.023s-9.02 3.034-9.02 9.023c0 5.983 3.037 9.02 9.02 9.02zm3.12-3.88a.206.206 0 00-.204-.205v-.002h-5.31c1.058-1.003 1.428-1.793 1.428-2.95 0-.574-.087-1.17-.266-1.779h2.42a.206.206 0 00.204-.204v-.41a.206.206 0 00-.204-.204H10.51c-.199-.633-.386-1.367-.386-2.103 0-1.602.87-2.381 2.658-2.381.546 0 1.238.073 1.947.207a.219.219 0 00.17-.045.208.208 0 00.073-.157v-.375a.208.208 0 00-.143-.196c-.72-.224-1.641-.303-2.21-.303-2.198 0-3.409 1.16-3.409 3.264 0 .812.188 1.585.379 2.157l-.936.064a.203.203 0 00-.19.205v.277c0 .112.092.204.204.204h1.168c.207.659.303 1.208.303 1.765 0 .793-.188 1.468-1.126 2.373-.457.442-.648.627-.648.994a.74.74 0 00.07.336c.037.07.107.112.185.112h6.297a.206.206 0 00.205-.204v-.44z"
      ></path>
    </svg>
  );
};

PoundLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PoundLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PoundLight;
