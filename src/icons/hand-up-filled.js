import React from 'react';
import PropTypes from 'prop-types';

const HandUpFilled = props => {
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
      <path d="M18.164 9.62c-.283 0-.54.039-.773.117-.238-.857-.942-1.367-1.95-1.367-.283 0-.543.042-.776.118-.24-.849-.941-1.353-1.944-1.353-.246 0-.476.03-.683.09V4.321c0-1.333-.818-2.162-2.135-2.162-1.266 0-2.042.77-2.129 2.118v7.428c-.339-.577-.644-.98-1.008-1.271a1.927 1.927 0 00-1.207-.432c-.404 0-.801.132-1.132.398-.65.52-.81 1.409-.409 2.263.68 1.448 1.826 3.776 2.748 5.647.574 1.166 1.07 2.174 1.21 2.476.146.32.49 1.062 1.272 1.062h7.787c.983 0 1.82-.308 2.361-.866.538-.554.81-1.33.81-2.302v-6.997c-.006-1.275-.785-2.065-2.042-2.065z"></path>
    </svg>
  );
};

HandUpFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HandUpFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HandUpFilled;
