import React from 'react';
import PropTypes from 'prop-types';

const TreeFilled = props => {
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
      <path d="M17.03 5.773C15.785 2.185 11.746 2 10.923 2c-1.062 0-6.275.289-6.468 5.894C3.384 8.322 2 9.367 2 11.888c0 3.21 2.244 4.353 4.342 4.353h4.832v-1.51l-2.398-2.426a.612.612 0 01.003-.86.603.603 0 01.854.003l1.54 1.558V9.43a.605.605 0 111.21 0v1.034l1.194-1.627a.605.605 0 11.972.722l-2.143 2.922c-.005.008-.017.011-.022.02v3.728l-1.207.01v4.836a.605.605 0 101.21 0v-4.838l4.039-.025c2.431 0 5.266-1.378 5.266-5.26-.006-3.51-2.334-4.961-4.661-5.18z"></path>
    </svg>
  );
};

TreeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TreeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TreeFilled;
