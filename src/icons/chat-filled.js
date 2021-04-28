import React from 'react';
import PropTypes from 'prop-types';

const ChatFilled = props => {
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
        d="M18.812 2.845H4.832a2.822 2.822 0 00-2.826 2.812v9.65c0 1.383.924 2.507 2.187 2.759v2.35c0 .51.482.975 1.009.975.518 0 .77-.336.854-.448l2.207-2.824h10.55a2.82 2.82 0 002.823-2.812V5.654a2.82 2.82 0 00-2.824-2.81zm-1.03 6.036H5.849a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h11.933c.308 0 .56.252.56.56 0 .308-.252.56-.56.56zM5.849 13.25h8.109c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56h-8.11a.562.562 0 00-.56.56c0 .308.253.56.56.56z"
      ></path>
    </svg>
  );
};

ChatFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChatFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChatFilled;
