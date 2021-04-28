import React from 'react';
import PropTypes from 'prop-types';

const WaterDropRegular = props => {
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
        d="M11.846 2.176a.626.626 0 01.871 0c.815.83 6.546 7.793 6.563 12.404.011 4.437-2.588 7.092-6.952 7.106h-.034c-2.132 0-3.893-.641-5.098-1.857-1.21-1.224-1.854-3.022-1.86-5.207-.014-4.291 5.182-11.095 6.51-12.446zm.443 18.258h.033c3.7-.011 5.734-2.09 5.72-5.851-.011-3.488-4.149-9.14-5.768-11.04-1.775 2.07-5.722 7.751-5.711 11.076.006 1.871.51 3.325 1.496 4.322.983.992 2.406 1.493 4.23 1.493z"
      ></path>
    </svg>
  );
};

WaterDropRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WaterDropRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WaterDropRegular;
