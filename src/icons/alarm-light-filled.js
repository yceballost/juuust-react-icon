import React from 'react';
import PropTypes from 'prop-types';

const AlarmLightFilled = props => {
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
        d="M11.37 3.326c0 .375.304.679.677.679a.68.68 0 00.676-.68V1.68A.678.678 0 0012.047 1a.678.678 0 00-.676.68v1.646zm7.952 14.744c.826 0 1.546.61 1.546 1.309v2.313c0 .698-.723 1.308-1.546 1.308H4.772c-.839 0-1.546-.598-1.546-1.308v-2.313c0-.708.707-1.305 1.546-1.305h.17v-6.401c0-4.601 2.522-7.136 7.102-7.136 4.583 0 7.106 2.535 7.106 7.136v6.397h.172zm.194 3.509v-2.094a.363.363 0 00-.194-.06H4.772a.384.384 0 00-.194.054v2.11c.06.034.125.05.194.05h14.55a.354.354 0 00.194-.06zM3.989 9.282a.68.68 0 01-.676.679H1.676a.68.68 0 010-1.359h1.64c.373 0 .677.304.673.68zM23 9.313a.678.678 0 00-.676-.68h-1.64a.678.678 0 00-.677.68c0 .376.304.68.677.68h1.64a.678.678 0 00.676-.68zM4.929 5.253L3.77 4.09a.678.678 0 01.952-.964l.003.003 1.158 1.165a.682.682 0 01-.479 1.16.692.692 0 01-.475-.2zm12.205-.622a.679.679 0 00.673.685c.178 0 .35-.072.479-.2l1.158-1.165a.68.68 0 000-.957l-.003-.003a.673.673 0 00-.952.003l-1.158 1.164a.668.668 0 00-.197.473z"
      ></path>
    </svg>
  );
};

AlarmLightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlarmLightFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlarmLightFilled;
