import React from 'react';
import PropTypes from 'prop-types';

const InformationUserFilled = props => {
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
        d="M12.16 1c.115 0 .231 0 .344.003C14.711 1.034 23 1.833 23 12.04 23 22.224 14.79 22.981 12.582 23h-.21c-.284 0-.579-.006-.832-.012C9.386 22.934 1 22.082 1 11.97 1 1.833 9.399 1.044 11.496 1.006c.2-.003.432-.006.664-.006zm-.148 7.355a.733.733 0 010-1.465.733.733 0 010 1.465zm.68 8.748a.689.689 0 01-1.377 0V9.951a.689.689 0 111.377 0v7.152z"
      ></path>
    </svg>
  );
};

InformationUserFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InformationUserFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InformationUserFilled;
