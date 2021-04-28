import React from 'react';
import PropTypes from 'prop-types';

const MenuLight = props => {
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
        d="M2.74 5.737a.575.575 0 01-.58-.568c0-.314.26-.569.58-.569h18.53c.319 0 .58.255.58.569 0 .313-.261.568-.58.568H2.74zm18.526 5.678c.32 0 .58.255.58.569 0 .314-.26.569-.58.569H2.74a.575.575 0 01-.58-.57c0-.313.26-.568.58-.568h18.526zm.58 7.384a.575.575 0 00-.58-.569H2.74c-.32 0-.58.255-.58.569 0 .314.26.569.58.569h18.526c.32 0 .58-.255.58-.569z"
      ></path>
    </svg>
  );
};

MenuLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MenuLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MenuLight;
