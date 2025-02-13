import React from 'react';
import PropTypes from 'prop-types';

const DataFilled = props => {
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
        d="M5.426 4c.196.55.938 1.022 2.154 1.373 1.283.367 2.969.574 4.764.571 1.799 0 3.485-.207 4.768-.574 1.19-.342 1.919-.799 2.134-1.328 0-.008.012-.017.012-.017-.16-.574-.88-1.059-2.154-1.426-1.275-.366-2.97-.574-4.768-.574-1.798 0-3.493.208-4.776.575-1.207.35-1.947.834-2.143 1.38.006.007.008.01.008.013V4zm13.88 1.356c-.469.358-1.104.647-1.92.88-1.366.391-3.156.607-5.039.61-1.88 0-3.67-.216-5.036-.61-.835-.233-1.482-.538-1.95-.897v3.975c.252.501 1.076 1.003 2.219 1.336 1.286.37 2.969.566 4.767.566 1.799 0 3.493-.2 4.768-.566 1.263-.37 1.955-.924 2.19-1.347V5.356zm-6.959 6.753c1.891 0 3.68-.215 5.04-.61.767-.216 1.422-.521 1.918-.888v3.983c-.235.423-.927.977-2.19 1.344-1.275.367-2.97.575-4.768.575-1.798 0-3.484-.208-4.767-.575-1.143-.33-1.967-.826-2.219-1.336v-3.98c.499.35 1.152.655 1.95.88 1.367.392 3.154.607 5.036.607zm5.04 4.69c-1.36.394-3.149.61-5.04.61-1.882 0-3.67-.216-5.039-.61-.798-.236-1.462-.538-1.95-.889v3.533c0 .7.743 1.271 2.202 1.694 1.294.367 2.989.575 4.776.575 1.79 0 3.485-.205 4.768-.575 1.462-.42 2.201-.994 2.201-1.694v-3.541c-.496.367-1.151.68-1.918.896z"
      ></path>
    </svg>
  );
};

DataFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DataFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DataFilled;
