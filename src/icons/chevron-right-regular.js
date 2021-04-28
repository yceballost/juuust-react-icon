import React from 'react';
import PropTypes from 'prop-types';

const ChevronRightRegular = props => {
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
      <path d="M9.839 20a.823.823 0 01-.617-.285.928.928 0 01.048-1.256l6.651-6.518-6.646-6.392a.928.928 0 01-.055-1.257.804.804 0 011.163-.08l.02.018 7.323 7.046a.905.905 0 01.274.654.913.913 0 01-.268.658l-7.325 7.175A.803.803 0 019.84 20z"></path>
    </svg>
  );
};

ChevronRightRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronRightRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronRightRegular;
