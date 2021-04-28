import React from 'react';
import PropTypes from 'prop-types';

const TrendUpLight = props => {
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
      <path d="M21.842 5.412v3.675c0 .23-.193.412-.423.412a.414.414 0 01-.423-.407V6.585l-5.972 8.28a.44.44 0 01-.515.14l-7.53-3.226-4.028 6.958a.446.446 0 01-.582.157.414.414 0 01-.16-.563l4.218-7.28a.427.427 0 01.544-.174l7.554 3.238 5.98-8.289h-2.817a.424.424 0 01-.423-.414.418.418 0 01.423-.412h3.731c.23 0 .423.18.423.412z"></path>
    </svg>
  );
};

TrendUpLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrendUpLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrendUpLight;
