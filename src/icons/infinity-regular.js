import React from 'react';
import PropTypes from 'prop-types';

const InfinityRegular = props => {
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
        d="M17.852 7.833c1.173.006 2.148.387 2.817 1.104.67.717 1.02 1.756 1.017 3.008-.005 2.563-1.44 4.09-3.837 4.09h-.017c-2.034-.006-4.88-2.255-5.989-3.238-1.11.986-3.955 3.232-5.989 3.238h-.016c-2.395 0-3.83-1.53-3.838-4.09-.003-1.252.347-2.291 1.014-3.008.67-.717 1.644-1.1 2.818-1.104h.008c2.04 0 4.894 2.252 6.003 3.238 1.11-.986 3.966-3.238 6-3.238h.009zm-.003 6.902h-.014c-1.462-.005-3.919-1.792-5.073-2.8 1.157-1.012 3.619-2.805 5.084-2.805h.006c.854.003 1.512.244 1.955.72.442.476.664 1.18.664 2.09-.009 1.832-.914 2.795-2.622 2.795zm-11.997 0h-.014c-1.71 0-2.614-.966-2.62-2.792-.002-.914.222-1.617.664-2.09.443-.476 1.098-.717 1.956-.72h.005c1.468 0 3.93 1.793 5.084 2.804-1.154 1.006-3.61 2.793-5.075 2.798z"
      ></path>
    </svg>
  );
};

InfinityRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InfinityRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InfinityRegular;
