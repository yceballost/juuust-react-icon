import React from 'react';
import PropTypes from 'prop-types';

const DownloadFilled = props => {
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
      <path d="M11.83 21.67a.949.949 0 01-.726-.337l-8.84-9.142c-.012-.012-.02-.023-.032-.034a1.01 1.01 0 01-.128-1.079.958.958 0 01.87-.56h3.934V3.922c0-1.05.854-1.905 1.904-1.905h6.031c1.053 0 1.905.851 1.905 1.905l-.003 6.596h3.96c.376 0 .718.219.875.56.17.353.12.776-.13 1.079-.008.011-.019.022-.03.034l-8.863 9.142a.959.959 0 01-.728.336z"></path>
    </svg>
  );
};

DownloadFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadFilled;
