import React from 'react';
import PropTypes from 'prop-types';

const ShieldCheckedOkFilled = props => {
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
        d="M20.603 5.168V5.14l-.009-.076a.62.62 0 00-.711-.51c-1.633.258-2.488-.313-3.566-1.036h-.001c-1.061-.712-2.26-1.515-4.324-1.518h-.006c-2.053 0-3.252.798-4.31 1.5l-.017.013-.009.005c-1.074.72-1.926 1.29-3.535 1.037a.595.595 0 00-.74.582c-.002.27-.019 6.617.457 9.362.622 3.61 7.605 6.986 7.902 7.128a.6.6 0 00.51 0c.297-.14 7.289-3.515 7.91-7.126.455-2.682.45-8.806.449-9.333zm-12.107 6.53l2.006 2.027s4.98-5.042 4.983-5.039l.008-.008a.592.592 0 01.835.008.607.607 0 010 .852l-5.406 5.468-.003.002a.593.593 0 01-.837-.002l-2.429-2.457a.607.607 0 010-.851l.008-.009a.592.592 0 01.835.008z"
      ></path>
    </svg>
  );
};

ShieldCheckedOkFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldCheckedOkFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldCheckedOkFilled;
