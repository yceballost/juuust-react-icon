import React from 'react';
import PropTypes from 'prop-types';

const GarajeFilled = props => {
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
        d="M21.588 12.042c.207-.51.084-1.078-.325-1.479L12.99 2.457c-.62-.608-1.673-.608-2.292 0l-8.274 8.106c-.409.4-.532.97-.322 1.482.232.566.81.933 1.47.933h.625v7.274c0 .79.703 1.434 1.569 1.434h.857v-9.033c0-.342.277-.617.616-.617h9.18c.341 0 .616.278.616.617v9.03h.77c.866 0 1.569-.641 1.569-1.434v-7.274h.745c.66 0 1.238-.367 1.47-.933zM7.854 15.297v-2.053h7.947v2.053H7.854zm0 1.204v2.054h7.947V16.5H7.854zm0 3.135v2.05h7.95v-2.05h-7.95z"
      ></path>
    </svg>
  );
};

GarajeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GarajeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default GarajeFilled;
