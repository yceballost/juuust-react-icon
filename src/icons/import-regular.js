import React from 'react';
import PropTypes from 'prop-types';

const ImportRegular = props => {
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
        d="M5.585 10.801l5.72 5.728c.16.157.373.247.6.247a.869.869 0 00.596-.247l5.647-5.655a.152.152 0 01.01-.008c.004-.005.01-.009.013-.014a.844.844 0 00-1.216-1.171l-4.207 4.213V2.843a.844.844 0 00-1.69 0v11.05l-4.28-4.286A.844.844 0 005.586 10.8zm16.101 5.955a.844.844 0 00-.843-.843.838.838 0 00-.84.843V20H3.689v-3.244a.846.846 0 00-1.689 0v4.087c0 .465.378.843.843.843h18a.844.844 0 00.843-.843v-4.087z"
      ></path>
    </svg>
  );
};

ImportRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ImportRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ImportRegular;
