import React from 'react';
import PropTypes from 'prop-types';

const BatteryLowRegular = props => {
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
        d="M16.931 5.157c.589.583.874 1.392.874 2.482v10.86c0 1.098-.288 1.913-.882 2.493-.588.574-1.412.854-2.515.854h-5.51c-1.104 0-1.927-.28-2.516-.854-.593-.58-.882-1.398-.882-2.493V7.639c0-1.07.286-1.877.874-2.465.591-.588 1.409-.877 2.493-.882v-.446c0-.515.154-.93.454-1.23.305-.302.728-.456 1.255-.456h2.148c.535 0 .958.151 1.258.451.3.297.45.711.45 1.232v.446c1.099.008 1.917.291 2.5.868zm-6.798-1.31c0-.121.014-.284.087-.354.073-.075.235-.09.364-.087h2.149c.103 0 .288.009.364.085.072.072.084.254.084.355v.446h-3.048v-.446zm6.412 3.792v10.86c0 .748-.165 1.277-.507 1.613-.342.33-.874.493-1.628.493H8.9c-.753 0-1.288-.16-1.627-.493-.344-.333-.51-.862-.51-1.61V7.642c0-.728.166-1.25.51-1.591.347-.348.88-.516 1.625-.516h5.51c.756 0 1.288.163 1.63.502.342.336.507.86.507 1.602zm-.748 9.941a.626.626 0 00-.63-.622H8.144c-.347 0-.63.28-.63.622v.294c0 1.219.941 2.21 2.095 2.21h4.093c1.154 0 2.095-.991 2.095-2.21v-.294z"
      ></path>
    </svg>
  );
};

BatteryLowRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryLowRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryLowRegular;
