import React from 'react';
import PropTypes from 'prop-types';

const AdnFilled = props => {
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
        d="M16.522 11.993c0-2.263-1.613-3.554-3.302-4.61 1.689-1.057 3.302-2.348 3.302-4.611a.634.634 0 00-.644-.622.633.633 0 00-.644.622c0 1.84-1.46 2.823-3.221 3.877C10.25 5.593 8.79 4.612 8.79 2.772a.635.635 0 00-.644-.622.633.633 0 00-.644.622c0 2.263 1.613 3.554 3.302 4.61-1.689 1.057-3.302 2.35-3.302 4.611 0 1.165.428 2.07 1.07 2.82.039.063.09.116.148.16.589.634 1.325 1.157 2.082 1.628-1.69 1.056-3.303 2.347-3.303 4.61 0 .342.289.623.644.623a.633.633 0 00.645-.622c0-1.84 1.462-2.821 3.22-3.877 1.76 1.056 3.222 2.04 3.222 3.877 0 .341.289.622.644.622a.633.633 0 00.645-.622c0-2.264-1.614-3.555-3.303-4.611 1.692-1.053 3.305-2.345 3.305-4.608zm-7.086 1.88a2.986 2.986 0 01-.577-1.244h6.305a3.039 3.039 0 01-.577 1.244H9.436zm2.574-5.76c-.432.261-.843.522-1.224.785h2.45a21.17 21.17 0 00-1.226-.784z"
      ></path>
    </svg>
  );
};

AdnFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AdnFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AdnFilled;
