import React from 'react';
import PropTypes from 'prop-types';

const LayersFilled = props => {
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
        d="M20.798 10.332c.544.328.888.91.888 1.552 0 .641-.347 1.218-.888 1.543.544.33.888.91.888 1.555 0 .686-.386 1.314-1 1.622l-8.092 4.087a1.814 1.814 0 01-1.65-.006L2.992 16.6a1.812 1.812 0 01-.104-3.17 1.82 1.82 0 01-.885-1.547 1.81 1.81 0 01.885-1.552 1.812 1.812 0 01-.885-1.543c0-.684.378-1.309.983-1.622l7.952-4.12A1.813 1.813 0 0112.6 3.04l8.093 4.12a1.808 1.808 0 01.106 3.17zm-.932-1.55l-8.093-4.12-7.952 4.12 7.952 4.085 8.093-4.084zM3.82 14.98l7.952 4.087 8.095-4.087-1.045-.532-6.23 3.145a1.794 1.794 0 01-.817.197c-.286 0-.572-.07-.832-.202L4.84 14.452l-1.02.527zm0-3.098l1.02-.527 6.103 3.138a1.813 1.813 0 001.65.005l6.23-3.145 1.044.532-8.092 4.087-7.955-4.09z"
      ></path>
    </svg>
  );
};

LayersFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LayersFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LayersFilled;
