import React from 'react';
import PropTypes from 'prop-types';

const WebFilled = props => {
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
        d="M21.686 5.903c0-.759-.641-1.378-1.428-1.378H3.428c-.79 0-1.428.62-1.428 1.378v12.012c0 .759.639 1.375 1.429 1.375h16.829c.787 0 1.428-.62 1.428-1.378V5.903zm-16.498.83a.548.548 0 00-.558-.538h-.003a.548.548 0 00-.557.537c0 .297.25.538.557.538a.548.548 0 00.56-.538zm15.294 11.179c0 .12-.101.215-.224.215H3.428a.221.221 0 01-.224-.215V8.248h17.278v9.664zM6.655 10.357l2.729 2.384a.57.57 0 01.006.857L6.66 16.026a.595.595 0 01-.409.155.61.61 0 01-.442-.188.566.566 0 01.01-.801l.012-.01a.075.075 0 01.011-.01l2.244-1.997-2.238-1.958a.567.567 0 01-.042-.82.615.615 0 01.848-.04zm10.681 2.255c.333 0 .605.26.605.58 0 .32-.272.58-.602.58H10.87a.596.596 0 01-.605-.58c0-.32.272-.583.605-.583l6.465.003zM6.308 6.195a.548.548 0 01.558.537.548.548 0 01-.56.538.548.548 0 01-.558-.538.548.548 0 01.557-.537h.003zm2.235.537a.548.548 0 00-.557-.537h-.003a.548.548 0 00-.557.537c0 .297.25.538.557.538a.548.548 0 00.56-.538z"
      ></path>
    </svg>
  );
};

WebFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WebFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WebFilled;
