import React from 'react';
import PropTypes from 'prop-types';

const WaterDropLight = props => {
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
        d="M11.947 2.156a.41.41 0 01.288.12c1.362 1.373 6.698 8.25 6.706 12.527.014 4.398-2.585 7.028-6.95 7.042h-.033c-2.143 0-3.908-.636-5.106-1.834C5.647 18.803 5.006 17.016 5 14.845c-.014-4.325 5.3-11.201 6.658-12.568a.42.42 0 01.289-.12zm.011 18.866h.034c3.969-.011 6.148-2.221 6.14-6.216-.012-3.753-4.633-9.89-6.185-11.639-1.546 1.746-6.143 7.88-6.132 11.675.009 1.978.55 3.521 1.614 4.586 1.056 1.056 2.582 1.594 4.529 1.594z"
      ></path>
    </svg>
  );
};

WaterDropLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WaterDropLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WaterDropLight;
