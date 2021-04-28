import React from 'react';
import PropTypes from 'prop-types';

const SkullFilled = props => {
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
        d="M11.385 2c.28 0 .588 0 .86.011 1.762.037 8.642.734 8.642 8.958 0 4.137-1.734 6.364-3.681 7.557v.653c0 .824-.233 1.462-.703 1.883-.454.411-1.11.621-1.955.621H9.21c-.848 0-1.512-.21-1.966-.622-.482-.417-.723-1.058-.723-1.879v-.647c-1.946-1.185-3.68-3.429-3.68-7.614 0-8.29 6.734-8.913 8.543-8.921zm-3.3 11.95h-.067c-.022.002-.045.002-.067.002h-.098c-1.333-.02-2.888-.812-2.888-2.986 0-.131.006-.257.017-.378.168-1.893 1.644-2.58 2.854-2.59.081-.004.171 0 .244.002 1.246.028 2.652.706 2.863 2.515.016.146.025.303.025.468 0 2.149-1.552 2.941-2.883 2.966zm7.796 0h-.067c-.023.002-.045.002-.068.002h-.1c-1.334-.02-2.888-.812-2.888-2.986 0-.131.005-.257.017-.378.168-1.893 1.64-2.58 2.854-2.59.073 0 .168 0 .244.002 1.246.028 2.652.706 2.86 2.515.016.146.025.303.025.468.005 2.149-1.55 2.941-2.877 2.966zm-2.465 2.66a.653.653 0 01-.854-.344l-.365-.857a.644.644 0 01.348-.846.656.656 0 01.854.345l.362.857a.642.642 0 01-.345.846zm-2.219-.347l.365-.854a.646.646 0 00-.35-.849.66.66 0 00-.855.345l-.364.857v.003a.651.651 0 001.204.499z"
      ></path>
    </svg>
  );
};

SkullFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SkullFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SkullFilled;
