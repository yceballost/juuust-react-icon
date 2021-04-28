import React from 'react';
import PropTypes from 'prop-types';

const BriefcaseFilled = props => {
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
        d="M20.39 7.177c.804 0 1.456.658 1.456 1.468v3.044c-1.91 1.384-5.955 2.376-9.767 2.376-3.885 0-8.02-1.09-9.919-2.6v-2.82c0-.81.653-1.468 1.46-1.468h3.456v-.35c0-2.575 2.17-4.667 4.838-4.667h.184c2.667 0 4.838 2.095 4.838 4.667v.35h3.454zm-4.69-.35v.35H8.307v-.35c0-1.891 1.616-3.429 3.605-3.429h.185c1.986 0 3.605 1.538 3.605 3.429zm-1.882 8.409v1.42a.94.94 0 01-.434.818c-.196.131-.46.199-.779.199h-1.199c-.327 0-.582-.068-.787-.2a.947.947 0 01-.434-.817v-1.437c-3.112-.247-6.109-1.09-8.025-2.26v7.417c0 .81.653 1.467 1.457 1.467H20.39c.804 0 1.456-.658 1.456-1.467v-7.227c-1.924 1.087-4.919 1.868-8.028 2.087zm-2.403.067v1.131h1.174v-1.131h-1.174z"
      ></path>
    </svg>
  );
};

BriefcaseFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BriefcaseFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BriefcaseFilled;
