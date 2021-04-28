import React from 'react';
import PropTypes from 'prop-types';

const LockClosedFilled = props => {
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
        d="M6.733 9.084V6.541c0-2.493 2.16-4.521 4.815-4.521h.19c2.656 0 4.815 2.028 4.815 4.52v2.551c.504.137.93.367 1.272.688.619.577.938 1.425.952 2.52v6.096c-.014 1.092-.336 1.941-.952 2.52-.591.556-1.431.836-2.499.836H7.934c-1.067 0-1.907-.283-2.496-.838-.616-.58-.93-1.431-.93-2.526l.003-5.645c0-.308-.003-.431-.003-.431v-.006c0-1.095.314-1.944.93-2.526a2.947 2.947 0 011.295-.695zm8.66-.143v-2.4c0-1.852-1.638-3.362-3.655-3.362h-.19c-2.017 0-3.656 1.507-3.656 3.362v2.4h7.502zm-2.5 8.597c-.306.294-.724.442-1.245.442-.52 0-.938-.148-1.243-.442-.317-.306-.476-.737-.476-1.28 0-.544.16-.975.476-1.28.305-.295.723-.443 1.244-.443.52 0 .938.148 1.243.442.32.306.476.737.476 1.28 0 .544-.157.975-.476 1.28z"
      ></path>
    </svg>
  );
};

LockClosedFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LockClosedFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LockClosedFilled;
