import React from 'react';
import PropTypes from 'prop-types';

const VideoLight = props => {
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
        d="M21.995 6.691S22.288 3 18.298 3s-12.63.006-12.63.006S5.596 3 5.468 3c-.766 0-3.464.24-3.464 3.669v10.64s-.25 3.674 3.677 3.674h12.621s.12.017.319.017c.896 0 3.378-.307 3.378-3.71L21.995 6.69zM6.243 20.151l-.05-16.313c.775 0 2.339 0 4.152-.002l7.515-.003.051 16.318H6.243zM3.897 4.25c-.689.437-1.039 1.23-1.053 2.348H5.37l-.012-2.76c-.315.008-.924.072-1.462.413zm-.365 15.15c-.652-.69-.697-1.7-.697-1.966h2.57l.009 2.699c-.82-.045-1.458-.285-1.882-.732zm17.625-1.97c-.057 2.163-1.3 2.692-2.408 2.728l-.008-2.727h2.416zm-.663-12.833c.708.757.68 1.88.674 2.004h-2.462l-.008-2.741c.78.064 1.389.304 1.796.737zm-1.765 9.503l.006 2.498h2.43v-2.5c0 .002-2.436.002-2.436.002zm-.023-6.667h2.456l.003 2.501h-2.45l-.009-2.5zm.012 3.334l.008 2.5h2.44v-2.5h-2.448zm-15.88 5.831h2.561l-.008-2.5H2.837v2.5zM5.37 7.434l.008 2.501H2.834v-2.5H5.37zm-2.533 3.334v2.5H5.39l-.009-2.5H2.837zm6.668 4.169L14.593 12 9.505 9.063v5.874zm6.278-2.722a.414.414 0 00-.148-.575L9.297 7.982a.41.41 0 00-.415 0 .42.42 0 00-.208.36v7.318c0 .148.08.285.208.36a.41.41 0 00.415 0l6.338-3.66a.456.456 0 00.148-.145z"
      ></path>
    </svg>
  );
};

VideoLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VideoLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VideoLight;
