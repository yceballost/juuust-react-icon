import React from 'react';
import PropTypes from 'prop-types';

const AccesibilityLight = props => {
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
        d="M16.359 15.964l5.322 5.322c.112.109.112.285.003.392a.287.287 0 01-.2.081.275.275 0 01-.198-.081l-5.488-5.487c-1.285.498-2.577.748-3.868.748-3.269 0-6.532-1.603-9.692-4.762a.282.282 0 010-.398c1.75-1.75 3.53-3.028 5.322-3.824L2.238 2.633a.279.279 0 11.395-.395l5.488 5.49c1.285-.498 2.577-.748 3.868-.748 3.269 0 6.532 1.603 9.692 4.762.05.054.081.126.081.2a.282.282 0 01-.081.198c-1.75 1.75-3.53 3.028-5.322 3.824zm4.728-4.028c-2.989-2.92-6.048-4.4-9.098-4.4-1.143 0-2.289.21-3.431.621l.873.874c.622-.507 1.457-.762 2.49-.762 1.127 0 2.02.305 2.653.908.67.635 1.009 1.568 1.009 2.773 0 1.033-.252 1.868-.748 2.487l1.098 1.095c1.728-.73 3.45-1.932 5.154-3.596zm-9.151-.804c-.132 0-.25.017-.356.056l-1.75-1.75c.515-.399 1.215-.6 2.089-.6 1.414 0 3.1.54 3.1 3.117 0 .874-.195 1.575-.588 2.087l-1.72-1.72c.034-.1.054-.218.054-.353.003-.574-.325-.837-.83-.837zm-9.104.848c2.989 2.92 6.048 4.401 9.098 4.401a10.01 10.01 0 003.431-.622L7.986 8.384c-1.728.73-3.45 1.933-5.154 3.596z"
      ></path>
    </svg>
  );
};

AccesibilityLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccesibilityLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccesibilityLight;
