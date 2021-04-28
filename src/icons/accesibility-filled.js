import React from 'react';
import PropTypes from 'prop-types';

const AccesibilityFilled = props => {
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
        d="M16.619 15.83c1.65-.796 3.286-2 4.894-3.609a.562.562 0 00.165-.398.55.55 0 00-.165-.394C18.38 8.29 15.137 6.703 11.87 6.703c-1.235 0-2.468.227-3.695.68L2.975 2.186a.558.558 0 00-.79 0 .561.561 0 000 .793L7.067 7.86c-1.652.795-3.288 2-4.896 3.608a.574.574 0 00-.165.398.55.55 0 00.165.395c3.134 3.134 6.378 4.722 9.644 4.722 1.235 0 2.468-.227 3.695-.68l5.199 5.198a.558.558 0 10.79-.792l-4.88-4.88zm-3.468-3.469l-1.837-1.837c.16-.062.322-.067.504-.067.846 0 1.392.546 1.392 1.394 0 .171-.006.342-.059.51zm1.079 1.079l.621.622c.334-.572.505-1.28.507-2.118 0-2.336-1.333-3.675-3.658-3.675-.84 0-1.551.174-2.123.515l.622.622c.409-.196.913-.294 1.501-.294.897 0 1.591.227 2.065.678.498.473.75 1.199.75 2.154 0 .588-.095 1.087-.285 1.496z"
      ></path>
    </svg>
  );
};

AccesibilityFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AccesibilityFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AccesibilityFilled;
