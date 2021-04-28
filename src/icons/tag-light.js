import React from 'react';
import PropTypes from 'prop-types';

const TagLight = props => {
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
        d="M21.835 3.498h.008c0-.742-.602-1.342-1.342-1.342h-8.344a2.082 2.082 0 00-1.062.58l-8.336 8.35a1.555 1.555 0 00-.291 2.163l8.288 8.277c.224.21.521.325.83.314.51-.034.988-.264 1.333-.645l8.328-8.277c.308-.297.512-.68.588-1.1v-8.32zm-.821 0v8.196a1.152 1.152 0 01-.347.622l-8.345 8.328c-.356.353-.829.445-.994.28l-8.289-8.28c-.165-.163-.081-.62.283-.983l8.361-8.32c.169-.176.384-.302.622-.356h8.196c.283 0 .513.23.513.513zm-4.076.843c.645.05 1.247.35 1.673.838.493.437.79 1.05.829 1.706a2.388 2.388 0 01-.787 1.714c-.429.47-1.023.75-1.659.787a2.49 2.49 0 01-1.717-.83 2.494 2.494 0 01-.829-1.713 2.4 2.4 0 01.787-1.715 2.44 2.44 0 011.703-.787zm1.681 2.527c-.02.417-.213.81-.53 1.084a1.752 1.752 0 01-1.12.546 1.654 1.654 0 01-1.134-.546 1.661 1.661 0 01-.563-1.135c.028-.425.224-.82.546-1.1a1.598 1.598 0 011.112-.547c.434.034.84.236 1.126.563.33.289.532.698.563 1.135z"
      ></path>
    </svg>
  );
};

TagLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TagLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TagLight;
