import React from 'react';
import PropTypes from 'prop-types';

const EmailRegular = props => {
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
        d="M21.843 7.07l-.014 9.776c.028.216.062.888-.392 1.437-.246.294-.728.653-1.619.667-.518.011-2.468.014-4.835.014a5865.107 5865.107 0 01-11.092-.014c-.048.014-.661-.003-1.151-.479-.384-.372-.577-.908-.577-1.588V7.084c-.006-.067-.045-.977.526-1.577.303-.319.72-.487 1.202-.487l16.246.003c.482-.028 1.662.336 1.706 2.047zM3.888 6.216l16.263.003c.014 0 .342.011.451.552l-7.826 4.717c-.966.63-1.835.039-1.9-.009l-7.49-4.708c.026-.163.08-.342.18-.448.05-.048.132-.107.322-.107zm16.614 11.311c-.154.182-.471.224-.706.23-1.136.019-9.444.008-13.586.002h-.003a1205.98 1205.98 0 00-2.33-.002.53.53 0 01-.297-.138c-.18-.173-.216-.495-.216-.733V8.174l6.832 4.294c.042.031.723.513 1.661.513.47 0 1.009-.123 1.563-.485l7.216-4.347-.011 8.737.008.095v.013c.005.063.025.351-.131.533z"
      ></path>
    </svg>
  );
};

EmailRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmailRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmailRegular;
