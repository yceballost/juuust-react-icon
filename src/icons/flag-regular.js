import React from 'react';
import PropTypes from 'prop-types';

const FlagRegular = props => {
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
        d="M17.485 7.277c-.065.062-.062.163.002.23l3.098 3.095c.353.454.407.98.182 1.432a1.312 1.312 0 01-1.182.73H4.838v8.37c0 .317-.261.575-.58.575a.578.578 0 01-.58-.575v-17.8c0-.72.59-1.309 1.316-1.309h14.591c.507 0 .958.28 1.182.731.225.451.171.978-.134 1.376l-3.148 3.145zm2.1 4.34a.153.153 0 00.143-.09c.02-.04.034-.101-.017-.166l-3.05-3.044a1.317 1.317 0 01.003-1.852l3.1-3.087a.463.463 0 00-.033-.109.153.153 0 00-.143-.09H4.998c-.09 0-.16.07-.16.157v8.28h14.747z"
      ></path>
    </svg>
  );
};

FlagRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FlagRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FlagRegular;
