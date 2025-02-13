import React from 'react';
import PropTypes from 'prop-types';

const ChangeWifiPasswordFilled = props => {
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
        d="M17.82 9.919c.59.566.896 1.4.91 2.476 0 .003 0 .005.002.005v5.936c-.01 1.076-.319 1.908-.91 2.476-.571.546-1.384.824-2.417.824H7.828c-1.037 0-1.849-.277-2.418-.827-.59-.568-.89-1.403-.89-2.481l.002-5.653-.002-.232v-.037c0-1.078.3-1.913.89-2.482.381-.367.869-.61 1.457-.734V6.465C6.867 4.003 8.959 2 11.534 2h.184c2.575 0 4.667 2.003 4.667 4.462v.034a.52.52 0 01-1.036-.034c0-1.888-1.63-3.426-3.63-3.426h-.185c-2.003 0-3.63 1.538-3.63 3.426v2.633h7.498c1.034 0 1.846.278 2.417.824zm-6.197 9.403c.213 0 .384-.059.502-.176.109-.11.17-.272.168-.49 0-.454-.264-.665-.67-.665s-.67.21-.67.664c0 .219.06.381.169.49.117.121.288.177.501.177zm3.129-1.818a.52.52 0 01-.734-.011c-.513-.53-1.316-.798-2.39-.798-1.072 0-1.882.268-2.394.8a.518.518 0 11-.748-.72c.717-.741 1.773-1.12 3.14-1.12 1.364 0 2.417.376 3.134 1.112a.519.519 0 01-.008.737zm.697-2.274a.518.518 0 10.742-.723c-1.033-1.064-2.568-1.605-4.562-1.605-2 0-3.54.543-4.574 1.616a.518.518 0 10.747.72c.83-.863 2.118-1.3 3.827-1.3 1.703 0 2.989.434 3.82 1.292z"
      ></path>
    </svg>
  );
};

ChangeWifiPasswordFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChangeWifiPasswordFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChangeWifiPasswordFilled;
