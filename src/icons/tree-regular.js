import React from 'react';
import PropTypes from 'prop-types';

const TreeRegular = props => {
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
        d="M10.922 2c.823 0 4.862.188 6.109 3.776 2.328.216 4.655 1.667 4.655 5.18 0 3.882-2.837 5.26-5.266 5.26l-4.039.025v4.837a.609.609 0 01-.605.608.607.607 0 01-.605-.608v-4.834H6.34C4.245 16.244 2 15.098 2 11.888 2 9.37 3.384 8.325 4.454 7.894 4.647 2.289 9.86 2 10.922 2zm1.459 13.025l4.04-.025c.951 0 4.058-.291 4.055-4.042 0-3.504-2.74-3.958-3.919-3.992a.607.607 0 01-.565-.45c-.838-3.138-4.373-3.298-5.073-3.298-1.236 0-5.264.359-5.264 5l.006.099a.607.607 0 01-.44.596c-1.336.381-2.014 1.384-2.014 2.975 0 2.832 2.194 3.137 3.135 3.137h4.826v-.297L8.77 12.303a.61.61 0 01.003-.86l.006-.006a.602.602 0 01.851.008l1.538 1.558V9.429a.605.605 0 111.21 0v1.033l1.193-1.627.003-.003a.603.603 0 01.843-.123c.27.201.328.58.13.851l-2.144 2.922c-.002.004-.007.007-.01.01-.005.002-.01.005-.012.01v2.523z"
      ></path>
    </svg>
  );
};

TreeRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TreeRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TreeRegular;
