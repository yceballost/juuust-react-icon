import React from 'react';
import PropTypes from 'prop-types';

const ClipLight = props => {
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
      <path d="M11.981 21.843c-2.907 0-4.512-1.457-4.512-4.107V5.44c0-2.117 1.283-3.283 3.613-3.283 2.328 0 3.61 1.166 3.61 3.286v10.65c0 1.557-.98 2.454-2.694 2.454s-2.695-.894-2.695-2.454v-8.98c0-.227.202-.41.451-.41.25 0 .449.185.449.41v8.98c0 1.115.571 1.633 1.792 1.633 1.225 0 1.793-.518 1.793-1.633V5.442c0-1.658-.888-2.465-2.711-2.465-1.824 0-2.712.807-2.712 2.465v12.297c0 2.18 1.216 3.286 3.61 3.286 2.396 0 3.611-1.107 3.611-3.286l-.01-10.633c0-.227.2-.41.447-.41h.003c.25 0 .451.183.451.41l.014 10.636c.003 2.644-1.602 4.1-4.51 4.1z"></path>
    </svg>
  );
};

ClipLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClipLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClipLight;
