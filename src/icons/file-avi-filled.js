import React from 'react';
import PropTypes from 'prop-types';

const FileAviFilled = props => {
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
        d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.095c-.75 0-1.406-.647-1.406-1.383l.034-2.77h-2.3a2.427 2.427 0 01-2.42-2.427V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.725.672-1.384 1.406-1.384h7.415a.86.86 0 01.613.25L21.42 7.4c.112.109.177.243.219.386zm-1.681-.11l.003.004v-.003h-.003zm0 0l-4.112-3.982v1.764c0 .659.216 1.213.622 1.608.414.4.997.61 1.692.61h1.798zM4.42 16.346a1.21 1.21 0 01-1.207-1.21v-4.096c0-.666.54-1.21 1.207-1.21h9.846a1.21 1.21 0 011.207 1.21v4.095c0 .667-.54 1.21-1.207 1.21H4.42zm1.787-4.95h.927l1.331 3.684h-.9l-.307-.928H6.062l-.286.928h-.804l1.235-3.684zm.846 2.149l-.403-1.227h-.011l-.384 1.226h.798zm2.177-2.149h-.9l1.283 3.684h.877l1.224-3.684h-.818l-.804 2.672-.862-2.672zm2.96 0h.84v3.684h-.84v-3.684z"
      ></path>
    </svg>
  );
};

FileAviFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileAviFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileAviFilled;
