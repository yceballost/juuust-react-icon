import React from 'react';
import PropTypes from 'prop-types';

const InvoiceDigitalFilled = props => {
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
        d="M20.905 5.48c-.563-.644-1.404-.972-2.504-.972H5.29c-1.098 0-1.94.328-2.504.972C2.267 6.08 2 6.948 2 8.063V13c0 1.115.266 1.984.787 2.583.563.644 1.403.972 2.504.972h13.11c1.098 0 1.94-.328 2.504-.97.524-.599.787-1.467.787-2.582V8.063c0-1.115-.266-1.983-.787-2.583zm-6.18 8.376a.612.612 0 01-.638.638H9.613c-.386 0-.647-.26-.647-.65V7.197c0-.386.26-.644.647-.644h2.802a.42.42 0 01.296.123l1.891 1.894a.426.426 0 01.123.3v4.986zm-2.686-6.46v.675c0 .723.387 1.171 1.006 1.171h.84v4.415H9.807v-6.26h2.232zm-1.515 5.311h2.647a.283.283 0 00.283-.28.28.28 0 00-.28-.28h-2.65a.28.28 0 00-.28.28c0 .154.126.28.28.28zm2.647-1.134h-2.647a.28.28 0 01-.28-.28.28.28 0 01.28-.28h2.65c.154 0 .28.126.28.28 0 .154-.13.28-.283.28zm0-1.135c.154 0 .28-.126.28-.28a.279.279 0 00-.277-.28h-2.65a.28.28 0 00-.28.28c0 .154.126.28.28.28h2.647zm.353-1.756h-.48c-.293 0-.445-.207-.445-.61v-.314l.925.924zM2.594 18.741h18.504c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56H2.594a.562.562 0 00-.56.56c0 .308.252.56.56.56z"
      ></path>
    </svg>
  );
};

InvoiceDigitalFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InvoiceDigitalFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InvoiceDigitalFilled;
