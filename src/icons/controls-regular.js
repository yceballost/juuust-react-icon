import React from 'react';
import PropTypes from 'prop-types';

const ControlsRegular = props => {
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
        d="M2.025 5.783c.003.33.275.594.602.59h1.048l.002.021c.001.015.003.028.006.042.18.767.656 1.428 1.328 1.84.675.42 1.49.557 2.266.38a2.967 2.967 0 001.88-1.299c.193-.3.328-.63.398-.98h11.501a.597.597 0 00.602-.591.599.599 0 00-.602-.591H9.552L9.55 5.17a.15.15 0 00-.004-.037 2.912 2.912 0 00-1.328-1.84 3.022 3.022 0 00-2.266-.381 2.996 2.996 0 00-1.88 1.3 2.891 2.891 0 00-.394.983h-1.05a.595.595 0 00-.603.588zm2.832.392a1.734 1.734 0 01.233-1.333 1.823 1.823 0 012.487-.552c.403.246.69.644.796 1.104.106.462.022.935-.233 1.333-.26.4-.658.678-1.129.781a1.8 1.8 0 01-1.358-.23 1.762 1.762 0 01-.796-1.103zm12.151 7.69c.995 0 1.804-.794 1.804-1.768 0-.975-.81-1.768-1.804-1.768s-1.803.793-1.803 1.768c0 .972.809 1.767 1.803 1.767zm4.628-1.768a.595.595 0 00-.602-.591v-.003H19.95c-.278-1.342-1.494-2.356-2.944-2.356-1.451 0-2.664 1.014-2.944 2.356H2.602a.597.597 0 00-.602.59c.003.331.275.595.602.592h11.462c.28 1.342 1.493 2.356 2.944 2.356 1.451 0 2.667-1.014 2.944-2.356h1.082a.595.595 0 00.602-.588zm-12.33 8.061c.994 0 1.803-.793 1.803-1.767 0-.975-.81-1.768-1.804-1.768s-1.804.793-1.804 1.768.81 1.767 1.804 1.767zm12.327-1.765a.595.595 0 00-.602-.59l-8.782.002c-.28-1.341-1.493-2.355-2.944-2.355-1.45 0-2.664 1.014-2.944 2.355H2.602a.595.595 0 00-.602.588c.003.331.275.594.602.592h3.76c.28 1.341 1.492 2.355 2.943 2.355s2.664-1.014 2.944-2.355h8.782a.597.597 0 00.602-.591z"
      ></path>
    </svg>
  );
};

ControlsRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ControlsRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ControlsRegular;
