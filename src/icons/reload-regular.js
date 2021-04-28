import React from 'react';
import PropTypes from 'prop-types';

const ReloadRegular = props => {
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
      <path d="M14.581 8.78c.096.203.3.329.521.326h.034l5.81-.336a.56.56 0 00.534-.516l.353-5.518a.553.553 0 00-.333-.538.59.59 0 00-.636.11l-2.571 2.448a10.112 10.112 0 00-6.21-2.12c-5.48 0-9.933 4.305-9.933 9.599 0 5.294 4.454 9.6 9.93 9.6 4.123 0 7.863-2.51 9.305-6.247a.818.818 0 00-.479-1.054l-.025-.008a.865.865 0 00-1.1.485c-1.194 3.092-4.29 5.17-7.701 5.17-4.532.003-8.219-3.563-8.219-7.946 0-4.384 3.687-7.95 8.219-7.95 1.818 0 3.56.574 4.989 1.63l-2.37 2.25a.534.534 0 00-.118.616z"></path>
    </svg>
  );
};

ReloadRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ReloadRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ReloadRegular;
