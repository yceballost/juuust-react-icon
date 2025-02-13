import React from 'react';
import PropTypes from 'prop-types';

const DocumentOtherRegular = props => {
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
        d="M19.375 8.16a.62.62 0 00-.048-.244.847.847 0 00-.207-.38l-5.21-5.124a.862.862 0 00-.614-.252h-7.3c-.725 0-1.386.655-1.386 1.378v5.653l.042 7.977-.042 3.3c0 .737.653 1.378 1.387 1.378h11.991c.756 0 1.387-.633 1.387-1.378V8.16zm-1.194.868v11.44c0 .073-.086.163-.19.163H5.999c-.095 0-.19-.107-.19-.154l.042-3.3-.042-7.986V3.547c.005-.065.118-.171.19-.171h6.437v2.213c0 .997.334 1.857.98 2.49.628.624 1.49.95 2.494.95h2.271zm-6.336 7.208c.513 0 .91-.407.91-.942a.917.917 0 10-1.834 0v.017a.91.91 0 00.924.925zm1.787-12.407v1.76c0 .666.208 1.215.614 1.613.406.398.98.608 1.666.608h1.768l-4.048-3.98zm2.23 11.465c0 .535-.398.942-.908.942a.91.91 0 01-.924-.925v-.017a.917.917 0 111.832 0zm-7.132.942c.519 0 .916-.407.916-.942a.918.918 0 00-.924-.932c-.51 0-.908.414-.908.932v.017c0 .518.398.925.916.925z"
      ></path>
    </svg>
  );
};

DocumentOtherRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DocumentOtherRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DocumentOtherRegular;
