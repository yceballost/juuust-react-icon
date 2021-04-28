import React from 'react';
import PropTypes from 'prop-types';

const PoundryFilled = props => {
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
      <path d="M21.308 3.714c-.213-.017-5.19-.378-9.468 1.813-4.274-2.188-9.249-1.832-9.462-1.813A.409.409 0 002 4.12v13.46a.41.41 0 00.409.409c5.24 0 9.204 2.03 9.244 2.05.058.03.123.048.19.048.025 0 .05-.017.079-.023.039-.008.078-.008.112-.028l.016-.008h.006l.003-.003c.252-.126 4.126-2.036 9.218-2.036a.408.408 0 00.41-.41V4.12a.409.409 0 00-.379-.406z"></path>
    </svg>
  );
};

PoundryFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PoundryFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PoundryFilled;
