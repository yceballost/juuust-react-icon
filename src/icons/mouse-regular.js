import React from 'react';
import PropTypes from 'prop-types';

const MouseRegular = props => {
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
        d="M12.083 6.417v-.36c0-.02-.011-.309-.157-.578-.174-.322-.462-.47-.91-.47h-1.92c-.896 0-1.663-.2-2.218-.575-.605-.411-.938-1.025-.938-1.725a.55.55 0 011.098 0c0 .888 1.064 1.204 2.062 1.204h1.918c.869 0 1.544.39 1.9 1.096.255.501.26.988.26 1.044v.368c1.504.09 2.694.545 3.543 1.352.998.947 1.502 2.356 1.502 4.185v4.311c0 1.897-.44 3.263-1.347 4.174-.922.933-2.32 1.386-4.275 1.386-1.779 0-3.165-.462-4.12-1.37-.998-.946-1.502-2.355-1.502-4.184V11.96c0-1.83.504-3.238 1.502-4.185.862-.82 2.073-1.276 3.602-1.359zm-.031 5.312a.55.55 0 001.098 0V8.852a.55.55 0 00-1.098 0v2.877zm-3.978.77v-.535c0-3.003 1.48-4.462 4.527-4.462 3.048 0 4.53 1.456 4.527 4.459v.538c-1.48.183-2.983.274-4.476.274h-.101c-1.491 0-2.996-.091-4.477-.274zm0 1.102v2.674c0 3 1.482 4.46 4.527 4.46 1.647 0 2.793-.348 3.499-1.06.691-.697 1.028-1.81 1.028-3.403V13.6a37.784 37.784 0 01-4.474.268h-.106c-1.49 0-2.99-.09-4.474-.268z"
      ></path>
    </svg>
  );
};

MouseRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MouseRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MouseRegular;
