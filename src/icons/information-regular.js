import React from 'react';
import PropTypes from 'prop-types';

const InformationRegular = props => {
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
        d="M12 1C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1zm-1.375 5.958a1.375 1.375 0 112.75 0 1.375 1.375 0 01-2.75 0zm0 4.675c0-.809.616-1.466 1.375-1.466s1.375.657 1.375 1.466v4.4c0 .81-.616 1.467-1.375 1.467s-1.375-.656-1.375-1.467v-4.4zM2.833 12A9.177 9.177 0 0012 21.167 9.177 9.177 0 0021.167 12 9.177 9.177 0 0012 2.833 9.177 9.177 0 002.833 12z"
      ></path>
    </svg>
  );
};

InformationRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InformationRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InformationRegular;
