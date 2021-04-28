import React from 'react';
import PropTypes from 'prop-types';

const ChipSimCardLight = props => {
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
        d="M16.634 21.834H7.356c-.622 0-1.106-.18-1.442-.535-.317-.333-.476-.801-.476-1.384V6.26a.29.29 0 01.08-.199l3.824-3.824a.277.277 0 01.2-.08h7.092c.621 0 1.106.179 1.442.534.317.334.476.801.476 1.384v15.84c0 .583-.16 1.05-.476 1.384-.336.356-.82.535-1.442.535zM5.998 6.374v13.541c0 .902.456 1.359 1.358 1.359h9.278c.901 0 1.358-.457 1.358-1.359V4.075c0-.902-.457-1.359-1.358-1.359H9.656L5.998 6.375zM16.09 19.65H7.897a.28.28 0 01-.28-.28v-8.611a.28.28 0 01.28-.28H16.09a.28.28 0 01.28.28v8.611a.28.28 0 01-.28.28zm-.28-3.291V13.77H8.177v2.588H15.81zm-2.176.56h2.176v2.171h-2.176v-2.17zm-.56 0v2.171h-2.171v-2.17h2.17zm-2.732 0H8.177v2.171h2.165v-2.17zM8.177 13.21h2.165v-2.171H8.177v2.17zm2.726 0v-2.171h2.17v2.17h-2.17zm2.73 0h2.177v-2.171h-2.176v2.17z"
      ></path>
    </svg>
  );
};

ChipSimCardLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChipSimCardLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChipSimCardLight;
