import React from 'react';
import PropTypes from 'prop-types';

const PillFilled = props => {
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
        d="M15.805 2.16c1.378-.027 2.784.628 4.1 1.945 2.555 2.552 2.595 5.367.11 7.927l-7.93 7.933-.003.003c-.064.066-.122.127-.188.182-1.207 1.128-2.476 1.694-3.75 1.694-1.364 0-2.734-.65-4.034-1.95C2.79 18.579 2.138 17.2 2.16 15.8c.026-1.347.678-2.672 1.945-3.938l.145-.151a5.3 5.3 0 01.362-.353l6.775-6.779c.078-.095.198-.209.32-.325l.003-.003.154-.145c1.266-1.264 2.59-1.919 3.94-1.944zm.126 12.225l3.213-3.213c2.017-2.081 1.986-4.112-.104-6.199-1.053-1.053-2.115-1.588-3.154-1.588h-.056c-1.022.017-2.064.552-3.098 1.585l-.174.168a4.103 4.103 0 00-.269.272L9.782 7.917a.24.24 0 00-.004.034.216.216 0 01-.007.047c-.445 1.367.149 2.84 1.815 4.507 1.124 1.124 2.768 2.364 4.25 1.891.02-.007.039-.007.058-.008.012 0 .024 0 .037-.003z"
      ></path>
    </svg>
  );
};

PillFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PillFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PillFilled;
