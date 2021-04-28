import React from 'react';
import PropTypes from 'prop-types';

const DocumentOtherFilled = props => {
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
        d="M19.327 7.916a.62.62 0 01.048.244v12.308c0 .745-.63 1.378-1.387 1.378H5.997c-.734 0-1.387-.641-1.387-1.378l.042-3.3-.042-7.977V3.538c0-.722.661-1.378 1.387-1.378h7.3c.232 0 .453.09.613.252l5.21 5.123a.847.847 0 01.207.381zM13.632 3.83v1.76c0 .666.208 1.215.614 1.613.406.398.98.608 1.666.608h1.768l-4.048-3.98zM11.84 14.362c.518 0 .916.414.916.932 0 .535-.398.942-.908.942a.91.91 0 01-.924-.925v-.017c0-.52.398-.932.916-.932zm4.022.932a.915.915 0 00-.916-.932.913.913 0 00-.916.932v.017a.91.91 0 00.925.925c.51 0 .907-.407.907-.942zm-7.14-.932c.527 0 .924.414.924.932 0 .535-.397.942-.916.942a.908.908 0 01-.916-.925v-.017c0-.52.398-.932.908-.932z"
      ></path>
    </svg>
  );
};

DocumentOtherFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DocumentOtherFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DocumentOtherFilled;
