import React from 'react';
import PropTypes from 'prop-types';

const MusicLight = props => {
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
        d="M19.809 4.707a.87.87 0 01.812.86h.003v12.818h-.014c.001.022.004.042.007.062.004.025.007.05.007.078 0 3.093-2.692 3.3-3.232 3.308l-.28.003c-1.563-.022-3.236-.907-3.236-3.328 0-2.42 1.661-3.294 3.216-3.308l.291.003c.863.02 1.748.314 2.378.958V8.127l-9.6-2.56-.01 9.012h-.017c-.174 2.795-2.695 2.997-3.216 3.005a4.86 4.86 0 01-.285 0c-1.56-.022-3.233-.907-3.233-3.328 0-2.42 1.658-3.297 3.216-3.308.049.002.1.002.15.002l.144.001c.857.02 1.742.31 2.372.955V3.013c0-.474.393-.863.877-.863l.112.017 9.538 2.54zm-9.65-1.692l-.003 1.67 9.6 2.557V5.564l-.126-.025-9.47-2.524zM6.82 16.733h.077c.717-.015 2.384-.278 2.384-2.46S7.605 11.817 6.885 11.8c-.084-.003-.18-.003-.266-.003-.71.006-2.359.26-2.359 2.46 0 2.204 1.667 2.467 2.38 2.476h.179zm10.553 4.249l-.255.003c-.714-.009-2.38-.272-2.38-2.477 0-2.198 1.649-2.45 2.358-2.456l.266.003c.72.017 2.398.291 2.398 2.473-.003 2.177-1.67 2.443-2.387 2.454z"
      ></path>
    </svg>
  );
};

MusicLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MusicLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MusicLight;
