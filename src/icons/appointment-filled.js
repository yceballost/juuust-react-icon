import React from 'react';
import PropTypes from 'prop-types';

const AppointmentFilled = props => {
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
        d="M21.709 7.734s.288-3.6-3.64-3.6c0 0-1.14 0-1.145.003V2.611A.613.613 0 0016.308 2a.613.613 0 00-.616.61v1.527l-7.63.003V2.61A.613.613 0 007.445 2a.613.613 0 00-.616.61v1.53H5.64s-.073-.006-.2-.006c-.753 0-3.408.239-3.408 3.58v10.373s-.247 3.585 3.619 3.585h12.423s.117.014.314.014c.882 0 3.324-.3 3.324-3.619L21.71 7.734zm-3.322 12.734c2.095 0 2.095-1.807 2.095-2.4l-.003-7.508H3.26v7.527c0 .028 0 .056-.002.084 0 0-.045 1.036.577 1.683.38.398.994.6 1.812.6h12.42c.05 0 .101.002.151.01l.055.001c.028.001.067.003.114.003zm-3.622-6.583c.476 0 .896.381.896.815v1.406c0 .443-.409.816-.896.816H13.4l.003 1.35c0 .479-.378.882-.823.882h-1.42c-.449 0-.824-.403-.824-.882v-1.353H8.972c-.482 0-.89-.373-.89-.815v-1.401c0-.443.408-.815.89-.815h1.364v-1.35c0-.482.378-.888.824-.888h1.414c.448 0 .824.406.824.888v1.347h1.367z"
      ></path>
    </svg>
  );
};

AppointmentFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AppointmentFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AppointmentFilled;
