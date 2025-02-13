import React from 'react';
import PropTypes from 'prop-types';

const BatteryFullFilled = props => {
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
        d="M16.928 5.157c.589.583.874 1.392.874 2.482v10.86c0 1.098-.288 1.913-.882 2.493-.588.577-1.412.854-2.515.854H8.898c-1.104 0-1.927-.28-2.516-.854-.593-.58-.882-1.395-.882-2.496V7.64c0-1.07.286-1.877.874-2.465.591-.588 1.409-.877 2.493-.882v-.449c0-.515.151-.93.454-1.226.302-.303.725-.457 1.255-.457h2.148c.532 0 .955.151 1.258.451.3.297.45.714.45 1.235v.448c1.096.003 1.914.286 2.496.863zm-6.8-1.31c0-.124.016-.284.09-.356.072-.073.234-.087.36-.09h2.149c.104 0 .291.011.364.084.073.073.084.255.084.358v.446h-3.048v-.443zm6.414 3.792v10.86c0 .75-.165 1.277-.507 1.613-.339.33-.874.493-1.627.493h-5.51c-.757 0-1.289-.16-1.628-.493-.344-.333-.51-.86-.51-1.61V7.642c0-.729.169-1.25.513-1.591.347-.348.88-.516 1.625-.516h5.507c.756 0 1.288.163 1.63.502.342.336.507.86.507 1.602zm-.748-.496a.628.628 0 00-.63-.622H8.139c-.348 0-.63.28-.63.622v10.731c0 1.219 1.005 2.207 2.24 2.207h3.804c1.236 0 2.241-.988 2.241-2.207V7.144z"
      ></path>
    </svg>
  );
};

BatteryFullFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryFullFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryFullFilled;
