import React from 'react';
import PropTypes from 'prop-types';

const SniperScopeRegular = props => {
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
        d="M19.762 11.46h1.347a.602.602 0 110 1.204h-1.375c-.446 6.087-5.597 6.857-7.207 6.944v1.476a.604.604 0 01-.605.602.604.604 0 01-.606-.602v-1.473c-1.61-.079-6.745-.835-7.207-6.947H2.63a.604.604 0 01-.605-.602c0-.334.272-.603.605-.603h1.448c.174-6.714 5.659-7.417 7.238-7.479V2.602c0-.333.272-.602.606-.602.333 0 .605.269.605.602v1.392c1.692.107 7.036.972 7.235 7.465zm-7.235 4.809v2.134c1.641-.092 5.59-.837 6.005-5.74h-2.258a.604.604 0 01-.605-.601c0-.334.272-.603.605-.603h2.28c-.181-5.302-4.3-6.145-6.025-6.26v2.218a.604.604 0 01-.605.603.604.604 0 01-.605-.603V5.185c-1.644.064-5.868.779-6.03 6.274h2.179a.604.604 0 110 1.204H5.317c.425 4.928 4.364 5.66 6 5.743V16.27c0-.333.271-.602.605-.602.333 0 .605.269.605.602z"
      ></path>
    </svg>
  );
};

SniperScopeRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SniperScopeRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SniperScopeRegular;
