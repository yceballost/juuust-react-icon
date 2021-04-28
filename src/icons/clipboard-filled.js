import React from 'react';
import PropTypes from 'prop-types';

const ClipboardFilled = props => {
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
        d="M17.772 3.591c.855 0 1.603.611 1.603 1.306V20.54c0 .709-.734 1.305-1.603 1.305H6.212c-.868 0-1.602-.6-1.602-1.305V4.894c0-.695.75-1.305 1.602-1.305h2.955c.471-.914 1.443-1.429 2.827-1.429 1.686 0 2.467.709 2.829 1.431h2.95zm-3.913.748c-.078-.25-.316-1.003-1.865-1.003-1.672 0-1.925.838-1.958 1.57l-.006.346v.002c.011.267.028.651 1.964.651 1.938 0 1.952-.383 1.96-.61v-.323a2.405 2.405 0 00-.095-.633zm-3.115.404a.55.55 0 00.552.549h1.392a.553.553 0 00.555-.55.553.553 0 00-.555-.548h-1.392a.55.55 0 00-.552.549z"
      ></path>
    </svg>
  );
};

ClipboardFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ClipboardFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ClipboardFilled;
