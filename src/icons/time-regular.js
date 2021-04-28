import React from 'react';
import PropTypes from 'prop-types';

const TimeRegular = props => {
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
        d="M11.99 2.15c6.219 0 9.846 3.14 9.846 9.846 0 6.706-3.627 9.84-9.846 9.84-6.218 0-9.84-3.134-9.84-9.84 0-6.706 3.622-9.846 9.84-9.846zm0 18.457c5.799 0 8.617-2.818 8.617-8.611 0-5.798-2.818-8.616-8.617-8.616-5.792 0-8.61 2.818-8.61 8.616 0 5.793 2.818 8.61 8.61 8.61zm3.468-5.746L12.61 12.01l.003-3.846a.616.616 0 00-1.232 0v4.1c0 .163.064.32.179.435l3.03 3.03.032.032a.613.613 0 00.868-.031.612.612 0 00-.03-.869z"
      ></path>
    </svg>
  );
};

TimeRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TimeRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TimeRegular;
