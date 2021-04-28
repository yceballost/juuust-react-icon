import React from 'react';
import PropTypes from 'prop-types';

const TagFilled = props => {
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
        d="M20.345 2c.739.003 1.336.602 1.341 1.339v.003h-.005v8.308c-.076.42-.28.804-.589 1.1l-8.327 8.27c-.275.327-.647.56-1.062.66a1.498 1.498 0 01-.274 0 1.13 1.13 0 01-.83-.33l-8.288-8.269a1.553 1.553 0 01.291-2.157l8.336-8.327A2.13 2.13 0 0112 2h8.345zM15.66 5.555c-.32.277-.515.672-.546 1.092v.022c.033.432.235.835.563 1.118.291.325.697.521 1.134.546a1.605 1.605 0 001.118-.546c.32-.274.512-.664.538-1.084a1.655 1.655 0 00-.563-1.132 1.652 1.652 0 00-1.135-.554c-.428.02-.829.213-1.109.538z"
      ></path>
    </svg>
  );
};

TagFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TagFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TagFilled;
