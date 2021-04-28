import React from 'react';
import PropTypes from 'prop-types';

const AlertFilled = props => {
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
        d="M22.905 21.837L12.582 1.453C12.438 1.17 12.178 1 11.887 1c-.292 0-.552.172-.693.456L1.091 21.837a.8.8 0 00.025.788c.145.231.41.375.709.375h20.353a.82.82 0 00.708-.372.799.799 0 00.019-.79zM12 19.93c-.392 0-.62-.225-.62-.619 0-.393.225-.619.62-.619.394 0 .62.226.62.62 0 .393-.229.618-.62.618zm.012-2.366a.616.616 0 00.617-.616V8.34a.616.616 0 00-.617-.616.616.616 0 00-.617.616v8.608c0 .341.276.616.617.616z"
      ></path>
    </svg>
  );
};

AlertFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlertFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlertFilled;
