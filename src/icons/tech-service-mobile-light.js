import React from 'react';
import PropTypes from 'prop-types';

const TechServiceMobileLight = props => {
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
        d="M10.87 21.828h7.185c1.026 0 1.76-.241 2.247-.734.487-.493.723-1.238.723-2.277V5.16c0-2.025-.972-3.011-2.97-3.011h-7.184c-2.026 0-2.97.958-2.97 3.011v5.395l-2.624 2.625a2.745 2.745 0 00-3.034 3.426.56.56 0 00.939.252l.753-.754.658.095.093.659-.754.753a.561.561 0 00.252.939 2.745 2.745 0 003.431-3.034l.284-.283v3.583c0 1.039.235 1.784.722 2.277.488.493 1.224.734 2.25.734zM8.46 14.674l3.986-3.986c.126.016.255.025.38.028a2.745 2.745 0 002.653-3.454.56.56 0 00-.938-.252l-.753.753-.659-.092-.092-.658.753-.754a.561.561 0 00-.252-.938 2.746 2.746 0 00-3.431 3.03L8.462 9.997V5.16c0-1.742.697-2.45 2.409-2.45h7.182c1.689 0 2.409.733 2.409 2.45v13.656c0 .885-.185 1.501-.56 1.885-.376.383-.981.568-1.85.568h-7.184c-.869 0-1.47-.184-1.849-.568-.378-.384-.56-1-.56-1.885v-4.143zm4.933-8.815a2.272 2.272 0 00-.566-.073 2.182 2.182 0 00-2.112 2.75l-5.255 5.255a2.186 2.186 0 00-2.675 2.678l.952-.952 1.353.193.193 1.35-.952.953a2.186 2.186 0 002.675-2.678l5.258-5.252a2.186 2.186 0 002.675-2.678l-.953.952-1.352-.193-.194-1.353.953-.952zm1.902 12.795c0-.569-.328-.835-.832-.835-.502 0-.83.267-.832.835 0 .272.075.476.21.613.145.149.358.222.622.222.263 0 .476-.073.622-.222.134-.137.21-.338.21-.613z"
      ></path>
    </svg>
  );
};

TechServiceMobileLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TechServiceMobileLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TechServiceMobileLight;
