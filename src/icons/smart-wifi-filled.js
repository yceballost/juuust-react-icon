import React from 'react';
import PropTypes from 'prop-types';

const SmartWifiFilled = props => {
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
        d="M21.73 10.324c.213-.51.1-1.079-.291-1.48l-6.118-6.27c-.55-.567-1.586-.564-2.137 0L7.108 8.796h-2.39c-.826 0-1.448.224-1.901.687-.449.456-.667 1.078-.667 1.899v7.868c0 .84.221 1.468.672 1.919.448.445 1.07.664 1.9.664h3.913c.829 0 1.45-.216 1.896-.664.457-.451.675-1.079.675-1.919v-1.308h7.451c.807 0 1.462-.63 1.462-1.403v-5.334h.25a1.46 1.46 0 001.36-.882zM9.993 19.25v-7.868c0-.493-.104-.838-.314-1.05-.21-.214-.551-.317-1.044-.317H4.72c-.484 0-.826.106-1.042.325-.212.215-.316.557-.316 1.039v7.868c0 .499.104.843.314 1.053.21.21.551.311 1.044.311h3.914c.493 0 .834-.1 1.042-.31.212-.208.316-.552.316-1.05zm-3.316-.812c-.415 0-.664.252-.664.67 0 .204.056.366.17.487.118.12.286.182.49.182a.669.669 0 00.491-.182c.115-.118.174-.283.174-.488.002-.42-.244-.67-.661-.67zm7.776-6.21h-.062c-.485.003-.975.319-.975 1.014 0 .694.493 1.01 1.048 1.016.484-.01.972-.327.972-1.014 0-.686-.49-1.002-.983-1.016zM10.629 8.88c.053-.058 1.347-1.465 3.76-1.49.075-.005 2.321-.12 3.834 1.583a.407.407 0 01-.031.574l-.003.003a.4.4 0 01-.568-.034c-1.225-1.376-3.12-1.313-3.2-1.31h-.002c-2.067.022-3.146 1.173-3.19 1.223l-.003.003a.407.407 0 01-.597-.552zm3.765.12c-1.798.02-2.86 1.159-2.933 1.236l-.003.003a.405.405 0 00.602.543h.002c.036-.039.908-.955 2.354-.969.02-.011 1.482-.053 2.375.953a.404.404 0 00.572.03.407.407 0 00.03-.574C16.282 8.971 14.566 9 14.404 9.002h-.01zm-1.955 2.48a2.82 2.82 0 011.966-.832c.03-.003 1.235-.045 2.014.823a.41.41 0 01-.034.575.407.407 0 01-.571-.034c-.513-.574-1.378-.563-1.387-.552a2.004 2.004 0 00-1.386.566.407.407 0 01-.603-.546z"
      ></path>
    </svg>
  );
};

SmartWifiFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmartWifiFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SmartWifiFilled;
