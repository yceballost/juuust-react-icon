import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightRegular = props => {
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
        d="M11.454 21.605c.14.056.288.084.44.084.375 0 .761-.17 1.067-.49l8.476-8.703a.82.82 0 00.274-.594c.003-.361-.246-.608-.333-.692L12.72 2.5c-.423-.435-.905-.589-1.322-.42-.244.097-.653.389-.659 1.246v.006l.003 3.56a.471.471 0 01-.157.053l-6.711-.003h-.008c-.418.006-1.017.065-1.426.488-.406.423-.443 1.025-.434 1.445v6.04c-.017.615.126 1.07.442 1.391.317.322.768.477 1.384.468l6.882.02c.017.017.031.039.04.056l.005 3.65c-.005.507.26.93.695 1.106zm-.664-5.902l-6.958-.02c-.003 0-.006 0-.008.003-.208.003-.477-.02-.597-.14-.118-.123-.135-.395-.129-.602V8.86c-.008-.342.036-.574.129-.67.092-.095.32-.148.655-.154l6.709.003c.437 0 1.247-.342 1.247-.994l-.006-3.712c0-.067.005-.12.011-.162.028.022.062.05.098.09l.006.005 8.568 8.62-8.336 8.554-.005.005c-.157.166-.289.163-.308.149a.193.193 0 01-.014-.084V20.5l-.006-3.678c0-.506-.47-1.12-1.056-1.12z"
      ></path>
    </svg>
  );
};

ArrowRightRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRightRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowRightRegular;
