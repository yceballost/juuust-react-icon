import React from 'react';
import PropTypes from 'prop-types';

const MobileDeviceLight = props => {
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
        d="M15.55 21.834H8.448c-1.028 0-1.77-.238-2.266-.731-.502-.496-.745-1.244-.745-2.28V5.167c0-1.008.243-1.745.742-2.249.507-.512 1.25-.762 2.269-.762h7.1c1.031 0 1.774.244 2.272.745.499.502.74 1.241.74 2.266v13.656c0 1.036-.244 1.781-.745 2.28-.496.493-1.238.731-2.266.731zM8.448 2.716c-.863 0-1.474.194-1.871.594-.393.395-.583 1.003-.583 1.857v13.656c0 1.742.711 2.45 2.45 2.45h7.102c1.742 0 2.45-.708 2.45-2.45V5.167c0-.87-.187-1.484-.573-1.87-.387-.387-1-.58-1.874-.58H8.448zm2.725 15.944c0-.568.328-.834.832-.834s.83.266.83.834c0 .275-.074.477-.208.614-.146.148-.359.221-.622.221s-.476-.073-.622-.221c-.134-.137-.21-.339-.21-.614z"
      ></path>
    </svg>
  );
};

MobileDeviceLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobileDeviceLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobileDeviceLight;
