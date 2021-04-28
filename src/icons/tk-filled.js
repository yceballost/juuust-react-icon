import React from 'react';
import PropTypes from 'prop-types';

const TkFilled = props => {
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
        d="M2.15 11.996c0-6.443 3.403-9.846 9.84-9.846 6.443 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84zm16.577 4.557a.404.404 0 01-.35.205h-.434a.406.406 0 01-.345-.196l-2.585-4.325-1.028 1.285v2.832c0 .222-.18.404-.404.404h-.383a.403.403 0 01-.404-.404V7.626c0-.221.18-.403.404-.403h.383c.222 0 .404.179.404.403v4.064l3.428-4.316a.405.405 0 01.317-.151h.445c.154 0 .294.09.361.227a.404.404 0 01-.047.425l-2.695 3.404 2.93 4.865a.41.41 0 01.003.41zm-6.728-8.49a.401.401 0 01-.392.314H9.228v7.98c0 .221-.179.404-.403.404h-.38a.402.402 0 01-.404-.404v-7.98H5.609a.403.403 0 01-.403-.404V7.63c0-.221.18-.403.403-.403h6.073a.404.404 0 01.392.49L12 8.063z"
      ></path>
    </svg>
  );
};

TkFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TkFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TkFilled;
