import React from 'react';
import PropTypes from 'prop-types';

const AlarmLightCrossLight = props => {
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
        d="M11.776 4.094a.419.419 0 10.837.003V2.567a.419.419 0 00-.837 0v1.526zm7.17 13.904c.655 0 1.226.467 1.226 1.002v2.148c0 .532-.574 1.002-1.226 1.002H5.442c-.666 0-1.226-.458-1.226-1.002V19c0-.544.563-1.002 1.226-1.002h.367v-6.153c0-4.197 2.208-6.414 6.382-6.414 4.177 0 6.388 2.217 6.388 6.414v6.15h.367v.003zm-12.3-.026v-6.124c0-3.702 1.863-5.574 5.548-5.574 3.68 0 5.548 1.875 5.548 5.574v6.124H6.646zm12.693 3.153c-.023.057-.197.186-.396.186h-13.5c-.217 0-.377-.126-.39-.163v-2.14c.022-.05.179-.17.39-.17h13.503c.2 0 .37.128.39.162l.003 2.125zM4.509 9.63c0 .23-.188.418-.418.42H2.568a.419.419 0 01-.418-.417v-.003a.42.42 0 01.418-.422h1.52a.42.42 0 01.42.422zm17.641.025a.419.419 0 00-.418-.418l-1.523-.006c-.23 0-.418.19-.418.421v.003c0 .23.188.419.418.419h1.523c.23 0 .418-.188.418-.419zM5.735 5.74L4.66 4.657a.424.424 0 010-.595.417.417 0 01.589-.002l.002.002 1.076 1.082a.425.425 0 01-.006.597.42.42 0 01-.586-.003zm11.382-.422a.42.42 0 00.717.296l1.075-1.081a.424.424 0 000-.595l-.003-.003a.417.417 0 00-.589.003L17.242 5.02a.425.425 0 00-.125.298zm-2.393 7.47v-.97h-1.656a.419.419 0 01-.419-.418V9.734h-.97v1.665a.42.42 0 01-.415.42H9.608v.974h1.656c.23 0 .418.188.418.418v1.665h.97v-1.665a.42.42 0 01.418-.42l1.654-.004zm.836-1.138c0-.358-.341-.671-.734-.671h-1.34V9.631c0-.393-.313-.738-.669-.738h-1.303c-.356 0-.669.345-.669.738v1.348h-1.34c-.398 0-.734.308-.734.672v1.309c0 .364.336.672.734.672h1.34v1.346c0 .398.308.737.67.737h1.302c.362 0 .669-.336.669-.737v-1.35h1.34c.39 0 .734-.312.734-.67v-1.31z"
      ></path>
    </svg>
  );
};

AlarmLightCrossLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlarmLightCrossLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlarmLightCrossLight;
