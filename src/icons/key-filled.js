import React from 'react';
import PropTypes from 'prop-types';

const KeyFilled = props => {
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
        d="M21.715 11.659a.413.413 0 01.131.302.428.428 0 01-.129.309l-1.94 1.86a.414.414 0 01-.583-.009l-1.25-1.255-.73 1.18a.41.41 0 01-.334.196.372.372 0 01-.35-.163l-.902-1.174-.801 1.157a.416.416 0 01-.342.18h-4.65l-.031.069-.03.068c-.564 1.126-1.785 1.723-3.533 1.723-2.633 0-4.081-1.457-4.081-4.101C2.16 9.356 3.608 7.9 6.241 7.9c2.104 0 3.101.921 3.572 1.79h9.638c.107 0 .207.039.286.112l1.978 1.857zM5.74 12.704c-.502 0-.698-.196-.698-.7 0-.505.194-.7.698-.7s.697.195.697.7c0 .504-.196.7-.697.7zm-1.532-.7c0-.961.574-1.538 1.532-1.538.96 0 1.532.574 1.532 1.538 0 .963-.574 1.537-1.532 1.537-.958 0-1.532-.574-1.532-1.537z"
      ></path>
    </svg>
  );
};

KeyFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

KeyFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default KeyFilled;
