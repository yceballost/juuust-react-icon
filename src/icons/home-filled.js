import React from 'react';
import PropTypes from 'prop-types';

const HomeFilled = props => {
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
      <path d="M21.263 10.555L13.005 2.44c-.596-.586-1.725-.586-2.324 0l-8.258 8.117a1.326 1.326 0 00-.311 1.502c.24.552.818.907 1.47.907h.611v7.283c0 .793.709 1.437 1.583 1.437h3.11c.229.006.422-.18.425-.409v-4.044h5.112v4.044a.42.42 0 00.426.412h2.938c.874 0 1.583-.644 1.583-1.437V12.97h.728c.653 0 1.232-.356 1.47-.907.23-.521.113-1.098-.305-1.507z"></path>
    </svg>
  );
};

HomeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HomeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HomeFilled;
