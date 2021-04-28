import React from 'react';
import PropTypes from 'prop-types';

const InfinityLight = props => {
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
        d="M17.975 7.833c1.143.003 2.084.381 2.728 1.095.642.715.98 1.76.983 3.017-.008 2.563-1.395 4.09-3.711 4.09h-.02c-2.1-.009-5.115-2.546-6.112-3.488-.997.942-4.008 3.48-6.115 3.488h-.016c-1.135 0-2.073-.373-2.718-1.079-.647-.708-.991-1.75-.994-3.01-.003-1.261.336-2.303.978-3.018.641-.711 1.585-1.092 2.728-1.095h.008c2.104 0 5.126 2.544 6.126 3.488.998-.944 4.023-3.488 6.126-3.488h.009zm-.006 7.289h-.017c-1.627-.006-4.397-2.146-5.501-3.188 1.106-1.042 3.885-3.188 5.513-3.188h.005c.93.003 1.653.28 2.143.827.493.546.74 1.341.737 2.37-.003 2.05-1.028 3.179-2.88 3.179zm-6.75-3.185c-1.101 1.036-3.869 3.18-5.5 3.185h-.016c-.924 0-1.641-.275-2.132-.813-.495-.54-.747-1.336-.75-2.364-.003-1.025.243-1.823.736-2.37C4.05 9.03 4.77 8.753 5.7 8.75h.006c1.627 0 4.406 2.143 5.513 3.188z"
      ></path>
    </svg>
  );
};

InfinityLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InfinityLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InfinityLight;
