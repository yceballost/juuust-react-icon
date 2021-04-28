import React from 'react';
import PropTypes from 'prop-types';

const TimeLight = props => {
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
        d="M11.992 2.15c6.22 0 9.848 3.14 9.848 9.848 0 6.707-3.628 9.842-9.848 9.842-6.22 0-9.842-3.135-9.842-9.842 0-6.707 3.623-9.848 9.842-9.848zm0 18.869c5.99 0 9.027-3.034 9.027-9.021 0-5.99-3.037-9.027-9.027-9.027-5.987 0-9.021 3.037-9.021 9.027 0 5.987 3.034 9.021 9.021 9.021zm3.323-6.012l-2.908-2.911-.006-3.93a.41.41 0 00-.818 0v4.1c0 .11.045.214.12.292l3.032 3.029c.157.154.41.154.569 0a.408.408 0 00.011-.58z"
      ></path>
    </svg>
  );
};

TimeLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TimeLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TimeLight;
