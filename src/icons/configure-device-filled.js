import React from 'react';
import PropTypes from 'prop-types';

const ConfigureDeviceFilled = props => {
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
        d="M10.483 2h7.185c2.157 0 3.25 1.106 3.247 3.291v13.11c0 2.215-1.062 3.29-3.25 3.29H10.48c-2.187 0-3.249-1.075-3.249-3.29v-3.236a.841.841 0 01-.804-.84v-.53a2.861 2.861 0 01-.221-.07l-.356.356a.84.84 0 01-1.188 0l-.733-.73a.84.84 0 010-1.189l.355-.355a5.11 5.11 0 01-.07-.222H3.69a.84.84 0 01-.84-.84V9.71a.84.84 0 01.84-.84h.527c.02-.076.045-.15.07-.222l-.356-.356a.84.84 0 010-1.187l.734-.731a.84.84 0 011.188 0l.356.355a5.11 5.11 0 01.221-.07v-.524a.837.837 0 01.804-.84v-.003c0-1.106.26-1.91.795-2.46C8.573 2.272 9.377 2 10.483 2zm.185 8.748h1.216V9.714h-1.216c-.05-.493-.182-.907-.386-1.243l.773-.774-.732-.73-.77.77c-.344-.208-.762-.334-1.243-.387V6.134H7.273V7.35c-.484.05-.899.18-1.244.387l-.77-.77-.734.73.768.77c-.202.337-.334.751-.387 1.244H3.69v1.037h1.216c.053.493.182.907.387 1.244l-.77.77.733.73.77-.77c.345.208.763.334 1.244.387v1.216h1.037v-1.213c.484-.05.899-.18 1.243-.387l.77.77.732-.733-.77-.77c.201-.337.333-.751.386-1.244zm4.132 8.224c-.168.17-.412.252-.715.252-.302 0-.546-.081-.714-.252-.154-.157-.24-.392-.24-.706 0-.655.375-.958.954-.958.58 0 .956.305.956.958 0 .317-.087.55-.241.706zM6.335 10.23c0-.995.532-1.454 1.454-1.454.921 0 1.453.46 1.453 1.454s-.532 1.453-1.453 1.453c-.922 0-1.454-.459-1.454-1.453z"
      ></path>
    </svg>
  );
};

ConfigureDeviceFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ConfigureDeviceFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ConfigureDeviceFilled;
