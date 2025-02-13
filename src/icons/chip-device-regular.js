import React from 'react';
import PropTypes from 'prop-types';

const ChipDeviceRegular = props => {
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
        d="M14.115 21.692H6.93c-2.188 0-3.25-1.076-3.25-3.291V5.29C3.68 3.106 4.774 2 6.93 2h7.185c1.106 0 1.91.272 2.454.832.535.549.795 1.353.795 2.46v1.22h1.706c.695 0 1.143.449 1.143 1.143v7.017c-.003.692-.451 1.14-1.143 1.14h-1.706v2.589c0 2.215-1.064 3.29-3.25 3.29zm2.129-16.4v1.22h-.278c-.09 0-.179.031-.252.085L13.53 8.23a.418.418 0 00-.168.336v6.103c0 .695.448 1.143 1.143 1.143h1.74v2.589c0 .806-.157 1.36-.48 1.686-.321.325-.86.484-1.65.484H6.93c-.79 0-1.328-.156-1.65-.484-.322-.328-.479-.88-.479-1.686V5.29c0-1.563.597-2.17 2.129-2.17h7.185c.79 0 1.333.165 1.652.492.32.328.477.88.477 1.678zm-5.731 12.016c-.577 0-.956.305-.956.958 0 .314.087.546.241.706.168.17.412.252.715.252.302 0 .546-.081.714-.252.154-.157.24-.392.24-.706-.002-.655-.377-.958-.954-.958zm3.689-2.639V8.776l1.904-1.423h2.964c.235 0 .302.067.302.302v7.014c0 .236-.067.303-.302.303h-4.566c-.235 0-.302-.067-.302-.303zm4.283-.375h-3.376a.28.28 0 01-.28-.28v-3.543a.28.28 0 01.28-.28h3.376a.28.28 0 01.28.28v3.543a.28.28 0 01-.28.28zm-.28-1.123v.563h-.57v-.563h.57zm0-.56H15.39v-.737H18.203v.737zm0-1.297h-.57v-.563h.57v.563zm-1.13 0v-.563h-.562v.563h.563zm-1.123 0v-.563h-.563v.563h.563zm-.56 1.857v.563h.56v-.563h-.56zm1.12 0v.563h.564v-.563h-.563z"
      ></path>
    </svg>
  );
};

ChipDeviceRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChipDeviceRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChipDeviceRegular;
