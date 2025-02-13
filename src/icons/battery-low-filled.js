import React from 'react';
import PropTypes from 'prop-types';

const BatteryLowFilled = props => {
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
        d="M17.802 7.547c0-1.056-.274-1.835-.84-2.387-.569-.555-1.372-.824-2.46-.824h-.184V3.67c0-.482-.132-.846-.406-1.112-.27-.264-.656-.398-1.146-.398H10.54c-.49 0-.877.137-1.145.403-.27.264-.407.636-.407 1.107v.664H8.8c-1.079 0-1.88.274-2.457.84-.566.557-.843 1.333-.843 2.37v11.098c0 1.061.277 1.846.849 2.395.566.546 1.367.812 2.45.812h5.704c1.084 0 1.888-.266 2.45-.812.572-.552.85-1.336.85-2.398V7.547zM9.856 3.67v.666h3.59V3.67c0-.364-.112-.478-.15-.515l-.003-.003c-.041-.039-.157-.146-.527-.146H10.54c-.372 0-.49.115-.526.154-.04.036-.157.151-.157.51zm7.078 14.969V7.544c0-.818-.193-1.404-.588-1.787-.395-.387-.997-.575-1.84-.575H8.8c-.835 0-1.434.194-1.838.589-.398.392-.59.969-.59 1.773v11.092c0 .824.192 1.412.59 1.796.395.38.995.566 1.838.566h5.703c.843 0 1.442-.185 1.837-.566.398-.381.594-.97.594-1.793zm-2.952.56c.636 0 1.162-.47 1.224-1.076H8.094A1.22 1.22 0 009.318 19.2h4.664zm2.1-1.498a.429.429 0 00-.434-.423H7.651a.43.43 0 00-.434.423v.3c0 1.128.944 2.044 2.104 2.044h4.66c1.16 0 2.102-.916 2.102-2.045v-.3z"
      ></path>
    </svg>
  );
};

BatteryLowFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryLowFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryLowFilled;
