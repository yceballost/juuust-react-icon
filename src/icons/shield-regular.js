import React from 'react';
import PropTypes from 'prop-types';

const ShieldRegular = props => {
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
        d="M11.728 21.627a.597.597 0 00.515.003c.746-.355 7.295-3.577 7.905-7.129.455-2.68.449-8.795.448-9.322V5.15a.625.625 0 00-.227-.462.625.625 0 00-.5-.137c-1.625.255-2.477-.311-3.553-1.034-1.058-.711-2.26-1.515-4.325-1.518h-.008c-2.064 0-3.266.804-4.328 1.515l-.014.01c-1.069.718-1.914 1.286-3.51 1.03a.611.611 0 00-.52.109.616.616 0 00-.236.484v.028c0 .524-.006 6.642.457 9.323.61 3.551 7.151 6.773 7.896 7.128zm-6.703-7.341c-.367-2.124-.429-6.715-.437-8.451 1.662.1 2.711-.605 3.718-1.28l.024-.017c1.006-.675 1.958-1.314 3.656-1.314h.005c1.7.003 2.65.639 3.656 1.314 1.011.678 2.064 1.378 3.737 1.294-.009 1.737-.068 6.328-.43 8.454-.408 2.372-4.943 5.09-6.968 6.1-2.025-1.008-6.552-3.725-6.961-6.1z"
      ></path>
    </svg>
  );
};

ShieldRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldRegular;
