import React from 'react';
import PropTypes from 'prop-types';

const ControlsFilled = props => {
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
        d="M2.627 6.374a.597.597 0 01-.602-.591c0-.325.27-.588.602-.588h1.05a2.89 2.89 0 01.396-.984 2.996 2.996 0 011.88-1.3 3.022 3.022 0 012.265.382 2.912 2.912 0 011.328 1.84c.004.012.004.025.004.037 0 .008 0 .017.002.025h11.504a.6.6 0 01.602.59.597.597 0 01-.602.592H9.555c-.07.35-.205.68-.398.98a2.967 2.967 0 01-1.88 1.3 3.022 3.022 0 01-2.266-.381 2.938 2.938 0 01-1.328-1.84c-.003-.014-.005-.027-.006-.042a.55.55 0 00-.002-.02H2.627zm18.407 5.132c.333 0 .602.263.602.59a.595.595 0 01-.602.589h-1.082c-.277 1.342-1.493 2.356-2.944 2.356-1.45 0-2.663-1.014-2.944-2.356H2.602A.597.597 0 012 12.094c0-.325.269-.591.602-.591h11.46c.28-1.342 1.493-2.356 2.944-2.356 1.45 0 2.666 1.014 2.944 2.356h1.084v.003zm.599 6.887a.595.595 0 00-.602-.59l-8.782.002c-.28-1.341-1.493-2.355-2.944-2.355-1.45 0-2.664 1.014-2.944 2.355H2.602a.595.595 0 00-.602.588c.003.331.275.594.602.592h3.76c.28 1.341 1.492 2.355 2.943 2.355s2.664-1.014 2.944-2.355h8.782a.597.597 0 00.602-.591z"
      ></path>
    </svg>
  );
};

ControlsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ControlsFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ControlsFilled;
