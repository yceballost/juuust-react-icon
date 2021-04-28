import React from 'react';
import PropTypes from 'prop-types';

const PercentRegular = props => {
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
        d="M21.836 11.996c0-6.706-3.627-9.846-9.846-9.846-6.218 0-9.84 3.14-9.84 9.846 0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zm-9.846 8.61c5.796 0 8.617-2.818 8.617-8.61 0-5.798-2.818-8.616-8.617-8.616-5.792 0-8.61 2.818-8.61 8.616 0 5.792 2.818 8.61 8.61 8.61zm3.827-13.56a.571.571 0 00-.801.104l-6.944 8.927a.575.575 0 10.907.706l6.941-8.93a.572.572 0 00-.1-.804l-.003-.003zM9.67 10.937c-1.048 0-1.655-.53-1.655-1.655 0-1.13.61-1.659 1.655-1.659s1.658.53 1.658 1.659c0 1.128-.613 1.655-1.658 1.655zm-.507-1.655c0-.457.05-.507.507-.507.451 0 .507.056.507.507 0 .456-.05.507-.507.507s-.507-.054-.507-.507zm5.151 3.89c1.045 0 1.659.53 1.659 1.659 0 1.128-.611 1.655-1.659 1.655-1.044 0-1.655-.527-1.655-1.655 0-1.132.608-1.659 1.655-1.659zm0 2.163c.457 0 .51-.054.51-.507 0-.451-.056-.507-.51-.507-.456 0-.507.05-.507.507 0 .454.05.507.507.507z"
      ></path>
    </svg>
  );
};

PercentRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PercentRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PercentRegular;
