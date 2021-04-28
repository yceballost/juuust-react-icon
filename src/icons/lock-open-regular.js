import React from 'react';
import PropTypes from 'prop-types';

const LockOpenRegular = props => {
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
        d="M19.286 13.995v-.003c0-1.608 0-2.897-.002-2.897v-.004c.006-.094.072-1.2-.689-2.038-.535-.588-1.316-.885-2.322-.885-2.1 0-6.515.006-8.14.008V7.011c0-3.406 2.479-3.798 3.544-3.807.131 0 .274 0 .394.003.678.017 2.928.252 3.474 2.61.078.326.4.525.717.45.32-.077.518-.401.442-.726C16.116 3 13.94 2.048 12.102 2.003c-.066 0-.136 0-.208-.002L11.668 2c-2.283.022-4.723 1.35-4.723 5.014v1.19c-.459.06-1.092.23-1.6.704-.542.507-.82 1.224-.82 2.128l.003 7.74c-.004.061-.07 1.193.703 2.036.532.58 1.303.874 2.289.874l8.717-.005h.003c.084.005 1.353.075 2.235-.76.54-.51.812-1.22.812-2.117l-.001-4.81zm-1.19-2.952v.002s-.002 5.202.003 7.762c0 .552-.14.955-.428 1.232-.485.464-1.263.443-1.377.44h-.012l-8.76.006c-.638 0-1.112-.163-1.409-.482-.428-.46-.397-1.135-.395-1.18V11.04c0-.552.146-.969.432-1.238.409-.384 1.02-.42 1.238-.42l.076.002h.005c.014.004.031.004.045.004h.028l1.196-.002h.005c1.926-.002 5.655-.007 7.536-.007.652 0 1.137.163 1.437.488.42.453.384 1.115.38 1.177zm-6.23 5.22c1.357-.025 1.357-1.075 1.357-1.47 0-.359 0-1.451-1.376-1.485l-.082-.001-.086-.002h-.042c-1.33.014-1.33 1.073-1.33 1.47 0 .402 0 1.472 1.355 1.488h.205zm2.547-1.47c0-2.468-2.02-2.675-2.538-2.69-.061-.002-.131-.002-.201-.002h-.054c-.532.003-2.51.19-2.51 2.675 0 2.493 1.998 2.686 2.53 2.695h.244c.507-.012 2.53-.202 2.53-2.678z"
      ></path>
    </svg>
  );
};

LockOpenRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LockOpenRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LockOpenRegular;
