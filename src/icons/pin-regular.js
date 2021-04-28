import React from 'react';
import PropTypes from 'prop-types';

const PinRegular = props => {
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
        d="M15.862 2.478l5.661 5.69c.21.21.323.481.325.77a.995.995 0 01-.29.708c-.763.768-1.586 1.222-2.463 1.37l-2.532 2.552c.347 2.025-.376 3.952-2.143 5.734a1.33 1.33 0 01-.947.412 1.2 1.2 0 01-.86-.359l-3.518-3.546-5.868 5.857a.626.626 0 01-.886-.003.634.634 0 01.003-.89l5.866-5.855-3.443-3.468a1.24 1.24 0 01-.361-.877c0-.333.126-.644.361-.88l.031-.033c2.19-2.204 4.263-2.448 5.72-2.196l2.53-2.549c.137-.877.58-1.694 1.316-2.437a1.041 1.041 0 011.498 0zm2.496 7.499a.62.62 0 01.376-.182c.627-.065 1.207-.353 1.77-.877l-5.387-5.415c-.52.577-.798 1.16-.857 1.765a.622.622 0 01-.18.384L11.163 8.59a.61.61 0 01-.585.168c-1.673-.397-3.32.202-4.894 1.788l-.028.03 3.84 3.863.02.012c.01.006.02.01.028.019a.111.111 0 01.018.027.13.13 0 00.013.02l3.921 3.944c1.586-1.607 2.169-3.257 1.78-4.96a.627.627 0 01.165-.586l2.918-2.938z"
      ></path>
    </svg>
  );
};

PinRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PinRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PinRegular;
