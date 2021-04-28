import React from 'react';
import PropTypes from 'prop-types';

const PoundryRegular = props => {
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
        d="M11.843 5.448c4.21-2.095 9.056-1.75 9.266-1.734a.627.627 0 01.58.616v13.093c0 .344-.28.622-.627.622-4.869 0-8.563 1.79-8.891 1.952a.595.595 0 01-.25.07c-.013.002-.025.006-.036.01-.013.005-.026.01-.04.01a.628.628 0 01-.29-.07l-.002-.001c-.099-.05-3.904-1.968-8.923-1.968a.625.625 0 01-.627-.622V4.333a.62.62 0 01.577-.619c.21-.017 5.056-.364 9.263 1.734zm8.588 11.364a23.065 23.065 0 00-7.96 1.686V6.518c3.067-1.504 6.593-1.613 7.96-1.588v11.882zM3.255 4.93c1.367-.017 4.885.081 7.96 1.588v11.98a23.115 23.115 0 00-7.96-1.686V4.93z"
      ></path>
    </svg>
  );
};

PoundryRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PoundryRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PoundryRegular;
