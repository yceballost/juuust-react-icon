import React from 'react';
import PropTypes from 'prop-types';

const TravelBagFilled = props => {
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
        d="M15.074 5.992h1.376c.647 0 1.212.63 1.212 1.35v12.39c0 .733-.554 1.352-1.212 1.352h-1.045c-.082.549-.558.6-.687.602h-.067c-.134-.003-.605-.053-.686-.602H9.909c-.081.549-.557.6-.686.602h-.068c-.134 0-.605-.053-.686-.602H7.388c-.658 0-1.213-.619-1.213-1.353V7.341c0-.72.569-1.35 1.213-1.35h1.375V2.883c0-.479.415-.882.91-.882h4.49c.485 0 .911.412.911.882v3.11zM8.66 11.437h6.52s0-1.706.003-1.706c0-.6-.347-1.221-.924-1.221H9.584c-.577 0-.924.622-.924 1.221v1.706zm6.52 6.011c0 .698-.397 1.221-.92 1.221H9.583c-.527 0-.924-.523-.924-1.22V12.52h6.523v4.927h-.002zM13.846 5.983h-3.85V3.218h3.85v2.765z"
      ></path>
    </svg>
  );
};

TravelBagFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TravelBagFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TravelBagFilled;
