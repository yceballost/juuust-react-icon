import React from 'react';
import PropTypes from 'prop-types';

const HospitalFilled = props => {
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
        d="M21.686 6.233c0-.788-.288-1.255-.776-1.255l-2.274-.003V3.403c0-.72-.628-1.378-1.32-1.378H6.382c-.692 0-1.32.659-1.32 1.378v1.575h-2.28c-.487 0-.778.467-.778 1.255v14.226c0 .788.291 1.255.779 1.255H20.91c.485 0 .776-.47.776-1.255V6.233zM13.67 20.51h-3.647v-5.944h3.647v5.944zM6.258 3.406V20.51h2.566v-6.546a.6.6 0 01.599-.603h4.846a.6.6 0 01.6.603v6.546h2.565V3.406c0-.067-.087-.162-.132-.173H6.378c-.036.01-.12.106-.12.173zM8.22 8.664c0 .291.278.535.603.535h1.75v1.756c0 .322.25.605.532.605h1.48c.288 0 .532-.277.532-.605L13.112 9.2h1.75c.32 0 .609-.255.609-.535V7.179c0-.28-.292-.535-.608-.535h-1.751v-1.75c0-.32-.255-.611-.532-.611h-1.474c-.283 0-.532.286-.532.61V6.65h-1.75c-.323 0-.603.25-.603.532v1.482z"
      ></path>
    </svg>
  );
};

HospitalFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HospitalFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HospitalFilled;
