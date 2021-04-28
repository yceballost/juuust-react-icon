import React from 'react';
import PropTypes from 'prop-types';

const MedicalHistoryFilled = props => {
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
        d="M19.29 4.737c0-.695-.748-1.306-1.602-1.306h-2.953C14.374 2.71 13.592 2 11.906 2c-1.384 0-2.356.515-2.826 1.429H6.125c-.852 0-1.6.61-1.6 1.305V20.38c0 .706.734 1.305 1.602 1.305h11.56c.869 0 1.603-.596 1.603-1.305V4.737zm-7.384-1.56c1.55 0 1.787.753 1.866 1.002.059.205.092.418.095.63v.362c-.006.227-.02.613-1.96.613-1.937 0-1.953-.384-1.964-.65v-.002l.005-.387c.034-.731.286-1.569 1.958-1.569zm5.05 10.366h-1.563l-.756-2.14a.555.555 0 00-1.053.028l-.625 2.115h-.529a.55.55 0 00-.504.325l-.35.776-.958-4.773a.552.552 0 00-.516-.44.537.537 0 00-.557.387l-1.143 3.672h-1.55a.553.553 0 00-.554.549c0 .303.247.549.555.549h1.955c.241 0 .457-.157.53-.386l.619-1.99.873 4.337a.555.555 0 001.048.117l.91-2.022h.586c.244 0 .46-.16.53-.395l.257-.868.317.896a.554.554 0 00.52.367h1.956a.55.55 0 00.552-.549.555.555 0 00-.55-.555zm-6.3-8.958c.004.306.25.55.555.55h1.393a.55.55 0 00.551-.55.55.55 0 00-.551-.549H11.21a.551.551 0 00-.554.55z"
      ></path>
    </svg>
  );
};

MedicalHistoryFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MedicalHistoryFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MedicalHistoryFilled;
