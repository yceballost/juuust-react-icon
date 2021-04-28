import React from 'react';
import PropTypes from 'prop-types';

const CloudFilled = props => {
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
        d="M16.623 19.056H6.203a4.06 4.06 0 01-4.053-4.054c0-.904.314-1.77.908-2.504a4.242 4.242 0 012.044-1.395c.054-1.627.628-3.11 1.633-4.19 1.073-1.157 2.58-1.793 4.238-1.793a6.224 6.224 0 015.594 3.51h.06a5.22 5.22 0 015.215 5.215c0 2.877-2.345 5.21-5.219 5.21z"
      ></path>
    </svg>
  );
};

CloudFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudFilled;
