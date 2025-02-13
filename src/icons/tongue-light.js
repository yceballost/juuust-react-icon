import React from 'react';
import PropTypes from 'prop-types';

const TongueLight = props => {
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
        d="M21.075 4a.425.425 0 01.583-.118.407.407 0 01.117.571c-.843 1.258-1.977 2.224-3.361 2.93.03.053.056.112.061.176.068.813.101 1.715.101 2.754 0 6.106-1.098 9.894-6.563 9.894S5.45 16.419 5.45 10.313c0-1.081.037-2.017.112-2.86a.217.217 0 01.016-.056.591.591 0 00.007-.02c-1.381-.703-2.516-1.672-3.356-2.932a.41.41 0 01.12-.575.42.42 0 01.583.118c1.728 2.594 4.784 3.908 9.076 3.908 4.286 0 7.339-1.311 9.067-3.897zm-9.059 15.38c4.224 0 5.723-2.37 5.723-9.064 0-.97-.031-1.81-.09-2.574-1.479.602-3.227.924-5.232.963l.039 7.426a.42.42 0 01-.417.417h-.003a.414.414 0 01-.42-.411l-.04-7.429c-1.986-.042-3.722-.361-5.193-.958-.059.765-.09 1.602-.09 2.566 0 6.692 1.496 9.064 5.723 9.064z"
      ></path>
    </svg>
  );
};

TongueLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TongueLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TongueLight;
