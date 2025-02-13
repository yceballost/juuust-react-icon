import React from 'react';
import PropTypes from 'prop-types';

const BatteryMediumRegular = props => {
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
        d="M17.802 7.547c0-1.056-.274-1.835-.84-2.387-.568-.555-1.372-.824-2.46-.824h-.187V3.67c0-.474-.134-.849-.403-1.112-.27-.264-.656-.398-1.146-.398H10.54c-.49 0-.877.137-1.148.403-.27.266-.406.639-.406 1.107v.67H8.8c-1.079 0-1.88.274-2.457.84-.566.557-.843 1.333-.843 2.37v11.092c0 1.061.277 1.846.849 2.398.566.543 1.367.81 2.45.81h5.704c1.084 0 1.885-.267 2.45-.813.572-.552.85-1.336.85-2.398V7.547zM9.856 3.67v.666h3.59V3.67c0-.364-.112-.478-.15-.515-.037-.037-.152-.15-.53-.15H10.54c-.372 0-.487.116-.526.155-.042.036-.157.151-.157.51zm7.075 14.969V7.547c0-.818-.193-1.404-.588-1.788-.395-.386-.997-.574-1.84-.574H8.8c-.835 0-1.434.193-1.838.588-.398.393-.59.97-.59 1.774v11.092c0 .826.192 1.412.59 1.796.395.38.995.565 1.838.565h5.703c.843 0 1.442-.184 1.837-.566.398-.383.591-.972.591-1.795zM15.211 18v-4.955H8.088V18c0 .661.552 1.2 1.233 1.2h4.66c.679 0 1.23-.539 1.23-1.2zm.872-5.378a.43.43 0 00-.437-.423H7.65a.429.429 0 00-.434.423V18c0 1.13.944 2.045 2.104 2.045h4.658c1.16 0 2.104-.916 2.104-2.045v-5.378z"
      ></path>
    </svg>
  );
};

BatteryMediumRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryMediumRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryMediumRegular;
