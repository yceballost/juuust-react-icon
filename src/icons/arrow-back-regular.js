import React from 'react';
import PropTypes from 'prop-types';

const ArrowBackRegular = props => {
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
      <path d="M19.315 11.375H6.277l5.885-6.228a.688.688 0 00-.05-.97.684.684 0 00-.947.027L4.187 11.59c-.03.032-.046.073-.07.11-.024.033-.051.065-.067.104a.71.71 0 00-.05.257v.005c.002.086.02.17.052.253.016.04.044.073.069.107.022.034.036.075.066.107l6.852 7.252c.26.276.692.29.968.03 0 0 .002 0 .002-.003a.687.687 0 00.027-.97l-5.76-6.095h13.039a.687.687 0 000-1.371z"></path>
    </svg>
  );
};

ArrowBackRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowBackRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowBackRegular;
