import React from 'react';
import PropTypes from 'prop-types';

const ClipboardRegular = props => {
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
        d="M17.773 3.591c.854 0 1.602.611 1.602 1.306V20.54c0 .709-.734 1.305-1.602 1.305H6.213c-.87 0-1.603-.6-1.603-1.305V4.894c0-.695.75-1.305 1.602-1.305h2.955c.471-.914 1.443-1.429 2.827-1.429 1.686 0 2.467.709 2.829 1.431h2.95zm-7.737 1.317c.033-.731.286-1.569 1.958-1.569 1.547 0 1.784.752 1.862 1.002v.001c.062.205.093.415.098.628V5.088c-.008.23-.022.613-1.96.613-1.937 0-1.953-.382-1.964-.651v-.002l.006-.14zm8.162 15.588c-.025.045-.193.171-.425.171H6.213c-.19 0-.337-.084-.394-.116l-.024-.013L5.784 4.95c.03-.053.213-.185.428-.185h2.65a.27.27 0 01-.004.02.146.146 0 00-.004.033l-.006.101-.003.126v.081c.056 1.535 1.546 1.748 3.149 1.748 1.602 0 3.095-.213 3.145-1.722l.003-.107-.003-.115-.002-.078-.006-.046a.675.675 0 01-.006-.038h2.648c.166 0 .316.079.382.114.022.012.035.018.035.015l.008 15.6zM10.744 4.743a.55.55 0 00.552.549h1.392a.553.553 0 00.555-.55.553.553 0 00-.555-.548h-1.392a.55.55 0 00-.551.549z"
      ></path>
    </svg>
  );
};

ClipboardRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClipboardRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClipboardRegular;
