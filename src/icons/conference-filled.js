import React from 'react';
import PropTypes from 'prop-types';

const ConferenceFilled = props => {
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
        d="M20.09 7.269c0-.684-.513-1.235-1.146-1.235v-.009h-2.801v-.67c0-.109-.04-.212-.112-.29l-.63-.678a.858.858 0 00-.006-1.155l-.9-.969a.74.74 0 00-.54-.24.735.735 0 00-.54.24l-.55.591a.87.87 0 000 1.163l.9.966a.727.727 0 001.081 0l.014-.014.515.558v.498h-6.98v-.498l.513-.552.01.011a.727.727 0 001.081 0l.9-.966a.87.87 0 000-1.163l-.546-.59a.74.74 0 00-.54-.242.74.74 0 00-.541.241l-.9.97a.846.846 0 00-.224.582.85.85 0 00.222.58l-.625.672a.426.426 0 00-.112.291v.67H4.826c-.633 0-1.145.552-1.145 1.235V8.36c0 .683.512 1.235 1.145 1.235h.381v.003h13.356v-.003h.38c.634 0 1.147-.552 1.147-1.235v-1.09zM5.207 10.252v.303c0 .68.513 1.235 1.143 1.235h1.154v.003h8.76v-.003h1.153c.633 0 1.146-.555 1.146-1.235v-.303H5.207zm2.297 7.482v-5.286h8.76v5.286h-8.76zm11.037 1.89c0-.683-.513-1.235-1.146-1.235h-.835v.003H6.35c-.622.011-1.123.558-1.123 1.233v.857c0 .683.512 1.235 1.146 1.235h11.022c.633 0 1.146-.552 1.146-1.235v-.857z"
      ></path>
    </svg>
  );
};

ConferenceFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ConferenceFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ConferenceFilled;
