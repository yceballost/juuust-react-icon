import React from 'react';
import PropTypes from 'prop-types';

const BatteryLight = props => {
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
        d="M14.875 4.333c1.087 0 1.89.269 2.46.823.565.552.84 1.33.84 2.381V18.63c0 1.064-.278 1.848-.849 2.397-.566.547-1.367.813-2.448.813H9.172c-1.081 0-1.882-.266-2.448-.813-.569-.549-.849-1.333-.849-2.397V7.537c0-1.033.275-1.81.84-2.367.577-.566 1.378-.84 2.457-.84h.28v-.667c0-.465.137-.837.406-1.103.275-.267.659-.404 1.149-.404h2.224c.49 0 .877.135 1.145.398.27.263.407.636.407 1.112v.667h.092zm-4.552-.667c0-.356.116-.472.153-.509h.001c.04-.04.157-.155.53-.155h2.224c.373 0 .488.108.53.146l.002.003c.038.038.151.15.151.515v.667h-3.59v-.667zm6.983 14.966c0 .827-.193 1.415-.59 1.796-.396.38-.998.566-1.838.566H9.172c-.84 0-1.443-.185-1.838-.566-.397-.384-.59-.97-.59-1.796V7.54c0-.804.193-1.381.59-1.773.404-.395 1.003-.588 1.838-.588h5.706c.843 0 1.445.187 1.84.574.395.386.588.97.588 1.787v11.092z"
      ></path>
    </svg>
  );
};

BatteryLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BatteryLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BatteryLight;
