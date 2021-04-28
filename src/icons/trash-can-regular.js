import React from 'react';
import PropTypes from 'prop-types';

const TrashCanRegular = props => {
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
        d="M16.995 4.697C16.917 3.48 15.952 2.5 14.75 2.5h-5l-.155.006C8.415 2.589 7.5 3.62 7.5 4.857V6.5H3.25l-.102.007A.75.75 0 003.25 8H4.5v10.75A3.25 3.25 0 007.75 22h9A3.25 3.25 0 0020 18.75V8h1.25l.102-.007A.75.75 0 0021.25 6.5H17V4.857l-.005-.16zM15.5 6.5V4.857c0-.447-.297-.799-.658-.85L14.75 4h-5c-.37 0-.696.318-.744.747L9 4.857V6.5h6.5zM8.25 8H6v10.75a1.75 1.75 0 001.606 1.744l.144.006h9a1.75 1.75 0 001.75-1.75V8H8.25zm2 2.5a.75.75 0 01.743.648l.007.102v6a.75.75 0 01-1.493.102L9.5 17.25v-6a.75.75 0 01.75-.75zm4.743.648a.75.75 0 00-1.493.102v6l.007.102A.75.75 0 0015 17.25v-6l-.007-.102z"
      ></path>
    </svg>
  );
};

TrashCanRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrashCanRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrashCanRegular;
