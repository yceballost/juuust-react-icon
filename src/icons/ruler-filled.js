import React from 'react';
import PropTypes from 'prop-types';

const RulerFilled = props => {
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
        d="M21.845 17.35c0-.286-.098-.558-.266-.782l.028-.025L7.81 2.742 7.8 2.75l-.218-.218c-.493-.496-1.359-.496-1.852 0L2.542 5.719a1.315 1.315 0 000 1.855l13.883 13.89c.246.25.574.384.924.384.35 0 .68-.134.927-.383l3.185-3.188c.247-.247.384-.577.384-.927zM7.568 6.277c.109 0 .215-.04.3-.123L9.25 4.792l-.605-.605-1.378 1.356a.429.429 0 00.3.734zm3.792.627L8.982 9.285a.426.426 0 01-.605 0 .426.426 0 010-.605l2.378-2.38.605.604zm.49 3.538a.43.43 0 00.3-.123l1.322-1.3-.605-.605-1.316 1.294a.429.429 0 00.3.734zm3.734.686l-2.319 2.322a.426.426 0 01-.605 0 .426.426 0 010-.604l2.32-2.323.604.605zm.202 3.39a.424.424 0 00.605.005l1.303-1.28-.605-.605-1.297 1.275a.428.428 0 00-.006.605zm2.76 3.507a1.17 1.17 0 00-.427-1.597 1.174 1.174 0 00-1.596.429 1.171 1.171 0 001.01 1.753 1.174 1.174 0 001.011-.585z"
      ></path>
    </svg>
  );
};

RulerFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RulerFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RulerFilled;
