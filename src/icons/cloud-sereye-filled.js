import React from 'react';
import PropTypes from 'prop-types';

const CloudSereyeFilled = props => {
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
        d="M20.052 15.276v1.849c1.277.255 1.767 1.308 1.784 2.23v.182c-.017 1.058-.655 2.3-2.417 2.3-1.762 0-2.392-1.233-2.4-2.286-.006-.044-.004-.094-.002-.138l.001-.058c.017-.914.516-1.975 1.787-2.23v-1.233H5.181v1.224c1.28.264 1.779 1.317 1.795 2.239v.182c-.016 1.058-.664 2.3-2.417 2.3-1.762 0-2.392-1.233-2.409-2.286v-.196c.025-.914.515-1.967 1.784-2.23l-.008-1.84a.654.654 0 01.185-.446.619.619 0 01.44-.182h6.8l-.009-.04a.341.341 0 01-.016-.092v-.921l-3.571.017c-1.67 0-3.613-.928-3.613-3.56 0-2 1.08-2.86 1.96-3.233.177-3.445 2.933-4.678 5.309-4.678.666 0 3.921.157 4.983 2.978 1.888.204 3.756 1.389 3.756 4.201 0 3.143-2.345 4.252-4.345 4.252l-3.232.017v.93a.414.414 0 01-.025.132h6.88c.341 0 .621.274.624.616zm-14.322 4.1v.14c-.017.715-.41 1.085-1.171 1.085-.765 0-1.154-.361-1.163-1.067v-.149c.017-.493.225-1.092 1.171-1.092.939 0 1.154.59 1.163 1.084zm14.86.14c-.009.715-.406 1.085-1.171 1.085s-1.154-.361-1.154-1.067v-.149c.008-.484.215-1.07 1.123-1.084h.081c.908.017 1.115.591 1.123 1.076-.002 0-.002.14-.002.14z"
      ></path>
    </svg>
  );
};

CloudSereyeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudSereyeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudSereyeFilled;
