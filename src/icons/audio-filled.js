import React from 'react';
import PropTypes from 'prop-types';

const AudioFilled = props => {
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
        d="M6.238 7.105c.964-1.277 2.709-2.591 5.826-2.591.998 0 1.751.768 1.751 1.709V17.67c0 .938-.748 1.7-1.67 1.7-3.207 0-4.963-1.305-5.92-2.582l-3.16.002c-.58 0-1.054-.479-1.054-1.07l-.008-7.54c0-.283.109-.555.308-.757a1.04 1.04 0 01.745-.316l3.182-.003zm12.7-1.664a1.042 1.042 0 00-1.481.079 1.087 1.087 0 00.067 1.512c.084.079 2.017 1.922 2.053 5.112.003.031.11 3.21-2.008 5.138a1.088 1.088 0 00-.084 1.515 1.037 1.037 0 001.49.084c2.854-2.597 2.717-6.658 2.709-6.796-.045-4.126-2.636-6.543-2.746-6.644zm-.829 6.678c-.028-2.781-1.79-4.423-1.865-4.49a1.041 1.041 0 00-1.488.081 1.085 1.085 0 00.079 1.515c.014.012 1.148 1.098 1.168 2.953.003.017.045 1.86-1.14 2.938a1.088 1.088 0 00-.084 1.516 1.039 1.039 0 001.49.084c1.938-1.765 1.843-4.515 1.84-4.597z"
      ></path>
    </svg>
  );
};

AudioFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AudioFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AudioFilled;
