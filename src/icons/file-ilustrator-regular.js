import React from 'react';
import PropTypes from 'prop-types';

const FileIlustratorRegular = props => {
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
        d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.095c-.75 0-1.409-.647-1.409-1.383l.034-2.774h-2.3A2.427 2.427 0 012 15.132v-4.093a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.725.673-1.384 1.41-1.384h7.414c.232 0 .448.09.616.25L21.423 7.4c.11.109.174.243.216.386zM20.277 20.5c.098 0 .194-.096.194-.168V8.896H18.16c-1.014 0-1.891-.33-2.535-.952-.65-.627-.992-1.487-.992-2.482V3.244H8.098c-.073 0-.188.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.093a2.427 2.427 0 01-2.42 2.425h-6.33l-.034 2.78c0 .05.1.159.193.159h12.18v.003zM3.213 15.135c0 .666.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.093c0-.667-.54-1.21-1.207-1.21H4.42a1.21 1.21 0 00-1.207 1.21v4.092zM15.849 3.697l4.114 3.983h-1.8c-.695 0-1.278-.21-1.692-.61-.407-.396-.622-.95-.622-1.609V3.698zm-6.827 7.495h-.955L6.79 14.997h.829l.294-.955h1.235l.317.955h.93l-1.373-3.804zm-.498.95l.417 1.269h-.823l.395-1.27h.01zm2.325-.95h.868v3.804h-.868v-3.804z"
      ></path>
    </svg>
  );
};

FileIlustratorRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileIlustratorRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileIlustratorRegular;
