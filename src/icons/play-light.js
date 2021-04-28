import React from 'react';
import PropTypes from 'prop-types';

const PlayLight = props => {
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
        d="M11.998 21.838c-6.435 0-9.838-3.4-9.838-9.838 0-6.437 3.4-9.84 9.838-9.84 3.14 0 5.574.812 7.238 2.417C20.96 6.241 21.838 8.74 21.838 12c.003 6.434-3.4 9.838-9.84 9.838zm0-19.118C5.843 2.72 2.72 5.843 2.72 12c0 6.154 3.12 9.278 9.277 9.278 6.16 0 9.28-3.12 9.28-9.278.003-6.16-3.12-9.28-9.28-9.28zM8.956 16.325a.258.258 0 01-.258-.258V7.835a.26.26 0 01.39-.224l7.128 4.115a.26.26 0 010 .448l-7.132 4.118a.26.26 0 01-.128.033zm.26-8.039v7.33l6.347-3.663-6.347-3.667z"
      ></path>
    </svg>
  );
};

PlayLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlayLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlayLight;
