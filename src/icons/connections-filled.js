import React from 'react';
import PropTypes from 'prop-types';

const ConnectionsFilled = props => {
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
      <path d="M17.871 11.938c-.927 0-1.765.345-2.423.894l-1.524-1.336c.44-.61.709-1.356.709-2.166 0-.095-.022-.184-.028-.277l2.4-.709a2.451 2.451 0 002.093 1.183 2.46 2.46 0 002.46-2.46 2.463 2.463 0 00-2.46-2.46 2.465 2.465 0 00-2.462 2.46c0 .023.005.04.005.062l-2.338.689a3.724 3.724 0 00-3.39-2.205c-1.03 0-1.96.42-2.636 1.098l-1.49-1.277c.182-.328.297-.703.297-1.106a2.307 2.307 0 00-4.613 0 2.307 2.307 0 002.305 2.305c.406 0 .781-.112 1.112-.297l1.667 1.426a3.68 3.68 0 00-.359 1.566c0 .792.255 1.526.68 2.131l-1.355 1.328a2.75 2.75 0 00-1.742-.633 2.778 2.778 0 00-2.776 2.773 2.776 2.776 0 005.552 0c0-.403-.093-.787-.25-1.134l1.47-1.437a3.69 3.69 0 004.247.028l1.597 1.4a3.763 3.763 0 00-.557 1.958c0 .496.1.964.274 1.398l-1.661.765a2.296 2.296 0 00-1.742-.81 2.31 2.31 0 00-2.308 2.306 2.307 2.307 0 004.613 0c0-.118-.017-.23-.034-.342l1.804-.83c.7.805 1.72 1.326 2.866 1.326a3.816 3.816 0 003.815-3.81 3.822 3.822 0 00-3.818-3.807z"></path>
    </svg>
  );
};

ConnectionsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ConnectionsFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ConnectionsFilled;
