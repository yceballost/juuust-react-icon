import React from 'react';
import PropTypes from 'prop-types';

const MultideviceoFilled = props => {
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
        d="M18.835 8.717h.916c1.37 0 2.095.726 2.095 2.096V17.3c0 1.37-.725 2.095-2.095 2.095h-2.938c-1.37 0-2.096-.725-2.096-2.095v-.1H5.451c-1.1 0-1.94-.326-2.504-.97-.524-.6-.787-1.468-.787-2.583V8.71c0-1.115.263-1.983.787-2.58.563-.641 1.406-.97 2.504-.97h10.093c1.1 0 1.94.326 2.504.97.52.6.787 1.468.787 2.583v.005zm1.683 9.359c.138-.137.208-.398.208-.773v-6.49c0-.748-.227-.975-.975-.975H16.81c-.729 0-.975.246-.975.975v6.49c0 .378.07.638.207.773.138.137.395.204.77.204h2.936c.376 0 .633-.07.77-.204zm-7.7.207H7.902a.562.562 0 00-.56.56c0 .308.252.56.56.56h4.916c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56zm4.714-1.434c0-.457.295-.75.748-.75.454 0 .748.293.748.75 0 .28-.109.448-.199.54-.092.096-.263.208-.549.208-.285 0-.456-.112-.549-.207-.092-.093-.199-.26-.199-.541z"
      ></path>
    </svg>
  );
};

MultideviceoFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MultideviceoFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MultideviceoFilled;
