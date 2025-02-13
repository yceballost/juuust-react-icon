import React from 'react';
import PropTypes from 'prop-types';

const UserAccountLight = props => {
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
        d="M12.299 12.307c-3.162 0-4.834-1.642-4.834-4.747 0-1.577.43-2.783 1.278-3.589.818-.776 2.013-1.171 3.556-1.171 1.542 0 2.74.395 3.564 1.171.853.806 1.283 2.015 1.283 3.59 0 3.104-1.675 4.746-4.847 4.746zM3.975 21.8h16.65a.273.273 0 00.275-.268v-2.11c0-1.44-.454-2.669-1.32-3.55-.941-.96-2.349-1.47-4.067-1.47H9.087c-1.718 0-3.126.51-4.068 1.467-.862.881-1.319 2.11-1.319 3.551v2.11c0 .148.124.27.275.27zm16.374-.54H4.251v-1.84c0-1.3.402-2.396 1.165-3.175.848-.863 2.082-1.301 3.671-1.301h6.426c1.589 0 2.823.438 3.671 1.3.763.78 1.165 1.878 1.165 3.176v1.84zM9.126 4.36c.71-.676 1.779-1.019 3.173-1.019 1.396 0 2.465.343 3.18 1.017.742.7 1.116 1.78 1.116 3.2 0 1.42-.374 2.493-1.115 3.19-.714.674-1.788 1.015-3.181 1.015-1.394 0-2.463-.338-3.173-1.011-.736-.695-1.11-1.77-1.11-3.192 0-1.422.374-2.499 1.11-3.2z"
      ></path>
    </svg>
  );
};

UserAccountLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UserAccountLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UserAccountLight;
