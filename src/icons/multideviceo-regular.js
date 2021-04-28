import React from 'react';
import PropTypes from 'prop-types';

const MultideviceoRegular = props => {
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
        d="M14.72 16.084v-5.269c0-1.35.745-2.095 2.095-2.095h.897v-.008c0-.835-.171-1.457-.513-1.846-.344-.395-.888-.588-1.658-.588H5.45c-.77 0-1.313.193-1.658.588-.339.39-.513 1.011-.513 1.846v4.938c0 .835.171 1.457.513 1.846.345.395.888.588 1.658.588h9.27zm0 1.118H5.451c-1.098 0-1.94-.328-2.504-.97-.524-.599-.787-1.467-.787-2.582V8.712c0-1.115.266-1.983.787-2.583.563-.644 1.403-.97 2.504-.97h10.09c1.098 0 1.941.329 2.504.97.524.6.787 1.468.787 2.583v.008h.922c1.37 0 2.095.726 2.095 2.095v6.49c-.003 1.37-.725 2.096-2.098 2.096h-2.936c-1.37 0-2.095-.726-2.095-2.095v-.104zm-6.818 2.202h4.916a.56.56 0 100-1.12H7.902a.562.562 0 00-.56.56c0 .307.252.56.56.56zM18.283 17.6c-.286 0-.456-.112-.549-.208a.746.746 0 01-.199-.54c0-.457.294-.75.748-.75s.748.293.748.75c0 .28-.106.448-.199.54a.746.746 0 01-.549.208zm-1.468-7.762c-.728 0-.974.246-.974.975v6.49c0 .375.07.636.207.773.137.134.395.204.77.204h2.939c.375 0 .633-.067.77-.204.137-.135.207-.395.207-.773v-6.488c0-.747-.227-.974-.975-.974h-2.944v-.003z"
      ></path>
    </svg>
  );
};

MultideviceoRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MultideviceoRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MultideviceoRegular;
