import React from 'react';
import PropTypes from 'prop-types';

const ListDocumentLight = props => {
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
        d="M19.39 3.576c0-.742-.586-1.42-1.224-1.42H5.846c-.638 0-1.224.678-1.221 1.42v16.846c0 .757.571 1.418 1.224 1.418l12.317.003c.652 0 1.224-.662 1.224-1.418V3.576zm-.821 0v16.85c0 .34-.24.596-.398.599l-12.33-.003c-.157 0-.398-.258-.398-.6V3.576c0-.327.263-.599.398-.599h12.33c.135 0 .398.272.398.6zM7.745 8.72a.82.82 0 110-1.64.82.82 0 010 1.64zM8.566 12a.82.82 0 10-1.64 0 .82.82 0 001.64 0zm2.056-3.28a.412.412 0 01-.414-.409.41.41 0 01.414-.409h5.731c.23 0 .415.185.415.41a.412.412 0 01-.415.408h-5.73zm6.146 3.69a.412.412 0 00-.415-.41h-5.73a.41.41 0 00-.415.41c0 .226.187.408.414.408h5.731c.23 0 .415-.185.415-.409zm-9.023 2.873a.82.82 0 11.002 1.64.82.82 0 01-.002-1.64zm9.023 1.227a.413.413 0 00-.415-.409h-5.73a.41.41 0 00-.415.41c0 .226.187.408.414.408h5.731a.41.41 0 00.415-.409z"
      ></path>
    </svg>
  );
};

ListDocumentLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ListDocumentLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ListDocumentLight;
