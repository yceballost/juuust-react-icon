import React from 'react';
import PropTypes from 'prop-types';

const TkRegular = props => {
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
        d="M2.15 11.996c0 6.437 3.403 9.84 9.84 9.84 6.443 0 9.846-3.403 9.846-9.84 0-6.443-3.403-9.846-9.846-9.846-6.437 0-9.84 3.403-9.84 9.846zm1.207 0c0-5.731 2.905-8.639 8.633-8.639 5.731 0 8.639 2.908 8.639 8.639 0 5.728-2.908 8.633-8.639 8.633-5.728 0-8.633-2.905-8.633-8.633zm8.325-4.768a.404.404 0 01.392.49L12 8.064a.401.401 0 01-.392.314H9.228v7.98c0 .221-.179.404-.403.404h-.38a.402.402 0 01-.404-.404v-7.98H5.609a.403.403 0 01-.403-.404V7.63c0-.221.18-.403.403-.403h6.073v.002zm7.045 9.325a.398.398 0 00-.006-.406l-2.93-4.865 2.698-3.404a.405.405 0 00.048-.426.406.406 0 00-.365-.226h-.445a.405.405 0 00-.317.15l-3.428 4.317V7.63a.402.402 0 00-.403-.403h-.381a.403.403 0 00-.404.403v8.725c0 .224.18.404.404.404h.38a.403.403 0 00.404-.404v-2.831l1.03-1.286 2.586 4.325c.073.12.202.196.345.196h.434a.404.404 0 00.35-.205z"
      ></path>
    </svg>
  );
};

TkRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TkRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TkRegular;
