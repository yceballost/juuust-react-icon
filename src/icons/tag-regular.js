import React from 'react';
import PropTypes from 'prop-types';

const TagRegular = props => {
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
        d="M21.68 11.31l.006-7.775A1.54 1.54 0 0020.151 2l-8.061.003a1.02 1.02 0 00-.127.014c-.411.075-.82.3-1.156.636l-8.149 8.143a2.26 2.26 0 00-.63 1.156c-.09.496.04.961.353 1.275l8.075 8.073c.261.26.606.386.975.386.493 0 1.028-.227 1.463-.66l8.148-8.144c.336-.325.557-.75.636-1.213.003-.028.008-.12.008-.148l-.005-.21zm-1.257.203c-.022.148-.126.325-.277.476L12 20.132c-.283.285-.594.316-.65.274l-8.076-8.073c-.033-.05-.01-.353.28-.644L11.7 3.546c.149-.151.334-.257.443-.283h8.008a.27.27 0 01.272.27l-.008 7.795.008.185zm-2.79-3.751c.625-.625.619-1.238-.017-1.877-.322-.322-.639-.484-.952-.484-.308 0-.617.156-.925.465-.624.624-.619 1.238.017 1.876.636.639 1.25.647 1.877.02zm.874-2.768c-1.135-1.137-2.54-1.142-3.664-.02-1.126 1.124-1.118 2.53.02 3.667.571.572 1.207.858 1.846.858.63 0 1.257-.28 1.817-.84 1.124-1.124 1.118-2.527-.02-3.665z"
      ></path>
    </svg>
  );
};

TagRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TagRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TagRegular;
