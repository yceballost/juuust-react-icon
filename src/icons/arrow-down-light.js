import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownLight = props => {
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
        d="M11.936 21.883h.003c.174 0 .345-.087.515-.263l8.958-8.902c.376-.367.496-.801.33-1.185-.173-.41-.64-.67-1.164-.653l-3.519.023c-.08 0-.145-.079-.145-.174l.003-6.902v-.006c-.009-.554-.155-.958-.443-1.238-.314-.302-.768-.437-1.426-.425H8.83c-.575-.017-1.042.134-1.353.44-.3.293-.448.705-.44 1.229v6.9c0 .094-.064.173-.146.173l-3.778.005c-.415-.005-.745.2-.888.55-.166.403-.026.896.355 1.257l8.93 8.966c.13.135.272.205.426.205zM2.771 11.676c.048-.118.162-.182.325-.182.003 0 .008 0 .005.002h.006l3.782-.005a.75.75 0 00.736-.762V3.82c-.005-.355.084-.624.264-.8.246-.242.638-.28.924-.272h6.244c.487-.009.817.075 1.008.26.17.165.258.434.263.82l-.002 6.9c0 .42.33.762.736.762l3.524-.023h.008c.275-.01.53.113.608.295.087.201-.09.42-.204.532l-8.961 8.907-.003.003a.492.492 0 01-.087.076l-.003-.003a.024.024 0 01-.008-.008l-.005-.006-8.936-8.975-.006-.005c-.249-.236-.274-.474-.218-.608z"
      ></path>
    </svg>
  );
};

ArrowDownLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownLight;
