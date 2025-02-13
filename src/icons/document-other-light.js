import React from 'react';
import PropTypes from 'prop-types';

const DocumentOtherLight = props => {
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
        d="M19.338 7.907l.007.024a.48.48 0 01.026.141v12.56c0 .653-.566 1.208-1.218 1.208H5.828c-.647 0-1.219-.563-1.219-1.208l.042-3.358L4.61 9.13V3.364c0-.63.583-1.208 1.219-1.208h7.504a.68.68 0 01.473.2l5.362 5.229c.087.09.137.207.17.322zm-.787.854v11.874c0 .2-.196.381-.401.381H5.825c-.196 0-.4-.19-.4-.372l.042-3.367-.042-8.152V3.366c0-.173.22-.38.4-.38h6.815v2.473c0 .96.328 1.778.941 2.384.614.596 1.449.918 2.423.918h2.547zm-5.09-3.305V3.165l4.868 4.764h-2.322c-.75 0-1.398-.24-1.849-.686-.459-.437-.697-1.059-.697-1.787zm1.014 10.76c.417 0 .728-.315.728-.754a.738.738 0 00-.745-.745.73.73 0 00-.728.745v.016c0 .423.31.737.745.737zm-2.014-.754c0 .44-.32.753-.737.753a.722.722 0 01-.745-.737v-.016c0-.415.32-.745.737-.745.42.002.745.333.745.745zm-3.485.753c.418 0 .737-.314.737-.753a.738.738 0 00-.745-.745.738.738 0 00-.737.745v.016c0 .423.32.737.745.737z"
      ></path>
    </svg>
  );
};

DocumentOtherLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DocumentOtherLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DocumentOtherLight;
