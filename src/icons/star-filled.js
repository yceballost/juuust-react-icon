import React from 'react';
import PropTypes from 'prop-types';

const StarFilled = props => {
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
      <path d="M16.613 21.664a2.07 2.07 0 01-1.005-.26l-3.56-1.953c-.138-.065-.252-.081-.39.008l-3.546 1.944a2.079 2.079 0 01-2.216-.129 2.218 2.218 0 01-.899-2.19l.664-4.028c.064-.317.011-.392-.18-.591L2.67 11.608a2.234 2.234 0 01-.52-2.292A2.152 2.152 0 013.862 7.85l3.896-.591c.238-.045.308-.079.457-.381L9.938 3.24a2.111 2.111 0 011.922-1.238c.826 0 1.563.476 1.924 1.238l1.731 3.655c.14.264.185.322.49.367l3.858.586c.795.12 1.45.683 1.714 1.467.272.801.07 1.69-.521 2.292l-2.712 2.73c-.31.312-.322.34-.271.715l.65 4.03a2.223 2.223 0 01-.9 2.191c-.352.252-.775.39-1.21.39z"></path>
    </svg>
  );
};

StarFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StarFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StarFilled;
