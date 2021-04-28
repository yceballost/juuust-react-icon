import React from 'react';
import PropTypes from 'prop-types';

const DocumentsRegular = props => {
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
        d="M20.793 9.897c.1.098.162.224.204.358.034.076.05.16.048.247v10.081c0 .683-.583 1.263-1.278 1.263H9.824c-.695 0-1.28-.58-1.28-1.263V17.97h-4.29C3.586 17.97 3 17.39 3 16.729V3.399c0-.67.574-1.239 1.255-1.239h9.566c.68 0 1.255.566 1.255 1.238v2.059h.803c.219 0 .43.084.589.238l4.325 4.202zM4.255 3.415l-.003 13.314 4.291-.014V6.72c0-.672.6-1.263 1.28-1.263h4V3.398l-9.568.017zm5.54 3.305v13.863l9.978.003.025-9.244h-1.756c-.863 0-1.608-.283-2.16-.818-.557-.54-.851-1.274-.851-2.126V6.712H9.824l-.028.008zm6.485.54l2.908 2.827h-1.149c-.532 0-.977-.16-1.291-.465-.308-.3-.47-.722-.47-1.224V7.261h.002z"
      ></path>
    </svg>
  );
};

DocumentsRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DocumentsRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DocumentsRegular;
