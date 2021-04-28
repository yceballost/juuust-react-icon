import React from 'react';
import PropTypes from 'prop-types';

const HandRightFilled = props => {
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
      <path d="M14.39 18.164c0-.283-.04-.54-.118-.773.857-.238 1.367-.941 1.367-1.95 0-.283-.042-.543-.118-.776.85-.24 1.353-.941 1.353-1.944 0-.246-.03-.476-.09-.683h2.903c1.333 0 2.162-.818 2.162-2.135 0-1.266-.77-2.042-2.118-2.129h-7.428c.577-.338.98-.644 1.271-1.008.29-.358.432-.787.432-1.207 0-.404-.132-.801-.398-1.132-.52-.65-1.409-.81-2.263-.409-1.448.68-3.776 1.826-5.647 2.748-1.165.574-2.174 1.07-2.476 1.21-.32.146-1.062.49-1.062 1.272v7.787c0 .983.308 1.82.866 2.361.554.538 1.33.81 2.302.81h6.997c1.275-.006 2.065-.784 2.065-2.042z"></path>
    </svg>
  );
};

HandRightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HandRightFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HandRightFilled;
