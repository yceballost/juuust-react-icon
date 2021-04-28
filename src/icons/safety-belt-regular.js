import React from 'react';
import PropTypes from 'prop-types';

const SafetyBeltRegular = props => {
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
        d="M11.7 8.339a.536.536 0 00.04-.042l.94-.947a.605.605 0 000-.851L10.304 4.12a.607.607 0 00-.41-.176l-1.857-.056-1.689-1.686a.602.602 0 00-.851 0L2.176 5.52a.605.605 0 000 .854l1.695 1.698.123 1.798a.612.612 0 00.177.387l2.378 2.378a.605.605 0 00.852 0l4.3-4.297zm-.854-.857l.555-.555-1.782-1.781-1.857-.056a.594.594 0 01-.41-.177l-1.43-1.428-2.465 2.467 1.428 1.432c.104.103.165.24.177.386l.123 1.796 1.79 1.79.549-.55 3.283-3.28a.3.3 0 01.039-.044zm10.84 10.308a.597.597 0 00-.176-.426l-1.807-1.807-.182-1.87a.61.61 0 00-.174-.368l-2.518-2.518a.605.605 0 00-.854 0l-.552.552-1.543-1.544a.621.621 0 00-.855 0l-3.32 3.32a.602.602 0 000 .851l1.541 1.54-.554.556a.602.602 0 000 .851l2.518 2.518a.611.611 0 00.392.177l1.933.112 1.804 1.804a.6.6 0 00.852 0l3.319-3.322a.605.605 0 00.176-.426zm-1.453 0l-2.468 2.468-1.547-1.541a.599.599 0 00-.389-.176l-1.933-.113-1.93-1.93.555-.554a.605.605 0 000-.854l-1.54-1.541 2.467-2.468 1.54 1.54a.603.603 0 00.857 0l.553-.551 1.938 1.938.182 1.872a.61.61 0 00.174.37l1.54 1.54z"
      ></path>
    </svg>
  );
};

SafetyBeltRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SafetyBeltRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SafetyBeltRegular;
