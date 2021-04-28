import React from 'react';
import PropTypes from 'prop-types';

const KeyRegular = props => {
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
        d="M21.85 11.956a.599.599 0 00-.197-.434l-1.938-1.76a.63.63 0 00-.418-.159H9.978C9.468 8.76 8.438 7.9 6.362 7.9 3.653 7.9 2.16 9.356 2.16 12c0 2.645 1.493 4.102 4.202 4.102 2.266 0 3.23-.953 3.641-1.751a.056.056 0 01.006-.011l.005-.011h4.42c.202 0 .39-.096.505-.258l.624-.877.712.9c.123.156.308.248.515.232a.62.62 0 00.49-.283l.58-.908 1.04 1.014c.235.23.616.236.857.011l1.902-1.767a.604.604 0 00.19-.437zm-2.505.936l.997-.928-1.283-1.168H9.61a.616.616 0 01-.561-.355c-.412-.908-1.291-1.348-2.683-1.348-2.029 0-2.975.922-2.975 2.905 0 1.98.946 2.905 2.975 2.905 1.316 0 2.173-.367 2.546-1.093.039-.075.129-.3.129-.302a.611.611 0 01.568-.378h4.504l.92-1.292a.622.622 0 01.988-.025l.683.866.521-.818a.623.623 0 01.952-.106l1.169 1.136zm-11.521-.894c0-1.118-.684-1.784-1.826-1.784-1.143 0-1.827.666-1.83 1.784 0 1.1.7 1.784 1.83 1.784 1.126 0 1.826-.683 1.826-1.784zM6.6 12c0 .448-.143.585-.602.585-.46 0-.603-.14-.603-.585 0-.451.14-.588.603-.588.462 0 .602.137.602.588z"
      ></path>
    </svg>
  );
};

KeyRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

KeyRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default KeyRegular;
