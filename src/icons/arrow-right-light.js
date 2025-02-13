import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightLight = props => {
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
        d="M11.454 21.747c.112.045.23.067.35.067.314 0 .642-.148.902-.423l8.975-8.93c.135-.129.205-.271.205-.426.003-.173-.084-.344-.264-.518L12.718 2.56c-.367-.375-.801-.496-1.185-.33-.41.173-.67.641-.653 1.165l.023 3.518c0 .081-.079.146-.174.146l-6.902-.003h-.006c-.554.008-.958.154-1.238.443-.302.313-.437.764-.425 1.425v6.219c-.017.574.134 1.042.44 1.353.293.3.705.448 1.229.44h6.9c.094 0 .173.064.173.145l.005 3.779c-.005.414.2.745.55.888zm-.728-5.403H3.824h-.002v.005c-.356.006-.625-.084-.802-.263-.24-.247-.28-.639-.271-.924V8.918c-.009-.488.075-.818.26-1.009.165-.17.434-.257.82-.263l6.9.003a.75.75 0 00.762-.737l-.023-3.524V3.38c-.01-.275.113-.53.295-.608.201-.087.42.09.532.205l8.907 8.96.003.003c.042.04.065.07.076.087-.003.003-.006.008-.011.011l-.006.006-8.975 8.935c-.002 0-.002.002-.003.003l-.002.003c-.236.25-.474.272-.608.218-.12-.047-.185-.168-.182-.336v-.005l-.006-3.782a.75.75 0 00-.762-.736z"
      ></path>
    </svg>
  );
};

ArrowRightLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightLight;
