import React from 'react';
import PropTypes from 'prop-types';

const DocumentsFilled = props => {
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
        d="M20.79 9.897c.1.099.17.223.207.358.031.079.048.163.048.247v10.081c0 .686-.583 1.263-1.278 1.263H9.824c-.695 0-1.28-.577-1.28-1.263V17.97H4.251C3.585 17.97 3 17.39 3 16.73V3.401c0-.672.574-1.241 1.255-1.241h9.563c.68 0 1.255.569 1.255 1.24v2.057h.804a.84.84 0 01.588.238l4.325 4.202zm-6.97-4.44H9.825c-.684 0-1.28.591-1.28 1.263v9.995l-4.295.016.003-13.313 9.569-.017v2.056zm4.216 4.633c-.532 0-.977-.16-1.288-.465-.308-.297-.468-.723-.468-1.224V7.264l2.908 2.826h-1.152z"
      ></path>
    </svg>
  );
};

DocumentsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DocumentsFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DocumentsFilled;
