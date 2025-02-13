import React from 'react';
import PropTypes from 'prop-types';

const WifiLight = props => {
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
        d="M2.293 8.476a.3.3 0 01-.208-.083.28.28 0 010-.402l.02-.02a14.12 14.12 0 014.458-2.9A14.396 14.396 0 0112.046 4c1.889 0 3.723.355 5.452 1.058a14.061 14.061 0 014.415 2.845.28.28 0 01.003.402.303.303 0 01-.416.003 13.445 13.445 0 00-4.23-2.727 13.842 13.842 0 00-5.227-1.014c-1.822 0-3.591.345-5.255 1.028a13.543 13.543 0 00-4.272 2.779l-.018.016a.28.28 0 01-.205.086zm2.382 3.016a.294.294 0 00.413-.003l.011-.01a9.884 9.884 0 013.088-2.014 10.082 10.082 0 013.854-.758c1.321 0 2.603.25 3.814.744a9.794 9.794 0 013.059 1.97.3.3 0 00.416-.003.277.277 0 00-.003-.403 10.411 10.411 0 00-3.245-2.087 10.646 10.646 0 00-4.041-.788c-1.419 0-2.792.27-4.085.804a10.448 10.448 0 00-3.27 2.135l-.014.013a.276.276 0 00.003.4zM7.26 14.59a.301.301 0 00.208.083.278.278 0 00.202-.082 6.169 6.169 0 011.911-1.26 6.368 6.368 0 012.453-.487c.832 0 1.64.16 2.401.471a6.142 6.142 0 011.891 1.212.3.3 0 00.416-.005.277.277 0 00-.005-.402 6.725 6.725 0 00-2.071-1.328 6.901 6.901 0 00-2.63-.515 6.91 6.91 0 00-2.682.534 6.739 6.739 0 00-2.094 1.377.28.28 0 000 .402zm4.74 5.41c-1.282 0-1.989-.683-1.989-1.922 0-1.24.707-1.923 1.989-1.923.623 0 1.11.162 1.452.48.356.33.536.814.536 1.442 0 1.24-.707 1.923-1.988 1.923zm0-3.278c-.957 0-1.402.43-1.402 1.355 0 .926.445 1.356 1.402 1.356.957 0 1.401-.43 1.401-1.355 0-.469-.12-.816-.356-1.036-.228-.212-.578-.32-1.045-.32z"
      ></path>
    </svg>
  );
};

WifiLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WifiLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WifiLight;
