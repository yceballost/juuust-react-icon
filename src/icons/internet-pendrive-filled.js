import React from 'react';
import PropTypes from 'prop-types';

const InternetPendriveFilled = props => {
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
        d="M11.75 6.56c-5.75 0-8.548 2.854-8.548 8.731a.607.607 0 01-.6.614A.607.607 0 012 15.29c0-6.515 3.373-9.958 9.75-9.958a.607.607 0 01.603.614.607.607 0 01-.602.613zm.583 2.703a.607.607 0 01-.6.614c-3.59 0-5.335 1.784-5.335 5.45a.605.605 0 01-.6.614h-.002a.607.607 0 01-.603-.613v-.003c0-4.37 2.26-6.678 6.54-6.678a.615.615 0 01.6.616zm8.152 4.602v2.942c0 .084-.062.15-.138.15h-.736v-3.24h.747c.07.014.124.076.127.148zm-.149-1.375c.728 0 1.334.61 1.35 1.364v2.953c0 .759-.602 1.378-1.339 1.378h-.804a1.542 1.542 0 01-1.462 1.092H12.23c-2.3-.084-3.62-1.518-3.62-3.93 0-2.417 1.32-3.846 3.623-3.921h5.84c.672 0 1.244.445 1.454 1.064h.81zm-9.414 2.89c0-.512.29-.75.74-.75.447 0 .739.238.739.75 0 .247-.068.43-.188.553-.129.134-.32.198-.552.198-.232 0-.423-.064-.552-.198-.12-.124-.187-.306-.187-.552z"
      ></path>
    </svg>
  );
};

InternetPendriveFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InternetPendriveFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InternetPendriveFilled;
