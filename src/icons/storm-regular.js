import React from 'react';
import PropTypes from 'prop-types';

const StormRegular = props => {
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
        d="M11.072 2.15c.823 0 4.862.19 6.109 3.793 2.328.218 4.655 1.675 4.655 5.201 0 3.88-2.834 5.255-5.266 5.255l-1.728.009-4.992 5.238a.594.594 0 01-.756.092c-.244-.154-.345-.46-.244-.731l1.675-4.499-.322-.072a.197.197 0 00-.009.002c-.006.002-.01.003-.016.003l-3.683.017c-2.101 0-4.345-1.148-4.345-4.372 0-2.536 1.384-3.583 2.454-4.015.193-5.63 5.406-5.921 6.468-5.921zm5.493 13.03l-.555.004.028-.031a.613.613 0 00-.303-1.02l-2.832-.641 1.69-4.404a.616.616 0 00-.244-.74.601.601 0 00-.762.102l-5.941 6.462a.59.59 0 00-.146.316l-1.008.003c-.941 0-3.132-.308-3.132-3.151 0-1.6.678-2.605 2.014-2.989a.61.61 0 00.44-.588l-.006-.112c0-4.661 4.031-5.025 5.266-5.025.7 0 4.236.16 5.073 3.31.07.261.3.446.566.454 1.18.034 3.916.49 3.916 4.012 0 3.747-3.107 4.039-4.064 4.039zm-4.7.597a.614.614 0 00-.401-.305l-2.219-.504 3.082-3.35-.804 2.095a.612.612 0 00.43.818l2.472.557-3.415 3.58.888-2.386a.611.611 0 00-.034-.505z"
      ></path>
    </svg>
  );
};

StormRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StormRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StormRegular;
