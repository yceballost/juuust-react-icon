import React from 'react';
import PropTypes from 'prop-types';

const TrashCanLight = props => {
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
        d="M21.793 6.783a.41.41 0 00-.384-.434H16.58V4.325c.004-.108.03-.997-.54-1.609-.345-.37-.821-.557-1.426-.557H9.349c-.095-.005-.795-.039-1.349.45-.417.376-.622.942-.622 1.687V6.35H2.541a.41.41 0 000 .818h1.694v11.548c-.005.144-.045 1.361.78 2.24.548.59 1.324.885 2.324.885h9.305c.278 0 1.401-.048 2.21-.835.575-.546.869-1.317.869-2.292V7.167h1.686a.41.41 0 00.384-.384zM8.199 4.296V6.35h7.563V4.293c.002-.082.017-.664-.32-1.022-.187-.205-.459-.294-.826-.294H9.307c-.084-.003-.475-.016-.758.246-.238.213-.353.572-.35 1.073zm10.706 14.417V7.167H5.053V18.74c-.003.114-.03 1.04.563 1.66.387.409.967.622 1.72.622H16.6c.083 0 1.052.016 1.698-.614.404-.384.608-.958.608-1.695zM9.88 17.655a.408.408 0 01-.41-.41v-6.29a.41.41 0 01.819 0v6.29a.408.408 0 01-.41.41zm3.784-.41c0 .228.182.41.409.41a.408.408 0 00.409-.41v-6.29a.41.41 0 00-.818 0v6.29z"
      ></path>
    </svg>
  );
};

TrashCanLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrashCanLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrashCanLight;
