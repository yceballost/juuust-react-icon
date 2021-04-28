import React from 'react';
import PropTypes from 'prop-types';

const DartboardFilled = props => {
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
        d="M15.905 8.908c.899 1.14 1.535 2.756 1.535 5.078 0 7.115-5.891 7.67-7.364 7.695-.14.002-.297.005-.457.005-.084 0-.168 0-.25-.003-1.548-.022-7.363-.582-7.363-7.745 0-7.15 5.762-7.68 7.31-7.694h.16c.196 0 .398.002.572.008.874.02 3.213.238 5.028 1.79l.974-.975V3.913c0-.106.037-.202.084-.291l.005-.007.004-.007a.621.621 0 01.134-.162l.011-.012 1.57-1.252c.006-.006.015-.01.025-.013.008-.003.017-.007.024-.012A.596.596 0 0118.308 2c.33 0 .602.269.602.602v1.644a.594.594 0 01.734.076c.168.168.21.41.138.62l1.313.013a.6.6 0 01.594.608.254.254 0 01-.015.076l-.01.039a.488.488 0 01-.059.165.325.325 0 00-.015.036c-.006.017-.012.033-.021.048L20.43 7.574c-.003.004-.006.007-.01.009a.027.027 0 00-.01.008.593.593 0 01-.481.263h-2.972l-1.053 1.054zm-1.821 1.818l.353-.354 1.468-1.464-.83-.865-.002-.001-2.314 2.314c-.619-.474-1.51-.801-2.795-.832-.16-.003-.62-.006-.62-.006-4.067.037-4.067 3.34-4.067 4.423 0 1.093 0 4.415 4.138 4.473l.19.003.415-.003c4.15-.072 4.15-3.35 4.15-4.425 0-.566-.005-1.731-.607-2.731l.521-.532zm6.042-4.748l-.67.826h-1.448l.84-.84 1.278.014zm-2.272-.723V3.689l-.753.661v1.658l.753-.753zm-9.291 7.709a.6.6 0 01.546-.65c.35-.02.625.215.65.546l.04.448 2.095-2.095c-.457-.297-1.087-.47-1.967-.49a56.309 56.309 0 00-.588-.006c-2.381.022-2.868 1.305-2.868 3.221 0 1.939.501 3.238 2.952 3.272l.185.003.392-.003c2.457-.045 2.96-1.322 2.96-3.224 0-.714-.07-1.339-.29-1.849l-1.93 1.93.526.009a.6.6 0 01-.011 1.201h-.011l-1.941-.033a.061.061 0 01-.02-.005 1.711 1.711 0 00-.042-.006c-.046-.004-.091-.009-.135-.026l-.01-.005-.012-.006a.15.15 0 01-.03-.015l-.018-.01a.59.59 0 01-.128-.09l-.004-.003c-.015-.013-.028-.023-.041-.039a.654.654 0 01-.101-.157l-.008-.016a.668.668 0 01-.04-.168l-.151-1.734z"
      ></path>
    </svg>
  );
};

DartboardFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DartboardFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DartboardFilled;
