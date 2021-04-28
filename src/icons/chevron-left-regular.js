import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeftRegular = props => {
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
      <path d="M16.068 20a.96.96 0 01-.627-.23l-8.133-7.05a.858.858 0 01-.05-1.273c.013-.014.028-.025.042-.04l8.137-7.17a.964.964 0 011.297.029l.02.02a.861.861 0 01-.054 1.257L9.31 12.06l7.385 6.393c.38.33.407.892.06 1.257a.964.964 0 01-.687.291z"></path>
    </svg>
  );
};

ChevronLeftRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronLeftRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronLeftRegular;
