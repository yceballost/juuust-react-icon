import React from 'react';
import PropTypes from 'prop-types';

const AlarmLightLight = props => {
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
        d="M11.587 3.139a.461.461 0 10.92.003V1.46a.461.461 0 00-.92 0V3.14zm7.885 15.293c.72 0 1.35.513 1.35 1.102v2.364c0 .585-.633 1.102-1.35 1.102H4.622c-.733 0-1.35-.504-1.35-1.102v-2.364c0-.598.62-1.102 1.35-1.102h.404v-6.767c0-4.615 2.429-7.058 7.021-7.058 4.595 0 7.024 2.44 7.024 7.058v6.763h.401v.003zm-13.53-.025v-6.739c0-4.07 2.054-6.134 6.102-6.134 4.05 0 6.104 2.064 6.104 6.134v6.739H5.943zm13.962 3.466c-.022.062-.213.203-.432.203H4.622c-.238 0-.413-.137-.43-.178v-2.355c.026-.056.198-.188.43-.188h14.85c.22 0 .407.141.429.179l.003 2.339zM3.595 9.226c0 .253-.207.46-.46.463H1.46A.464.464 0 011 9.226v-.003c0-.257.207-.464.46-.464h1.672c.253.003.46.21.463.467zM23 9.254a.461.461 0 00-.46-.46l-1.675-.007c-.253 0-.46.21-.46.464v.003c0 .254.207.46.46.46h1.675c.253 0 .46-.206.46-.46zM4.941 4.945L3.758 3.76a.467.467 0 010-.655.459.459 0 01.648-.003l.003.003 1.183 1.187a.468.468 0 01-.006.657.459.459 0 01-.645-.003zm12.518-.463a.464.464 0 00.79.326l1.182-1.19a.467.467 0 000-.655l-.003-.003a.46.46 0 00-.648.003l-1.183 1.19a.468.468 0 00-.138.329z"
      ></path>
    </svg>
  );
};

AlarmLightLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlarmLightLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlarmLightLight;
