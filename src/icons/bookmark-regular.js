import React from 'react';
import PropTypes from 'prop-types';

const BookmarkRegular = props => {
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
        d="M16.1 21.378c.266.205.58.308.896.308.224 0 .445-.05.655-.157.51-.252.827-.759.827-1.327V3.482C18.478 2.664 17.814 2 17 2h-9.35c-.815 0-1.476.664-1.476 1.479v16.723A1.472 1.472 0 007 21.529c.51.253 1.106.194 1.616-.204l3.566-3.546a.21.21 0 01.302-.006l3.616 3.605zm-2.72-4.504a1.455 1.455 0 00-1.042-.431c-.393 0-.768.154-1.05.428L7.78 20.37a.194.194 0 01-.218.02.199.199 0 01-.118-.188V3.473c0-.114.092-.204.207-.204h9.35a.209.209 0 01.205.21v16.723a.2.2 0 01-.118.187c-.042.023-.126.054-.157.034l-3.551-3.549z"
      ></path>
    </svg>
  );
};

BookmarkRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BookmarkRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BookmarkRegular;
