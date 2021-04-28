import React from 'react';
import PropTypes from 'prop-types';

const TrainFilled = props => {
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
        d="M2.347 16.974a.757.757 0 01-.177-.49V5.267c0-.384.269-.697.602-.697H13.11c.117-.004 3.392-.094 7.204 4.312 1.135 1.311 1.65 2.667 1.53 4.026-.171 1.936-1.583 3.276-2.407 3.904a1.87 1.87 0 01-1.132.393h-.017c-1.009-.01-4.54-.029-15.515-.029a.568.568 0 01-.425-.203zm17.708-6.305a6.333 6.333 0 00-.591-.801c-2.205-2.544-4.167-3.431-5.301-3.742v4.543h5.892zm-1.28 4.98c.224-.17.577-.471.919-.864H3.374v1.001c10.508 0 13.932.02 14.921.029h.009a.755.755 0 00.47-.165zM5.378 10.594H3.375V7.371h2.003v3.222zm1.39 0h2.155V7.371H6.768v3.222zm5.573 0h-2.157V7.371h2.157v3.222zm9.519 8.13c0-.386-.27-.697-.603-.697H2.772c-.333 0-.602.31-.602.697 0 .387.269.697.602.697h18.485c.334 0 .603-.31.603-.697z"
      ></path>
    </svg>
  );
};

TrainFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrainFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrainFilled;
