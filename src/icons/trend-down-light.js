import React from 'react';
import PropTypes from 'prop-types';

const TrendDownLight = props => {
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
      <path d="M21.842 14.853v3.68c0 .23-.188.415-.415.412h-3.73a.414.414 0 01-.424-.406v-.006c0-.23.185-.411.423-.411h2.81L14.53 9.836 6.968 13.07a.429.429 0 01-.532-.173L2.212 5.623a.414.414 0 01.154-.566c.002-.003.005-.003.008-.005a.436.436 0 01.577.156l4.036 6.956 7.521-3.219a.416.416 0 01.516.14l5.972 8.275v-2.51c0-.23.185-.412.423-.412a.417.417 0 01.423.415z"></path>
    </svg>
  );
};

TrendDownLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrendDownLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrendDownLight;
