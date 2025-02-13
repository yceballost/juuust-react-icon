import React from 'react';
import PropTypes from 'prop-types';

const LayersLight = props => {
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
        d="M21.294 11.14a1.016 1.016 0 01-.003 1.804l-1.6.815 1.603.824a1.02 1.02 0 01-.003 1.81l-8.916 4.543a.983.983 0 01-.91-.003l-8.763-4.544a1.017 1.017 0 01-.002-1.8l1.58-.827-1.578-.818a1.017 1.017 0 01-.002-1.801l1.58-.827L2.701 9.5A1.017 1.017 0 012.7 7.697l8.762-4.582a1.002 1.002 0 01.916-.006l8.916 4.583a1.02 1.02 0 01-.003 1.81l-1.6.814 1.603.824zm-9.37-7.126l8.916 4.583-8.916 4.546-8.765-4.546 8.765-4.583zm-8.765 8.028l8.765 4.543 8.916-4.543-2.258-1.162-6.207 3.162a.983.983 0 01-.91-.003l-6.09-3.157-2.216 1.16zm8.765 7.989l8.916-4.544-2.258-1.16-6.207 3.166c-.14.07-.297.106-.451.106a.985.985 0 01-.46-.112l-6.09-3.16-2.215 1.16 8.765 4.544z"
      ></path>
    </svg>
  );
};

LayersLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LayersLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LayersLight;
