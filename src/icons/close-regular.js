import React from 'react';
import PropTypes from 'prop-types';

const CloseRegular = props => {
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
        d="M18.829 6.352a.843.843 0 00-1.268-1.105L12 10.808 6.439 5.247l-.087-.076A.843.843 0 005.247 6.44L10.808 12l-5.561 5.561-.076.087a.843.843 0 001.268 1.105L12 13.192l5.561 5.561.087.076a.843.843 0 001.105-1.268L13.192 12l5.561-5.561.076-.087z"
      ></path>
    </svg>
  );
};

CloseRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloseRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloseRegular;
