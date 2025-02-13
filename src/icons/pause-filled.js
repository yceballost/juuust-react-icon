import React from 'react';
import PropTypes from 'prop-types';

const PauseFilled = props => {
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
        d="M19.208 4.583c-1.67-1.608-4.098-2.423-7.222-2.423-3.123 0-5.551.815-7.218 2.426-1.731 1.67-2.608 4.162-2.608 7.409 0 3.246.877 5.736 2.608 7.406 1.667 1.608 4.095 2.423 7.218 2.423 3.124 0 5.552-.815 7.222-2.423 1.73-1.67 2.61-4.16 2.61-7.406 0-3.247-.88-5.743-2.61-7.412zM9.782 15.804c0 .308-.238.56-.532.56-.294 0-.533-.252-.533-.56V8.157c0-.308.239-.56.533-.56.294 0 .532.252.532.56v7.647zm4.96.569c.292 0 .53-.252.53-.56V8.166c0-.309-.238-.56-.53-.56-.29 0-.529.251-.529.56v7.647c0 .308.238.56.53.56z"
      ></path>
    </svg>
  );
};

PauseFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PauseFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PauseFilled;
