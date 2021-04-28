import React from 'react';
import PropTypes from 'prop-types';

const PoundFilled = props => {
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
        d="M21.846 12.006c0-6.443-3.406-9.846-9.846-9.846-6.437 0-9.84 3.403-9.84 9.846 0 6.437 3.4 9.84 9.84 9.84 6.443 0 9.846-3.403 9.846-9.84zm-11.714 4.54h4.712c.22 0 .403.18.406.407v.431a.403.403 0 01-.404.403H8.678a.4.4 0 01-.358-.218.922.922 0 01-.093-.423c0-.445.233-.672.698-1.118.868-.84 1.039-1.437 1.039-2.182 0-.482-.076-.963-.244-1.526h-.997a.402.402 0 01-.403-.404v-.271c0-.213.165-.39.375-.404l.661-.045c-.16-.543-.302-1.221-.302-1.93 0-2.162 1.288-3.4 3.54-3.4.572 0 1.496.081 2.224.305.168.053.283.21.283.387v.364a.402.402 0 01-.476.398c-.684-.13-1.347-.202-1.871-.202-1.639 0-2.403.678-2.403 2.134 0 .642.153 1.289.324 1.86h2.482c.224 0 .403.182.403.404v.397c0 .224-.179.404-.403.404h-2.11c.133.524.2 1.042.2 1.54 0 1.062-.297 1.818-1.115 2.69z"
      ></path>
    </svg>
  );
};

PoundFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PoundFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PoundFilled;
