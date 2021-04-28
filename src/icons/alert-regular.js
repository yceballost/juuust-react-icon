import React from 'react';
import PropTypes from 'prop-types';

const AlertRegular = props => {
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
        d="M22.182 23H1.817a.81.81 0 01-.702-.372.82.82 0 01-.025-.794L11.2 1.456c.144-.287.401-.456.69-.456.288 0 .545.169.689.453l10.325 20.378s0 .003.003.003a.804.804 0 01-.022.794.817.817 0 01-.702.372zM11.4 16.946a.614.614 0 001.228 0V8.339a.614.614 0 00-1.228 0v8.607zm-.007 2.363c0 .394.23.619.62.619.393 0 .621-.225.621-.62 0-.393-.225-.618-.62-.618s-.62.225-.62.619zM21.5 21.775H2.491l9.404-18.96 9.604 18.96z"
      ></path>
    </svg>
  );
};

AlertRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlertRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlertRegular;
