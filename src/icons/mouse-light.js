import React from 'react';
import PropTypes from 'prop-types';

const MouseLight = props => {
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
        d="M12.26 6.535v-.65c0-.003-.006-.362-.185-.71-.224-.43-.628-.649-1.193-.649H8.907c-1.804 0-2.97-.818-2.97-2.087 0-.157.127-.283.283-.283.157 0 .283.126.283.283 0 .446.202.81.597 1.079.429.29 1.053.445 1.807.445h1.975c1 0 1.479.53 1.705.975.236.465.239.927.239.947v.651c3.4.107 5.195 1.979 5.195 5.433v4.437c0 1.873-.425 3.215-1.302 4.098-.9.901-2.272 1.338-4.205 1.338-3.602 0-5.506-1.879-5.506-5.436v-3.35a.275.275 0 010-.079v-1.008c0-3.473 1.814-5.347 5.252-5.434zm-4.69 6.801v3.072c0 3.233 1.664 4.871 4.944 4.871 1.776 0 3.02-.383 3.805-1.173.767-.773 1.14-1.983 1.14-3.7v-3.07c-1.615.21-3.26.313-4.891.313h-.112c-1.629 0-3.27-.106-4.885-.313zm9.889-.568a37.9 37.9 0 01-4.894.318h-.056a38.29 38.29 0 01-4.938-.317v-.8c0-3.233 1.663-4.872 4.944-4.872 3.277 0 4.94 1.64 4.944 4.872v.799zm-5.227-1.04c0 .156.126.283.283.283.154 0 .28-.127.282-.283V8.767a.282.282 0 00-.283-.283.282.282 0 00-.282.283v2.96z"
      ></path>
    </svg>
  );
};

MouseLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MouseLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MouseLight;
