import React from 'react';
import PropTypes from 'prop-types';

const PersonLight = props => {
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
        d="M9.37 4.484c0 1.473.872 2.32 2.387 2.32 1.518 0 2.39-.847 2.39-2.32 0-.75-.22-1.336-.65-1.74-.415-.389-1-.588-1.74-.588-.742 0-1.328.2-1.74.588-.428.404-.647.99-.647 1.74zm.844 0c0-.521.128-.908.389-1.151.252-.236.639-.356 1.157-.356.515 0 .902.12 1.154.359.26.243.392.63.392 1.148 0 1.025-.493 1.501-1.549 1.501-1.053 0-1.543-.479-1.543-1.501zm5.888 10.507a.526.526 0 00.383-.633c0-.003 0-.006-.002-.008l-1.197-4.289a.802.802 0 01-.042-.115c-.005-.02-.01-.039-.016-.056-.18-.865-.975-1.493-1.888-1.493h-2.664c-.91 0-1.706.628-1.888 1.493a.154.154 0 01-.007.022.158.158 0 00-.004.015.308.308 0 01-.034.092l-1.21 4.336a.523.523 0 00.372.636h.006c.137.04.283.022.406-.05a.503.503 0 00.247-.309l.532-2.865c.04-.21.224-.347.454-.336.215.017.38.193.383.409v8.655a.53.53 0 001.062 0v-5.157c0-.227.188-.409.42-.409h1.188c.232 0 .423.185.423.41v5.159c0 .291.238.527.532.527.291 0 .53-.236.53-.527v-8.656c0-.212.168-.389.383-.408.227-.009.412.126.451.336l.538 2.893a.512.512 0 00.241.278c.12.07.266.086.4.05zm.24.787a1.341 1.341 0 00.956-1.641l-1.185-4.264a.868.868 0 00-.056-.17c-.27-1.233-1.404-2.127-2.706-2.127h-2.664c-1.303 0-2.44.894-2.709 2.132a.826.826 0 00-.047.14l-1.2 4.294v.004l-.002.005a1.34 1.34 0 00.97 1.63 1.39 1.39 0 001.403-.41v5.127c0 .742.616 1.347 1.372 1.347.756 0 1.373-.605 1.373-1.347v-4.75h.336v4.747a1.36 1.36 0 001.372 1.348c.757 0 1.373-.605 1.373-1.348v-5.123a1.396 1.396 0 001.414.406z"
      ></path>
    </svg>
  );
};

PersonLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PersonLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PersonLight;
