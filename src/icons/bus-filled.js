import React from 'react';
import PropTypes from 'prop-types';

const BusFilled = props => {
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
        d="M15.504 4.525c.081-.003 2.448.006 4.255 1.818 1.297 1.303 1.955 3.174 1.947 5.563v3.381c0 .58-.252 1.168-.692 1.61-.44.446-1.025.701-1.6.701h-.224c-.453 1.065-1.445 1.692-2.82 1.692-1.376 0-2.367-.627-2.821-1.692H9.686c-.454 1.065-1.445 1.692-2.82 1.692-1.39 0-2.393-.639-2.838-1.728A2.336 2.336 0 012.72 16.9c-.443-.443-.695-1.031-.695-1.611V6.836c0-.583.252-1.17.695-1.613.44-.443 1.025-.698 1.6-.698h11.184zm-.588 5.639c.146-.008 3.482-.137 5.594 1.888v-.146c0-6.084-4.801-6.17-5.006-6.17h-1.053v4.428h.465zm1.46 7.913c-1.261 0-1.9-.644-1.9-1.913 0-1.269.639-1.913 1.9-1.913 1.26 0 1.898.644 1.898 1.913 0 1.269-.638 1.913-1.899 1.913zm-3.127-7.913H8.86V5.735h4.39v4.429zm-6.38 7.913c-1.261 0-1.9-.644-1.9-1.913 0-1.269.639-1.913 1.9-1.913 1.26 0 1.899.644 1.899 1.913 0 1.269-.64 1.913-1.9 1.913zM3.231 6.833v3.33h4.426V5.736H4.322c-.258 0-.532.126-.748.345-.213.216-.342.496-.342.753z"
      ></path>
    </svg>
  );
};

BusFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BusFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BusFilled;
