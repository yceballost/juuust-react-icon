import React from 'react';
import PropTypes from 'prop-types';

const ShieldLight = props => {
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
        d="M12.101 21.647a.44.44 0 00.359 0c.3-.143 7.361-3.54 7.977-7.126.463-2.72.457-8.95.457-9.485v-.028a.438.438 0 00-.51-.403c-1.75.272-2.691-.358-3.783-1.089H16.6c-1.06-.71-2.26-1.513-4.314-1.516h-.008c-2.054 0-3.255.804-4.317 1.515l-.007.005c-1.092.73-2.036 1.359-3.772 1.082a.414.414 0 00-.515.406v.032c0 .558-.008 6.768.465 9.481.619 3.583 7.672 6.983 7.97 7.126zM4.95 14.375c-.398-2.283-.446-7.325-.451-8.89 1.784.148 2.868-.572 3.919-1.272 1.01-.678 2.056-1.375 3.86-1.375h.005c1.801.002 2.849.7 3.857 1.375l.013.008c1.035.69 2.098 1.397 3.909 1.255-.006 1.558-.053 6.61-.443 8.9-.495 2.873-6.249 5.879-7.339 6.425-1.09-.543-6.834-3.549-7.33-6.426z"
      ></path>
    </svg>
  );
};

ShieldLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldLight;
