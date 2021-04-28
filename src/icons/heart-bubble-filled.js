import React from 'react';
import PropTypes from 'prop-types';

const HeartBubbleFilled = props => {
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
        d="M5.137 2.842H18.55c1.731 0 3.137 1.355 3.14 3.022v8.96c0 1.67-1.409 3.026-3.137 3.026h-9.91l-1.99 2.462c-.296.378-.686.575-1.156.575-.757 0-1.398-.603-1.398-1.32v-1.863A2.983 2.983 0 012 14.824v-8.96c0-1.667 1.409-3.022 3.137-3.022zm9.168 9.002c.55-.823.925-1.641 1.118-2.428.21-.857.04-1.569-.482-2.009-.305-.254-.723-.406-1.17-.428-.04-.003-.082-.003-.121-.003l-.027.003a2.601 2.601 0 00-.61.081l-.031.01-.032.01a3.037 3.037 0 00-.6.238l-.176.098c-.1.055-.205.113-.314.176a.127.127 0 01-.056.014.127.127 0 01-.056-.014 108.748 108.748 0 01-.49-.271 3.062 3.062 0 00-.628-.247l-.036-.011a2.58 2.58 0 00-.61-.081l-.026-.003c-.04 0-.081 0-.12.003-.449.022-.863.173-1.169.428-.526.437-.7 1.149-.49 2.006.196.787.572 1.605 1.118 2.428a9.825 9.825 0 001.384 1.676l.022.02c.077.075.255.247.409.355a1.315 1.315 0 00.633.232h.006c.014.003.03.003.045.003h.014l.024-.001a.203.203 0 01.02-.002h.006a1.35 1.35 0 00.63-.232c.153-.106.325-.273.405-.35l.027-.025.014-.014a9.805 9.805 0 001.37-1.662z"
      ></path>
    </svg>
  );
};

HeartBubbleFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HeartBubbleFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HeartBubbleFilled;
