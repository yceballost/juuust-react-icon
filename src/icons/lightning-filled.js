import React from 'react';
import PropTypes from 'prop-types';

const LightningFilled = props => {
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
      <path d="M18.121 11.45a.6.6 0 00-.434-.428l-4.504-1.11 2.723-6.904a.625.625 0 00-.23-.745.582.582 0 00-.754.092l-8.916 9.569a.628.628 0 00-.143.597.6.6 0 00.432.422l4.112 1.017-2.698 7.05a.622.622 0 00.23.737.58.58 0 00.748-.08l9.286-9.617a.627.627 0 00.148-.6z"></path>
    </svg>
  );
};

LightningFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LightningFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LightningFilled;
