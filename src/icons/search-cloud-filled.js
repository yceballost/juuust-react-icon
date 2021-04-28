import React from 'react';
import PropTypes from 'prop-types';

const SearchCloudFilled = props => {
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
        d="M21.686 10.975c0 3.868-2.837 5.24-5.266 5.24l-.395.003a4.621 4.621 0 01-.644 1.073l3.33 3.364a.609.609 0 010 .857l-.005.006a.598.598 0 01-.846-.006l-3.336-3.364c-.003-.002-.005-.007-.007-.01l-.007-.012a4.603 4.603 0 01-2.737.907 4.635 4.635 0 01-4.24-2.787l-1.66.003C3.427 16 2 14.38 2 11.91c0-2.526 1.387-3.574 2.457-4.002C4.647 2.288 9.86 2 10.922 2c.823 0 4.865.188 6.109 3.784 2.325.216 4.655 1.67 4.655 5.19zM8.34 14.353a3.468 3.468 0 003.462 3.462 3.463 3.463 0 000-6.927 3.467 3.467 0 00-3.462 3.465z"
      ></path>
    </svg>
  );
};

SearchCloudFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchCloudFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchCloudFilled;
