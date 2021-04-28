import React from 'react';
import PropTypes from 'prop-types';

const AlertLight = props => {
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
        d="M22.496 23H1.507a.499.499 0 01-.44-.226.499.499 0 01-.005-.492l10.53-21C11.68 1.103 11.831 1 12 1c.17 0 .32.103.41.282l10.528 21a.499.499 0 01-.006.492c-.085.145-.245.226-.436.226zm-20.82-.602h20.648L12.004 1.805 1.675 22.398zm10.35-4.88a.314.314 0 01-.315-.314V8.03a.314.314 0 01.628 0v9.174a.312.312 0 01-.314.313zm-.023 2.468c-.216 0-.339-.125-.339-.338 0-.213.126-.339.34-.339.212 0 .338.126.338.339 0 .213-.122.338-.339.338z"
      ></path>
    </svg>
  );
};

AlertLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlertLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlertLight;
