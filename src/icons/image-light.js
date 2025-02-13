import React from 'react';
import PropTypes from 'prop-types';

const ImageLight = props => {
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
        d="M20.416 4.5c.745 0 1.42.583 1.42 1.224v12.317c0 .638-.678 1.224-1.42 1.224H3.567c-.753.002-1.417-.572-1.417-1.224l.003-12.317c0-.653.664-1.224 1.42-1.224h16.843zm.6 13.54V5.728c0-.135-.272-.395-.6-.395H3.57c-.33 0-.596.238-.596.395L2.97 18.043c0 .157.269.395.6.395h16.848c.325-.002.596-.263.596-.397zM5.819 8.862c0-.683.552-1.24 1.23-1.24.678 0 1.23.557 1.23 1.24 0 .684-.552 1.241-1.23 1.241-.678 0-1.23-.554-1.23-1.24zm1.23 2.073c-1.131 0-2.05-.93-2.05-2.07 0-1.14.919-2.07 2.05-2.07 1.132 0 2.05.93 2.05 2.07 0 1.14-.918 2.07-2.05 2.07zm12.555 1.743l-3.247-2.508a.408.408 0 00-.504.006l-3.851 3.09-1.026-.975a.407.407 0 00-.543-.017l-5.277 4.44a.416.416 0 00-.054.582l.003.003c.143.174.4.196.574.05l5-4.2 3.507 3.335.006.006c.165.151.42.143.574-.023a.415.415 0 00-.017-.585l-2.142-2.04 3.507-2.817 2.994 2.31.003.004c.18.137.437.1.571-.079a.42.42 0 00-.078-.582z"
      ></path>
    </svg>
  );
};

ImageLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ImageLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ImageLight;
