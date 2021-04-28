import React from 'react';
import PropTypes from 'prop-types';

const HandLeftFilled = props => {
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
      <path d="M9.62 18.164c0-.283.039-.54.117-.773-.857-.238-1.367-.941-1.367-1.95 0-.283.042-.543.118-.776-.849-.24-1.353-.941-1.353-1.944 0-.246.03-.476.09-.683H4.321c-1.333 0-2.162-.818-2.162-2.135 0-1.266.77-2.042 2.118-2.129h7.428c-.577-.338-.98-.644-1.271-1.008a1.928 1.928 0 01-.432-1.207c0-.404.132-.801.398-1.132.52-.65 1.409-.81 2.263-.409 1.448.68 3.776 1.826 5.647 2.748 1.166.574 2.174 1.07 2.476 1.21.32.146 1.062.49 1.062 1.272v7.787c0 .983-.308 1.82-.866 2.361-.554.538-1.33.81-2.302.81h-6.997c-1.275-.006-2.065-.784-2.065-2.042z"></path>
    </svg>
  );
};

HandLeftFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HandLeftFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HandLeftFilled;
