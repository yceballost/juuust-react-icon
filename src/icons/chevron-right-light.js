import React from 'react';
import PropTypes from 'prop-types';

const ChevronRightLight = props => {
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
      <path d="M9.613 20a.583.583 0 01-.442-.198.644.644 0 010-.875l7.356-6.99-7.318-6.865A.635.635 0 019.17 4.2a.585.585 0 01.846-.037l7.794 7.312a.645.645 0 01.025.886l-.024.025-7.795 7.46a.61.61 0 01-.404.154z"></path>
    </svg>
  );
};

ChevronRightLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronRightLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronRightLight;
