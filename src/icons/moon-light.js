import React from 'react';
import PropTypes from 'prop-types';

const MoonLight = props => {
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
        d="M20.771 16.294a.423.423 0 01.493.055c.135.121.177.317.098.48-2.1 4.532-7.028 4.963-8.49 4.988-.258.009-.577.009-.874.009-8.994-.152-9.448-8.244-9.448-9.863 0-8.992 7.18-9.779 9.38-9.807l.897.009c.603.014 1.202.078 1.796.187a.422.422 0 01.344.406.42.42 0 01-.333.415c-2.342.499-5.132 2.11-5.132 6.941 0 6.55 5.23 7.143 6.832 7.168.224 0 .47 0 .673-.008.798-.02 2.336-.171 3.764-.98zm-8.764 4.7c.28 0 .59 0 .845-.009 1.213-.022 5.003-.341 7.121-3.414a9.577 9.577 0 01-2.944.538c-.204.008-.462.008-.703.008-1.286-.02-7.667-.501-7.667-8.003 0-4.201 1.992-6.182 3.905-7.115l-.63-.005c-2 .025-8.544.745-8.544 8.972 0 8.243 6.594 8.994 8.617 9.028z"
      ></path>
    </svg>
  );
};

MoonLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoonLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoonLight;
