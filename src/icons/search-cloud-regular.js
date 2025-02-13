import React from 'react';
import PropTypes from 'prop-types';

const SearchCloudRegular = props => {
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
        d="M21.686 10.975c0 3.868-2.837 5.24-5.266 5.24l-.398.006a4.627 4.627 0 01-.644 1.073l3.33 3.359a.612.612 0 010 .86.6.6 0 01-.85 0l-3.334-3.365c-.003-.002-.005-.006-.007-.01a.044.044 0 00-.007-.012 4.579 4.579 0 01-2.737.908 4.635 4.635 0 01-4.24-2.787l-1.66.002C3.427 16 2 14.38 2 11.91c0-2.526 1.387-3.574 2.457-4.002C4.647 2.288 9.86 2 10.922 2c.823 0 4.865.188 6.109 3.784 2.325.216 4.655 1.67 4.655 5.19zm-15.75 4.061c-1.244-.128-2.732-.775-2.732-3.126 0-1.596.678-2.602 2.017-2.983a.61.61 0 00.437-.585l-.005-.112c0-4.656 4.033-5.014 5.269-5.014.7 0 4.238.16 5.075 3.305.07.26.3.443.566.451 1.18.034 3.919.49 3.919 4.003 0 3.736-3.11 4.028-4.065 4.028h-.056a4.94 4.94 0 00.048-.647c0-2.583-2.076-4.678-4.636-4.678s-4.639 2.095-4.639 4.678c0 .23.023.454.054.678l-1.252.002zm5.837 2.78c-1.893 0-3.434-1.555-3.434-3.463 0-1.91 1.54-3.462 3.434-3.462 1.894 0 3.431 1.554 3.431 3.462.003 1.91-1.537 3.462-3.43 3.462z"
      ></path>
    </svg>
  );
};

SearchCloudRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchCloudRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchCloudRegular;
