import React from 'react';
import PropTypes from 'prop-types';

const StormLight = props => {
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
        d="M11.058 2.15c.824 0 4.909.188 6.086 3.861 1.418.11 4.699.83 4.696 5.117 0 4.912-4.31 5.161-5.173 5.161l-1.852.011-5.158 5.414a.42.42 0 01-.297.126.414.414 0 01-.384-.563l1.793-4.82-.594-.134-.01.003c-.008.002-.017.005-.026.005l-3.76.017c-2.043 0-4.229-1.118-4.229-4.26 0-2.566 1.451-3.566 2.502-3.953C4.764 2.441 10 2.15 11.058 2.15zm5.61 13.31l-1.054.005.367-.386a.418.418 0 00-.205-.693l-3.127-.706 1.81-4.721a.418.418 0 00-.165-.504.411.411 0 00-.521.07l-6.067 6.598a.417.417 0 00-.092.39l-1.236.005c-1.022 0-3.404-.333-3.404-3.426 0-1.738.742-2.833 2.208-3.254.176-.05.3-.215.3-.4l-.006-.115c0-4.954 4.273-5.34 5.582-5.34.742 0 4.486.17 5.377 3.535.048.18.204.303.387.309 1.26.036 4.2.526 4.2 4.303-.003 4.019-3.332 4.33-4.355 4.33zm-4.96.846a.424.424 0 00-.023-.345.407.407 0 00-.271-.207l-2.618-.594 4.12-4.483-1.208 3.152a.412.412 0 00.02.345.41.41 0 00.271.21l2.878.65-4.433 4.651 1.264-3.38z"
      ></path>
    </svg>
  );
};

StormLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StormLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StormLight;
