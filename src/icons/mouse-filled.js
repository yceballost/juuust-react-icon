import React from 'react';
import PropTypes from 'prop-types';

const MouseFilled = props => {
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
        d="M12.083 6.42v-.364c0-.02-.011-.308-.157-.577-.174-.322-.462-.47-.91-.47h-1.92c-.896 0-1.663-.2-2.218-.575-.605-.411-.938-1.025-.938-1.725a.55.55 0 011.098 0c0 .888 1.064 1.204 2.062 1.204h1.918c.869 0 1.544.39 1.9 1.096.255.501.26.988.26 1.044v.37c1.503.091 2.694.546 3.546 1.353.995.95 1.502 2.356 1.502 4.185v4.31c0 1.897-.44 3.264-1.345 4.175-.924.93-2.322 1.38-4.277 1.38-1.776 0-3.163-.459-4.12-1.37-.998-.946-1.502-2.355-1.502-4.184V11.96c0-1.83.504-3.238 1.501-4.185.86-.817 2.072-1.273 3.6-1.356zm.52 1.883a.55.55 0 00-.548.549v2.877a.55.55 0 001.098 0V8.852a.552.552 0 00-.55-.55zm4.757 5.09a46.44 46.44 0 01-4.753.24 45.654 45.654 0 01-4.754-.24c-.277-.029-.47-.222-.431-.43.039-.206.294-.352.571-.321 1.532.157 3.073.235 4.614.232 1.54.003 3.08-.075 4.613-.232.277-.028.532.115.572.322.039.207-.155.4-.432.428z"
      ></path>
    </svg>
  );
};

MouseFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MouseFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MouseFilled;
