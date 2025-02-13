import React from 'react';
import PropTypes from 'prop-types';

const PendriveLight = props => {
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
        d="M21.843 9.569c-.017-.908-.734-1.642-1.597-1.642h-.77l.002.003h-.952c-.123-.966-.919-1.711-1.88-1.711h-9.26c-3.373.109-5.23 2.145-5.23 5.734 0 3.582 1.857 5.624 5.241 5.75h9.26c.978 0 1.785-.77 1.889-1.756h1.714c.871 0 1.582-.742 1.582-1.65V9.57zm-4.11 6.16v-.208h-.014v-7.33c0-.622-.482-1.124-1.075-1.124H7.397c-2.927.096-4.42 1.74-4.42 4.886 0 3.143 1.49 4.792 4.434 4.902h9.247c.593 0 1.075-.505 1.075-1.126zm3.289-6.152v4.72c0 .443-.342.801-.762.801h-1.717V8.78h1.762c.392.03.708.38.717.798zm-13.9 2.603c0-.58-.324-.85-.829-.85-.5 0-.831.27-.831.85 0 .277.075.484.21.624.143.151.358.224.619.224.263 0 .476-.073.622-.224.134-.14.21-.344.21-.624z"
      ></path>
    </svg>
  );
};

PendriveLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PendriveLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PendriveLight;
