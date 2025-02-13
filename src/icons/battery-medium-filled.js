import React from 'react';
import PropTypes from 'prop-types';

const BatteryMediumFilled = props => {
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
        d="M16.928 5.157c.589.583.874 1.392.874 2.482v10.86c0 1.098-.288 1.913-.882 2.493-.588.574-1.412.854-2.515.854H8.898c-1.104 0-1.927-.28-2.516-.854-.593-.583-.882-1.398-.882-2.496V7.64c0-1.073.286-1.88.874-2.465.591-.588 1.409-.877 2.493-.882v-.446c0-.515.151-.93.454-1.23.302-.302.725-.456 1.255-.456h2.148c.532 0 .955.151 1.258.451.3.3.454.714.454 1.235v.446c1.092.005 1.91.288 2.492.865zm-6.8-1.31c0-.124.016-.284.09-.356.072-.073.234-.087.36-.087h2.149c.104 0 .288.01.361.084.076.073.087.255.087.358v.446h-3.048v-.446zm6.414 3.792v10.86c0 .748-.165 1.277-.51 1.608-.339.333-.874.493-1.627.493h-5.51c-.754 0-1.286-.16-1.625-.493-.344-.334-.51-.863-.51-1.61V7.638c0-.728.169-1.25.513-1.591.347-.347.88-.515 1.625-.515h5.507c.756 0 1.288.165 1.63.5.342.34.507.864.507 1.606zm-.748 4.97a.626.626 0 00-.63-.623H8.14c-.347 0-.63.28-.63.622v5.266c0 1.219 1.006 2.207 2.241 2.207h3.801c1.236 0 2.241-.988 2.241-2.207v-5.266z"
      ></path>
    </svg>
  );
};

BatteryMediumFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryMediumFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryMediumFilled;
