import React from 'react';
import PropTypes from 'prop-types';

const BriefcaseLight = props => {
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
        d="M16.83 7.292h3.736c.712 0 1.28.574 1.28 1.291v11.972c0 .72-.571 1.291-1.283 1.291H3.44c-.703 0-1.28-.571-1.28-1.291V8.583c0-.717.577-1.291 1.28-1.291h3.737v-.575c0-2.507 2.126-4.557 4.734-4.557h.182c2.616 0 4.736 2.05 4.736 4.557v.575zm-8.813-.575c0-2.042 1.75-3.714 3.897-3.714h.182c2.154 0 3.896 1.672 3.896 3.714v.575H8.017v-.575zM3.435 8.135a.444.444 0 00-.437.448v3.703c1.725 1.4 4.523 2.034 9.08 2.034h.326c4.249-.037 6.913-.625 8.605-1.908V8.577a.446.446 0 00-.446-.442H3.435zm17.574 12.42a.444.444 0 01-.44.448H3.44a.443.443 0 01-.442-.442v-7.23c1.708 1.14 4.128 1.706 7.79 1.807l-.009.008v1.61c0 .253.076.457.227.608.151.143.35.219.594.219h.804c.252 0 .454-.076.594-.218.15-.152.226-.356.226-.608v-1.611c3.636-.092 6.065-.625 7.782-1.723.003 0 .003 7.132.003 7.132zm-9.19-5.4l.57-.009v.008l-.008 1.586-.762.017-.016-1.594.215-.009z"
      ></path>
    </svg>
  );
};

BriefcaseLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BriefcaseLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BriefcaseLight;
