import React from 'react';
import PropTypes from 'prop-types';

const MusicFilled = props => {
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
      <path d="M20.624 5.702c0-.546-.423-.997-.966-1.048l-9.286-2.482-.165-.022c-.443 0-.821.266-.983.644a1.046 1.046 0 00-.084.41v8.254c-.622-.46-1.384-.678-2.099-.695-.09-.002-.196-.002-.296-.002-1.544.014-3.345.924-3.345 3.448 0 2.52 1.812 3.442 3.361 3.465h.115c.062 0 .12 0 .171-.003 1.485-.025 3.188-.885 3.333-3.148h.028V5.94l8.953 2.445v7.233c-.622-.46-1.39-.678-2.104-.695l-.291-.003c-1.544.014-3.345.925-3.345 3.448 0 2.521 1.813 3.443 3.362 3.465h.114c.062 0 .121 0 .171-.002 1.55-.028 3.362-.947 3.362-3.449 0-.05-.011-.09-.014-.137h.014V5.702h-.006z"></path>
    </svg>
  );
};

MusicFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MusicFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MusicFilled;
