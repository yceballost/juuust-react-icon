import React from 'react';
import PropTypes from 'prop-types';

const EyeRegular = props => {
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
        d="M21.715 12.704c-.194.239-4.83 5.774-9.678 5.774-4.849 0-9.535-5.535-9.731-5.77a.592.592 0 01-.003-.76l.003-.003c.235-.279 4.874-5.77 9.706-5.77 4.851 0 9.506 5.538 9.703 5.773a.592.592 0 010 .756zm-9.678 4.58c3.602 0 7.3-3.736 8.409-4.955-1.115-1.218-4.835-4.96-8.435-4.96-3.602 0-7.319 3.736-8.434 4.957 1.124 1.219 4.86 4.958 8.46 4.958zm2.456-4.874c0-2.252-1.893-2.442-2.38-2.453-.07-.003-.157-.003-.233-.003-.502.003-2.353.17-2.353 2.442 0 2.275 1.871 2.451 2.37 2.46.075 0 .151 0 .227-.003.473-.008 2.37-.185 2.37-2.443z"
      ></path>
    </svg>
  );
};

EyeRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EyeRegular;
