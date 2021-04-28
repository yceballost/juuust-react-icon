import React from 'react';
import PropTypes from 'prop-types';

const FileFilled = props => {
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
        d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.095c-.75 0-1.409-.647-1.409-1.383l.034-2.774h-2.3A2.427 2.427 0 012 15.132v-4.093a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.725.673-1.384 1.41-1.384h7.414c.232 0 .448.09.616.25L21.423 7.4c.11.109.174.243.216.386zm-5.79-4.09l4.114 3.984h-1.8c-.695 0-1.278-.21-1.692-.61-.407-.396-.622-.95-.622-1.609V3.698zM4.42 16.346a1.21 1.21 0 01-1.207-1.21v-4.093c0-.667.54-1.21 1.207-1.21h9.846a1.21 1.21 0 011.207 1.21v4.092c0 .667-.54 1.21-1.207 1.21H4.42zm4.602-5.152h-.955L6.79 14.997h.829l.294-.955h1.235l.317.955h.93l-1.373-3.804zm-.498.95l.417 1.269h-.823l.395-1.27h.01zm2.325-.95h.868v3.804h-.868v-3.804z"
      ></path>
    </svg>
  );
};

FileFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileFilled;
