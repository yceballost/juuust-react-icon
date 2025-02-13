import React from 'react';
import PropTypes from 'prop-types';

const FileAviRegular = props => {
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
        d="M21.639 7.76c.03.072.047.153.047.237v12.305c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.406-.647-1.406-1.384l.034-2.77h-2.3A2.428 2.428 0 012 15.106v-4.092a2.426 2.426 0 012.42-2.426h2.266V3.384C6.686 2.658 7.36 2 8.092 2h7.415c.232 0 .448.087.613.247l5.297 5.126c.115.109.18.243.222.386zm-1.362 12.708c.098 0 .194-.096.194-.168V8.868h-2.314c-1.014 0-1.888-.33-2.532-.955-.65-.627-.995-1.487-.995-2.482V3.216H8.095c-.07 0-.187.112-.193.17v5.202h6.364a2.426 2.426 0 012.42 2.426v4.092a2.426 2.426 0 01-2.42 2.426h-6.33l-.034 2.779c0 .05.098.16.193.16h12.182v-.003zM3.216 15.106c0 .667.54 1.21 1.207 1.21h9.843a1.21 1.21 0 001.207-1.21v-4.092c0-.667-.54-1.21-1.207-1.21H4.423c-.667 0-1.207.54-1.207 1.21v4.092zM15.846 3.67l4.115 3.984H18.16c-.692 0-1.275-.21-1.69-.611-.408-.395-.624-.95-.624-1.608V3.67zm-9.639 7.698h.927l1.331 3.683h-.9l-.307-.927H6.062l-.286.927h-.804l1.235-3.683zm.846 2.148L6.65 12.29h-.011l-.384 1.226h.798zm2.177-2.148h-.9l1.283 3.683h.877l1.224-3.683h-.818l-.804 2.672-.862-2.672zm2.96 0h.84v3.683h-.84v-3.683z"
      ></path>
    </svg>
  );
};

FileAviRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileAviRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileAviRegular;
