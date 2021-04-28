import React from 'react';
import PropTypes from 'prop-types';

const OnFilled = props => {
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
        d="M12.406 2.17c1.575.035 9.44.688 9.44 9.859 0 9.177-7.835 9.784-9.403 9.812-.171.003-.364.006-.563.006-.104 0-.213 0-.314-.003-8.952-.129-9.406-8.246-9.406-9.871s.451-9.737 9.339-9.812c.3-.003.63.002.907.008zm-1.053 10.145c0 3.224-1.532 3.899-2.818 3.899-1.291 0-2.829-.678-2.829-3.9 0-3.232 1.538-3.91 2.83-3.91 1.285 0 2.817.678 2.817 3.91zm6.11-3.373v6.723a.413.413 0 01-.415.412h-.227a.41.41 0 01-.342-.185l-3.3-4.995v4.765a.41.41 0 01-.408.409h-.275a.41.41 0 01-.409-.409V8.94c0-.224.185-.409.41-.409h.218a.41.41 0 01.341.185l3.314 5V8.942a.41.41 0 01.41-.409h.274a.41.41 0 01.409.41zm-7.244 3.373c0-2.476-.9-2.796-1.684-2.796-.837 0-1.694.33-1.694 2.796 0 2.445.857 2.776 1.694 2.776.832 0 1.684-.33 1.684-2.776z"
      ></path>
    </svg>
  );
};

OnFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OnFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OnFilled;
