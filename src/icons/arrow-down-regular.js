import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRegular = props => {
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
        d="M11.81 21.734h.005c.356 0 .599-.243.69-.334l.002-.002 8.711-8.659c.435-.423.589-.904.42-1.322-.097-.243-.389-.652-1.246-.658h-.005l-3.564.006a.472.472 0 01-.053-.157l.003-6.712v-.008c-.008-.417-.064-1.017-.487-1.426-.42-.406-1.026-.445-1.446-.437H8.798c-.616-.017-1.07.126-1.392.443-.322.316-.476.77-.468 1.386l-.02 6.883a.227.227 0 01-.055.039l-3.65.003h-.017c-.499 0-.913.263-1.09.694-.201.49-.042 1.082.407 1.507l8.703 8.48a.82.82 0 00.594.274zm-8.695-9.849a.168.168 0 01.078-.014c.003 0 .006 0 .006-.003h.008l3.678-.002c.507 0 1.12-.471 1.12-1.056l.02-6.956v-.008c-.003-.207.02-.476.14-.597.124-.117.395-.134.603-.129h6.083c.345-.008.577.037.673.13.095.092.148.319.154.655l-.003 6.708c0 .437.342 1.247.994 1.247l3.712-.006c.064 0 .118.006.16.012a.867.867 0 01-.09.098l-.006.005-8.619 8.566-8.557-8.336-.006-.006c-.165-.157-.162-.288-.148-.308z"
      ></path>
    </svg>
  );
};

ArrowDownRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownRegular;
