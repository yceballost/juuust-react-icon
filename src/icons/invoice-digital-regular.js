import React from 'react';
import PropTypes from 'prop-types';

const InvoiceDigitalRegular = props => {
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
        d="M5.291 16.556h13.11c1.098 0 1.94-.328 2.504-.972.52-.6.787-1.468.787-2.583V8.063c0-1.115-.264-1.983-.787-2.583-.563-.644-1.406-.972-2.505-.972H5.292c-1.1 0-1.94.328-2.504.972C2.267 6.08 2 6.948 2 8.063V13c0 1.115.266 1.984.787 2.586.563.641 1.406.969 2.504.969zM3.633 6.22c.345-.395.885-.588 1.658-.588l13.11-.003c.77 0 1.313.193 1.658.588.339.39.512 1.011.512 1.846V13c0 .835-.173 1.457-.512 1.846-.345.395-.888.588-1.659.588H5.292c-.77 0-1.313-.193-1.658-.588-.339-.39-.513-1.011-.513-1.846V8.063c0-.835.174-1.457.513-1.843zm17.465 12.52H2.594a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h18.504c.308 0 .56.252.56.56 0 .309-.252.56-.56.56zM9.613 14.498h4.474a.612.612 0 00.639-.639V8.87a.42.42 0 00-.124-.297l-1.89-1.894a.42.42 0 00-.297-.123H9.613c-.386 0-.647.258-.647.644v6.647c0 .39.26.65.647.65zm4.272-.84H9.807v-6.26h2.235v.674c0 .723.384 1.171 1.003 1.171h.84v4.415zM12.602 8.07v-.31l.922.921h-.48c-.293 0-.442-.207-.442-.61zm.569 2.364h-2.647a.281.281 0 01-.28-.28.28.28 0 01.28-.28h2.65c.154 0 .28.126.28.28 0 .154-.13.28-.283.28zm0 1.138h-2.647a.28.28 0 01-.28-.28.28.28 0 01.28-.28h2.65c.154 0 .28.126.28.28 0 .154-.13.28-.283.28zm-2.647 1.134h2.647a.283.283 0 00.283-.28.281.281 0 00-.28-.28h-2.65a.281.281 0 00-.28.28c0 .154.126.28.28.28z"
      ></path>
    </svg>
  );
};

InvoiceDigitalRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InvoiceDigitalRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InvoiceDigitalRegular;
