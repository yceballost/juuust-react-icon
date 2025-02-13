import React from 'react';
import PropTypes from 'prop-types';

const FileZipFilled = props => {
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
        d="M21.423 7.375c.17.171.263.39.263.625v12.305c0 .751-.644 1.384-1.409 1.384H8.098c-.75 0-1.409-.647-1.409-1.384l.034-2.773h-2.3A2.432 2.432 0 012 15.106v-4.092a2.426 2.426 0 012.42-2.426h2.266V3.384C6.686 2.658 7.36 2 8.096 2h7.414c.23 0 .445.087.61.244l5.303 5.131zM15.846 3.67l4.117 3.984H18.16c-.695 0-1.278-.21-1.692-.611-.406-.395-.622-.95-.622-1.608V3.67zM4.42 16.317a1.21 1.21 0 01-1.207-1.21V11.01c0-.67.54-1.21 1.207-1.21h9.846a1.21 1.21 0 011.207 1.21v4.095c0 .667-.54 1.21-1.207 1.21H4.42zm4.367-5.062h.846v3.703h-.846v-3.703zm-3.46 3.207l1.799-2.582H5.381v-.622h2.784v.518l-1.77 2.56h1.781v.622H5.328v-.496zm6.387-3.207h-1.277v3.703h.846v-1.277h.597c.487 0 .823-.115 1.039-.359.185-.207.277-.504.277-.9 0-.394-.095-.68-.297-.865-.238-.22-.605-.302-1.185-.302zm-.008 1.793c.272 0 .384-.04.493-.14.098-.098.146-.255.146-.471 0-.199-.043-.347-.14-.44-.104-.092-.261-.129-.521-.129h-.395v1.182h.417v-.002z"
      ></path>
    </svg>
  );
};

FileZipFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileZipFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileZipFilled;
