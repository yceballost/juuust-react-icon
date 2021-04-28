import React from 'react';
import PropTypes from 'prop-types';

const LoudspeakerFilled = props => {
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
        d="M15.773 18.508c.084.025.176.04.266.04a.94.94 0 00.54-.175.971.971 0 00.4-.787V6.401a.971.971 0 00-.4-.787.92.92 0 00-.806-.134L3.283 9.233c-.007-.28-.248-.504-.547-.504-.302 0-.546.233-.546.516v5.51c0 .285.244.515.546.515.303 0 .546-.23.546-.515l3.18.955-.18.574a.822.822 0 00.538 1.028l2.27.711a.782.782 0 00.625-.056.802.802 0 00.402-.482l.195-.618 5.46 1.64zm3.322-10.34a.545.545 0 01-.387-.932l1.546-1.546a.548.548 0 01.773.773L19.482 8.01a.545.545 0 01-.386.16zm.067 4.11a.545.545 0 110-1.092h2.185a.545.545 0 110 1.092h-2.185zM7.408 16.354l1.748.549.07-.224-1.747-.55-.07.225zm12.838 1.356a.545.545 0 00.773 0 .548.548 0 000-.774l-1.507-1.507a.548.548 0 00-.773.774l1.507 1.507z"
      ></path>
    </svg>
  );
};

LoudspeakerFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoudspeakerFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LoudspeakerFilled;
