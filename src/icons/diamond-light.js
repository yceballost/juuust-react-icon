import React from 'react';
import PropTypes from 'prop-types';

const DiamondLight = props => {
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
        d="M21.843 8.347l-.003.01a.08.08 0 01-.012.035.388.388 0 01-.055.162.044.044 0 00-.005.015c0 .004-.001.009-.004.013l-9.428 13.087a.18.18 0 01-.041.036c-.01.006-.018.013-.027.02-.017.017-.03.03-.05.045a.414.414 0 01-.221.07.412.412 0 01-.219-.07.724.724 0 01-.05-.045c-.008-.008-.018-.015-.028-.023-.013-.01-.027-.02-.037-.033L2.235 8.582c-.005-.005-.006-.01-.007-.016-.001-.004-.002-.008-.005-.012a.363.363 0 01-.056-.162.161.161 0 00-.004-.016c-.002-.007-.004-.014-.004-.02l-.003-.012a.424.424 0 01.05-.185c0-.006 0-.011.003-.017l3.317-5.778.01-.009.01-.008a.372.372 0 01.165-.143l.018-.011c.01-.007.02-.014.032-.017a.248.248 0 01.06-.007c.01 0 .02 0 .03-.002a.072.072 0 00.016-.005c.006-.003.012-.006.02-.006h12.224c.007 0 .014.003.02.006a.086.086 0 00.014.005l.03.002c.02 0 .04.001.06.007.012.003.022.01.032.017.006.004.012.008.018.01a.39.39 0 01.165.144.037.037 0 00.008.005c.005.003.01.006.012.012l3.317 5.781a.035.035 0 01.002.009c0 .003.002.006.003.008a.36.36 0 01.05.185zM7.907 7.453L6.456 2.977h4.767L7.907 7.453zm8.9.482l1.41-4.35 2.5 4.35h-3.91zm-.267.82h4.081L13.207 19.05 16.54 8.756zM10.79 19.05L7.455 8.756H3.375l7.414 10.294zm6.753-16.073h-4.77l3.322 4.476 1.448-4.476zM8.579 7.935l.002-.003h6.839L12 3.322 8.58 7.932H8.58v.003zM12 20.089l3.67-11.333h-7.34L12 20.089zM5.784 3.582l1.409 4.35h-3.91l2.5-4.35z"
      ></path>
    </svg>
  );
};

DiamondLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DiamondLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DiamondLight;
