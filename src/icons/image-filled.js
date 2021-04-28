import React from 'react';
import PropTypes from 'prop-types';

const ImageFilled = props => {
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
        d="M20.413 4.522c.743 0 1.42.583 1.42 1.225v12.316c0 .642-.677 1.224-1.42 1.224H3.567c-.756 0-1.417-.574-1.417-1.224l.003-12.316c0-.653.664-1.225 1.417-1.225h16.843zM4.791 8.884c0-1.255 1.012-2.278 2.255-2.278 1.244 0 2.255 1.023 2.255 2.278 0 1.255-1.011 2.277-2.255 2.277a2.267 2.267 0 01-2.255-2.277zm14.933 3.652c.27.21.322.6.115.872a.61.61 0 01-.857.12l-2.866-2.213-3.196 2.566 1.97 1.874c.246.235.257.63.025.88a.61.61 0 01-.869.025l-3.378-3.213-4.86 4.087a.608.608 0 01-.866-.081.627.627 0 01.08-.877l5.276-4.44a.61.61 0 01.816.025l.896.854 3.711-2.977a.61.61 0 01.757-.008l3.246 2.506zM6.021 8.886c0 .57.46 1.034 1.025 1.034a1.035 1.035 0 000-2.067 1.03 1.03 0 00-1.025 1.034z"
      ></path>
    </svg>
  );
};

ImageFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ImageFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ImageFilled;
