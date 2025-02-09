import React from 'react';
import PropTypes from 'prop-types';

const FileEnexFilled = props => {
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
        d="M21.639 7.787c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.095c-.75 0-1.409-.647-1.409-1.383l.034-2.77h-2.3A2.427 2.427 0 012 15.133V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.725.673-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.3 5.132c.112.109.177.243.219.386zm-1.678-.11l.003.004v-.003h-.003zm0 0l-4.112-3.982v1.764c0 .659.215 1.213.622 1.608.414.4.997.61 1.691.61h1.799zM4.42 16.346a1.21 1.21 0 01-1.208-1.21v-4.096c0-.666.54-1.21 1.207-1.21H14.6a1.21 1.21 0 011.207 1.21v4.095c0 .667-.54 1.21-1.208 1.21H4.42zm-.597-4.86h2.198l-.056.537h-1.4v.79h1.12v.558h-1.12v.832h1.482v.537H3.824v-3.254zm2.775 0h.547l1.543 2.087v-2.087h.653v3.257h-.597L7.25 12.765v1.977h-.652v-3.257h.002zm5.65 0H10.05v3.255h2.224v-.538h-1.481v-.832h1.12v-.558h-1.12v-.79h1.4l.056-.537zm1.373 1.633l-.995-1.633h.776l.647 1.075.591-1.075h.79l-1.067 1.594 1.04 1.66h-.824l-.647-1.103-.586 1.104h-.804l1.079-1.622z"
      ></path>
    </svg>
  );
};

FileEnexFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileEnexFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileEnexFilled;
