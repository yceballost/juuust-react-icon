import React from 'react';
import PropTypes from 'prop-types';

const SearchRegular = props => {
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
        d="M9.871 17.605A7.846 7.846 0 014.322 4.21a7.848 7.848 0 0111.473 10.677l5.704 5.704a.561.561 0 01-.793.793l-5.697-5.697a7.792 7.792 0 01-5.138 1.918zm0-14.571a6.726 6.726 0 00-4.756 11.482 6.728 6.728 0 009.512-.037 6.724 6.724 0 000-9.473 6.671 6.671 0 00-4.756-1.972z"
      ></path>
    </svg>
  );
};

SearchRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchRegular;
