import React from 'react';
import PropTypes from 'prop-types';

const BatteryRegular = props => {
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
        d="M15.2 4.137c1.045.023 1.835.3 2.404.86.588.583.874 1.395.88 2.482v10.86c0 1.095-.29 1.91-.883 2.493-.588.574-1.412.854-2.516.854h-5.51c-1.103 0-1.927-.28-2.515-.854-.594-.58-.882-1.395-.882-2.493V7.479c0-1.073.286-1.88.874-2.465.596-.594 1.423-.882 2.52-.882h.062v-.446c0-.518.152-.93.454-1.23.303-.302.726-.456 1.255-.456h2.149c.532 0 .955.151 1.254.451.303.3.454.714.454 1.235v.451zm-4.305-.45c0-.124.014-.284.087-.354.073-.073.238-.09.361-.09h2.149c.103 0 .29.012.36.085.077.073.088.255.088.358v.446h-3.045v-.446zm6.322 14.652c0 .748-.165 1.277-.51 1.61-.341.334-.874.494-1.627.494H9.573c-.754 0-1.289-.16-1.628-.493-.344-.334-.51-.863-.51-1.611V7.479c0-.728.166-1.25.513-1.591.348-.347.88-.515 1.625-.515h5.51c.756 0 1.288.165 1.63.5.342.34.507.864.507 1.606l-.003 10.86z"
      ></path>
    </svg>
  );
};

BatteryRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryRegular;
