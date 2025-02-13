import React from 'react';
import PropTypes from 'prop-types';

const ThrowLightLight = props => {
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
        d="M11.327 17.294a.836.836 0 01-.594-.244l-3.8-3.801a.84.84 0 010-1.188l7.652-7.655-1.294-1.292a.561.561 0 01.395-.958h7.585c.308 0 .56.252.56.56v7.586c0 .308-.252.56-.56.56a.55.55 0 01-.395-.165l-1.305-1.305-7.65 7.658a.83.83 0 01-.594.244zm2.361-14.575l1.292 1.292a.561.561 0 010 .792l-7.653 7.653a.279.279 0 000 .395l3.801 3.801c.11.11.286.11.395 0l7.653-7.653a.55.55 0 01.79 0l1.302 1.303V2.719h-7.58zM2.156 21.543a.28.28 0 00.48.199l4.912-4.92a.283.283 0 000-.388.281.281 0 00-.395-.006l-4.916 4.916a.29.29 0 00-.08.199zm5.317.283a.28.28 0 01-.2-.48c.928-.926 2.224-2.266 2.515-2.568l.06-.061a.28.28 0 11.417.372l-.005.006a.285.285 0 01-2.788 2.73zM2.207 16.56c0 .154.126.28.28.28.075 0 .145-.031.196-.081a250.797 250.797 0 002.58-2.64.279.279 0 00-.4-.39l-.245.253c-.473.487-1.536 1.585-2.33 2.379a.29.29 0 00-.081.199z"
      ></path>
    </svg>
  );
};

ThrowLightLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThrowLightLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThrowLightLight;
