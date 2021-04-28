import React from 'react';
import PropTypes from 'prop-types';

const RoadSignLight = props => {
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
        d="M21.836 11.996c0-6.44-3.403-9.846-9.846-9.846-6.437 0-9.84 3.406-9.84 9.846 0 6.437 3.403 9.84 9.84 9.84 6.443 0 9.846-3.403 9.846-9.84zm-.823 0c0 5.986-3.034 9.02-9.023 9.02-5.983 0-9.02-3.034-9.02-9.02s3.034-9.023 9.02-9.023 9.023 3.034 9.023 9.023zm-7.255.498l2.689-2.599-2.69-2.608v.983c0 .227-.246.463-.47.463H9.248a.142.142 0 00-.1.042.133.133 0 00-.043.1v8.048h2.137v-5.457a.41.41 0 01.41-.409h1.63c.12.009.235.062.319.146a.504.504 0 01.151.317c.006 0 .006.974.006.974zm3.378-3.072l-3.123-3.028a.658.658 0 00-.703-.084.64.64 0 00-.373.582v1.02l-3.689-.003c-.258 0-.499.1-.68.283a.956.956 0 00-.284.68v8.46a.41.41 0 00.41.409h2.963a.41.41 0 00.409-.409v-5.454h.868v1.011c0 .253.149.48.376.586.23.106.498.075.73-.115l3.074-2.975a.642.642 0 00.022-.964z"
      ></path>
    </svg>
  );
};

RoadSignLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RoadSignLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RoadSignLight;
