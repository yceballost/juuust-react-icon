import React from 'react';
import PropTypes from 'prop-types';

const MusicRegular = props => {
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
        d="M19.655 4.651c.543.054.972.507.972 1.056h-.003v12.538h-.014c.001.02.004.04.007.058.003.025.007.05.007.08 0 2.504-1.812 3.425-3.367 3.453l-.202.003h-.078c-1.557-.022-3.373-.947-3.373-3.473 0-2.53 1.807-3.443 3.353-3.454l.292.003a3.736 3.736 0 012.092.686V8.663l-8.927-2.387v7.877c0 .014.002.026.004.039.002.012.004.025.004.04 0 .013-.002.026-.004.04a.257.257 0 00-.004.04v.21h-.02c-.142 2.272-1.851 3.135-3.341 3.163h-.286c-1.552-.022-3.367-.944-3.367-3.47 0-2.53 1.807-3.443 3.353-3.454.092 0 .202 0 .291.002.712.017 1.465.23 2.087.681V3.212a1.07 1.07 0 011.076-1.062l.168.022 9.28 2.48zm-9.241-1.157v1.468l8.927 2.387V5.88l-8.927-2.387zm6.58 17.076l.238-.003c.79-.014 2.11-.316 2.112-2.187 0-1.869-1.33-2.18-2.123-2.2l-.255-.002c-.776.008-2.076.302-2.076 2.188 0 1.893 1.317 2.193 2.104 2.204zM7.03 16.42a3.451 3.451 0 01-.24 0c-.788-.011-2.104-.314-2.104-2.205 0-1.888 1.305-2.182 2.081-2.187l.25.003c.778.016 2.072.327 2.114 2.12v.162c-.042 1.79-1.325 2.09-2.1 2.107z"
      ></path>
    </svg>
  );
};

MusicRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MusicRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MusicRegular;
