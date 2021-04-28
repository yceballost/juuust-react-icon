import React from 'react';
import PropTypes from 'prop-types';

const BatteryChargingFilled = props => {
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
        d="M17.604 5c.588.583.874 1.392.874 2.479v10.86c0 1.098-.289 1.913-.883 2.493-.588.574-1.412.854-2.515.854H9.573c-1.104 0-1.927-.28-2.516-.854-.593-.583-.882-1.398-.882-2.496V7.48c0-1.073.286-1.88.874-2.465.591-.588 1.409-.877 2.493-.882v-.446c0-.515.151-.93.454-1.23C10.3 2.155 10.724 2 11.25 2h2.148c.535 0 .958.151 1.258.451.3.297.45.714.45 1.235v.446c1.096.005 1.914.288 2.497.868zm-6.799-1.314c0-.12.014-.283.087-.353.073-.075.235-.09.364-.09h2.149c.103 0 .288.012.364.085.073.073.084.255.084.358v.446h-3.048v-.446zm6.412 3.793v10.86c0 .748-.165 1.277-.507 1.61-.339.334-.874.494-1.627.494h-5.51c-.756 0-1.289-.16-1.628-.493-.344-.334-.51-.863-.51-1.611V7.482c0-.729.169-1.25.513-1.591.348-.348.88-.516 1.625-.516h5.507c.756 0 1.288.163 1.63.502.342.336.507.86.507 1.602zm-1.644 3.569a.543.543 0 00-.51-.208l-2.31.32.047-3.737a.543.543 0 00-.437-.532.546.546 0 00-.617.322L9.01 13.762a.534.534 0 00.073.535.53.53 0 00.507.204l2.09-.285-.006 3.804a.547.547 0 001.048.216l2.915-6.648a.524.524 0 00-.064-.54z"
      ></path>
    </svg>
  );
};

BatteryChargingFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryChargingFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryChargingFilled;
