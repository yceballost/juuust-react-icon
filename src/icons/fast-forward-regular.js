import React from 'react';
import PropTypes from 'prop-types';

const FastForwardRegular = props => {
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
        d="M11.846 2C5.406 2 2 5.403 2 11.846c0 6.437 3.403 9.84 9.846 9.84 6.437 0 9.84-3.403 9.84-9.84 0-6.443-3.403-9.846-9.84-9.846zm0 18.476c-5.731 0-8.636-2.905-8.636-8.63 0-5.731 2.905-8.636 8.636-8.636 5.728 0 8.63 2.905 8.63 8.636 0 5.725-2.905 8.63-8.63 8.63zM7.504 9.65v3.79s3.168-1.885 3.171-1.885L7.505 9.65zm9.093 1.899l-3.171 1.885v-3.79l3.17 1.905zM6.29 8.579c0-.218.118-.42.308-.526a.61.61 0 01.611.009l4.952 2.974c.014.008.023.02.032.03.007.01.014.019.024.026V8.574a.605.605 0 01.916-.518l4.953 2.98a.604.604 0 01-.003 1.036l-4.952 2.948a.606.606 0 01-.913-.521v-2.482c-.01.007-.018.017-.026.027a.115.115 0 01-.033.032l-4.953 2.946a.606.606 0 01-.916-.521V8.58z"
      ></path>
    </svg>
  );
};

FastForwardRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FastForwardRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FastForwardRegular;
