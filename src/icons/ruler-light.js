import React from 'react';
import PropTypes from 'prop-types';

const RulerLight = props => {
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
        d="M21.843 17.343c0-.35-.138-.68-.384-.927L7.576 2.528c-.492-.496-1.358-.496-1.851 0L2.54 5.716c-.25.25-.384.577-.384.927-.002.347.138.68.384.924l13.882 13.891c.247.25.575.384.925.384.35 0 .68-.137.927-.384l3.185-3.188c.25-.246.384-.577.384-.927zm-.99-.316a.451.451 0 010 .638l-3.187 3.188a.456.456 0 01-.639 0L3.146 6.963a.455.455 0 010-.642L6.33 3.133l.003-.003a.454.454 0 01.638.003L8.33 4.492 7.083 5.716a.432.432 0 00-.005.608c.168.168.44.17.608.005L8.935 5.1l1.507 1.51-2.507 2.507a.426.426 0 000 .605.426.426 0 00.605 0l2.507-2.51 1.507 1.508-1.328 1.305-.002.003a.428.428 0 00.602.61l1.333-1.313 1.504 1.504-2.26 2.263a.426.426 0 000 .605.426.426 0 00.605 0l2.263-2.26 1.507 1.51-1.496 1.47a.428.428 0 00-.005.605l.003.003a.425.425 0 00.602.003l1.501-1.474 3.47 3.474zm-2.865.67a.53.53 0 00-.193-.72.522.522 0 00-.714.19s0 .003-.003.003a.525.525 0 10.91.526zm.563.319c.32-.56.126-1.275-.434-1.597h-.002v-.003a1.168 1.168 0 00-1.71 1.32 1.172 1.172 0 002.146.28z"
      ></path>
    </svg>
  );
};

RulerLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RulerLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RulerLight;
