import React from 'react';
import PropTypes from 'prop-types';

const PenRegular = props => {
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
        d="M20.347 3.244c.084.08.168.165.249.249 1.339 1.39 2.011 3.622-.115 5.731L9.237 20.401l-.01.008a.124.124 0 00-.01.008l-.003.006a.268.268 0 01-.065.047.613.613 0 00-.03.017l-.021.014-.015.009a.594.594 0 01-.305.095c-.006 0-.01-.001-.015-.003a.055.055 0 00-.016-.003L2.88 21.678a.622.622 0 01-.532-.16.592.592 0 01-.18-.524l.942-6.1c.003-.017.01-.034.016-.05l.012-.034c.005-.023.01-.045.02-.068a.527.527 0 01.122-.179l11.308-11.19c2.155-2.132 4.387-1.463 5.76-.13zm-1.398 5.792l.666-.663c1.85-1.83.687-3.44.104-4.048-.067-.07-.148-.151-.221-.224-.6-.58-2.185-1.726-4.048.12l-.683.678 4.182 4.137zM4.644 20.13l-.967-.958-.182 1.168 1.149-.21zm1.61-3.474L4.568 14.99l9.339-9.238 1.683 1.666-9.336 9.238zm-2.35 1.04l2.19 2.168 1.415-.26-3.384-3.348-.221 1.44zm4.871 1.456l-1.664-1.644 9.336-9.238 1.64 1.622c.002 0-9.312 9.26-9.312 9.26z"
      ></path>
    </svg>
  );
};

PenRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PenRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PenRegular;
