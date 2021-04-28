import React from 'react';
import PropTypes from 'prop-types';

const TrainRegular = props => {
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
        d="M2.347 16.974a.757.757 0 01-.177-.49V5.267c0-.384.269-.697.602-.697H13.11c.117-.004 3.392-.094 7.204 4.312 1.135 1.311 1.65 2.667 1.53 4.026-.171 1.936-1.583 3.276-2.407 3.904a1.87 1.87 0 01-1.132.393h-.017c-1.009-.01-4.54-.029-15.515-.029a.568.568 0 01-.425-.203zM3.375 5.961h9.58v5.405c0 .387.269.697.602.697h7.059c.042.238.05.476.03.707-.02.219-.07.425-.137.627H3.375v-1.413h8.28c.333 0 .602-.313.602-.697V7.482c0-.386-.269-.697-.602-.697h-8.28v-.824zm16.089 3.907c.233.27.426.535.591.801h-5.892V6.13c1.134.308 3.096 1.195 5.3 3.739zm-.69 5.782c.225-.168.578-.469.917-.865H3.375v1.001c10.507 0 13.931.02 14.92.029h.009a.755.755 0 00.47-.165zM5.119 8.18v2.413H3.375V8.18h1.743zm1.205 2.413h1.871V8.18H6.323v2.414zm4.73 0H9.398V8.18h1.653v2.414zm10.807 8.13c0-.386-.27-.697-.603-.697H2.772c-.333 0-.602.31-.602.697 0 .387.269.697.602.697h18.485c.334 0 .603-.31.603-.697z"
      ></path>
    </svg>
  );
};

TrainRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrainRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrainRegular;
