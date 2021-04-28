import React from 'react';
import PropTypes from 'prop-types';

const InvoicePlanFileRegular = props => {
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
        d="M5.618 21.692h12.297c.588 0 1.106-.518 1.106-1.107V7.742c0-.154-.062-.3-.174-.406l-5.462-5.182A.566.566 0 0013 2H5.617c-.569 0-1.107.538-1.107 1.106v17.48c0 .588.518 1.106 1.107 1.106zm12.277-1.12H5.645c-.005-.003-.01-.009-.013-.012V3.143a.085.085 0 01.022-.023h6.504v2.437c0 .956.32 1.776.916 2.376.597.6 1.42.916 2.376.916h2.45v11.717l-.005.005zM13.279 5.556V3.6l4.353 4.13h-2.183c-.65 0-1.198-.205-1.582-.589-.384-.384-.588-.93-.588-1.583zm2.03 7.115h-7.1a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h7.1c.309 0 .56.252.56.56 0 .308-.251.56-.56.56zm-7.1 3.006h7.1c.309 0 .56-.252.56-.56a.562.562 0 00-.56-.56h-7.1a.562.562 0 00-.56.56c0 .308.252.56.56.56zm0 3.003h7.1c.309 0 .56-.253.56-.56a.562.562 0 00-.56-.56h-7.1a.562.562 0 00-.56.56c0 .308.252.56.56.56z"
      ></path>
    </svg>
  );
};

InvoicePlanFileRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InvoicePlanFileRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InvoicePlanFileRegular;
