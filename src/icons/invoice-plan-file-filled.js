import React from 'react';
import PropTypes from 'prop-types';

const InvoicePlanFileFilled = props => {
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
        d="M18.845 7.336l-5.463-5.182A.56.56 0 0013 2H5.618c-.569 0-1.107.538-1.107 1.106v17.48c0 .588.518 1.106 1.107 1.106h12.297c.588 0 1.106-.518 1.106-1.107V7.742a.56.56 0 00-.176-.406zM15.31 18.681H8.209a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56h7.1c.309 0 .56.251.56.56 0 .308-.251.56-.56.56zm-7.101-3.006h7.1c.309 0 .56-.252.56-.56a.562.562 0 00-.56-.56h-7.1a.562.562 0 00-.56.56c0 .308.252.56.56.56zm7.1-3.003h-7.1a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h7.1c.309 0 .56.252.56.56 0 .308-.251.56-.56.56zM13.867 7.14c.384.384.93.588 1.583.588h2.182L13.279 3.6v1.958c0 .65.204 1.2.588 1.583z"
      ></path>
    </svg>
  );
};

InvoicePlanFileFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InvoicePlanFileFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InvoicePlanFileFilled;
