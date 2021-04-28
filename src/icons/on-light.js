import React from 'react';
import PropTypes from 'prop-types';

const OnLight = props => {
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
        d="M11.5 2.16h.911c1.577.05 9.434.63 9.434 9.843s-7.826 9.843-9.4 9.843h-.877c-8.958-.115-9.41-8.201-9.41-9.843 0-1.641.452-9.762 9.343-9.843zm.09 18.866h.846c2.028 0 8.588-.821 8.588-9.023s-6.563-8.966-8.63-9.022h-.885c-1.97 0-8.532.753-8.532 9.022s6.563 9.023 8.613 9.023zm-5.327-9.023c0-3.134 1.45-3.798 2.697-3.798 1.238 0 2.748.664 2.748 3.798s-1.476 3.798-2.714 3.798c-1.813 0-2.731-1.28-2.731-3.798zm.901.017c0 2.552.975 2.88 1.796 2.88.826 0 1.787-.303 1.787-2.88s-.95-2.905-1.787-2.905c-.835 0-1.796.353-1.796 2.905zm10.037-3.684H17.5c.162.003.29.14.285.303v6.737a.301.301 0 01-.302.302h-.23a.303.303 0 01-.255-.14l-3.487-5.283v5.11c0 .17-.14.31-.311.31h-.28a.31.31 0 01-.303-.31V8.638c0-.165.135-.303.303-.303h.221c.1 0 .196.048.255.132l3.524 5.289V8.639c0-.157.123-.289.28-.303z"
      ></path>
    </svg>
  );
};

OnLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OnLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OnLight;
