import React from 'react';
import PropTypes from 'prop-types';

const ShieldCheckedOkLight = props => {
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
        d="M20.6 5.159v.028c0 .534.005 6.768-.457 9.49-.617 3.583-7.68 6.983-7.98 7.126a.398.398 0 01-.348 0c-.303-.143-7.359-3.543-7.975-7.126-.472-2.716-.465-8.928-.465-9.487V5.16a.41.41 0 01.504-.395c1.745.275 2.692-.358 3.79-1.092 1.06-.712 2.26-1.516 4.314-1.516h.006c2.05.003 3.252.805 4.312 1.513l.004.003.009.005c1.091.73 2.038 1.36 3.784 1.087a.455.455 0 01.342.09.428.428 0 01.16.305zm-1.258 9.378c.392-2.294.44-7.367.442-8.916-1.801.156-2.875-.56-3.91-1.25l-.02-.013C14.843 3.68 13.795 2.98 11.99 2.98h-.006c-1.807 0-2.854.7-3.868 1.378-1.05.697-2.149 1.412-3.927 1.269.005 1.557.056 6.619.45 8.907.496 2.886 6.267 5.897 7.348 6.44 1.081-.54 6.857-3.554 7.356-6.437zm-3.065-5.622a.403.403 0 00-.571.003l-5.247 5.292-2.196-2.216-.003-.003a.403.403 0 00-.571.003.41.41 0 000 .58l2.485 2.507.002.002c.16.157.415.157.572-.002l5.532-5.583c.16-.16.16-.42 0-.58l-.003-.003z"
      ></path>
    </svg>
  );
};

ShieldCheckedOkLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldCheckedOkLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldCheckedOkLight;
