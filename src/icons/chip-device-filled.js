import React from 'react';
import PropTypes from 'prop-types';

const ChipDeviceFilled = props => {
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
        d="M17.364 6.513h1.706c.692 0 1.14.448 1.143 1.142v7.014c0 .695-.448 1.143-1.143 1.143h-1.706v2.589c0 2.215-1.062 3.29-3.25 3.29H6.93c-2.188 0-3.25-1.075-3.25-3.29V5.29C3.68 3.106 4.774 2 6.93 2h7.185c1.106 0 1.91.272 2.454.832.535.549.795 1.353.795 2.46v1.22zm-6.851 12.711c.302 0 .546-.081.714-.252.151-.157.238-.39.24-.706 0-.653-.375-.958-.954-.958-.58 0-.956.303-.956.958 0 .314.087.55.241.706.168.17.412.252.715.252zm8.857-4.555c0 .236-.068.303-.303.303h-4.566c-.235 0-.302-.067-.302-.303V8.776l1.905-1.426h2.963c.235 0 .303.067.303.303v7.016zm-.886-4.479H15.11a.28.28 0 00-.28.28v3.544c0 .154.126.28.28.28h3.376a.28.28 0 00.28-.28v-3.543a.28.28 0 00-.28-.28zm-1.408 2.98v.564h-.564v-.563h.564zm-1.684-1.296v.737h2.812v-.737h-2.812zm1.12-.56v-.563h.564v.563h-.564zm1.124 0h.566l.002-.563h-.568v.563zm-1.684-.563v.563h-.56v-.563h.56zm0 2.42h-.56v.563h.56v-.563zm1.684.563v-.563h.568v.563h-.568z"
      ></path>
    </svg>
  );
};

ChipDeviceFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChipDeviceFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChipDeviceFilled;
