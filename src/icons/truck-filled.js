import React from 'react';
import PropTypes from 'prop-types';

const TruckFilled = props => {
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
        d="M18.174 7.745c.37.527 2.557 3.555 2.832 3.922.249.327.708.946.705 1.675v2.969c0 .538-.224 1.07-.61 1.482-.395.411-.916.644-1.423.644h-.869c-.193 1.538-1.255 2.468-2.854 2.468-1.608 0-2.67-.928-2.863-2.468H9.157c-.193 1.538-1.255 2.468-2.854 2.468-1.608 0-2.67-.928-2.872-2.468-.778-.014-1.406-.678-1.406-1.488V5.171c0-.82.642-1.49 1.432-1.49l10.621.008c.788 0 1.432.661 1.432 1.482v1.613l.82-.008h.009c.709 0 1.426.384 1.835.97zM6.305 19.65c-1.126 0-1.697-.594-1.697-1.756 0-1.171.571-1.765 1.697-1.765 1.118 0 1.69.594 1.69 1.764 0 1.163-.572 1.757-1.69 1.757zm9.65 0c-1.126 0-1.697-.594-1.697-1.756 0-1.171.571-1.765 1.697-1.765 1.118 0 1.69.594 1.69 1.764 0 1.163-.572 1.757-1.69 1.757z"
      ></path>
    </svg>
  );
};

TruckFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TruckFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TruckFilled;
