import React from 'react';
import PropTypes from 'prop-types';

const SafetyBeltFilled = props => {
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
        d="M11.868 8.6a.654.654 0 00.042-.045l.916-.922a.82.82 0 000-1.162l-2.322-2.328a.807.807 0 00-.554-.241l-1.723-.05-1.583-1.586a.822.822 0 00-1.16 0l-3.24 3.25a.825.825 0 000 1.165l1.594 1.6.112 1.669a.813.813 0 00.238.526l2.322 2.328a.82.82 0 001.16 0l4.198-4.205zm9.577 9.627a.82.82 0 000-1.163l-1.72-1.72-.168-1.747a.817.817 0 00-.235-.502l-2.456-2.462a.817.817 0 00-1.16 0l-.375.375-1.342-1.344a.817.817 0 00-1.16 0l-3.24 3.25a.83.83 0 00-.242.582.82.82 0 00.241.582l1.342 1.345-.375.378a.825.825 0 000 1.162l2.459 2.463c.143.14.33.227.532.238l1.799.106 1.7 1.703c.16.163.37.241.58.241.21 0 .42-.078.58-.24l3.24-3.247z"
      ></path>
    </svg>
  );
};

SafetyBeltFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SafetyBeltFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SafetyBeltFilled;
