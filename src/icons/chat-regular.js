import React from 'react';
import PropTypes from 'prop-types';

const ChatRegular = props => {
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
        d="M5.227 21.433c-.546 0-1.028-.465-1.028-.995v-2.336c-1.263-.257-2.188-1.384-2.188-2.773V5.682c0-1.56 1.278-2.829 2.846-2.829H18.84a2.839 2.839 0 012.843 2.83v9.649c0 1.56-1.274 2.83-2.843 2.83H8.297l-2.202 2.817c-.341.454-.74.454-.868.454zm-.373-17.46c-.95 0-1.722.768-1.722 1.71v9.649c0 .975.7 1.709 1.627 1.709.308 0 .56.252.56.56v2.552l2.264-2.894a.566.566 0 01.442-.216h10.812c.95 0 1.723-.767 1.723-1.708V5.682c0-.944-.773-1.709-1.723-1.709H4.854zM17.81 8.91H5.877a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h11.932c.309 0 .56.252.56.56 0 .308-.251.56-.56.56zm-3.823 4.37h-8.11a.562.562 0 01-.56-.56c0-.309.253-.56.56-.56h8.11c.308 0 .56.251.56.56 0 .308-.252.56-.56.56z"
      ></path>
    </svg>
  );
};

ChatRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChatRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChatRegular;
