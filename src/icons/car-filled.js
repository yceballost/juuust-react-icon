import React from 'react';
import PropTypes from 'prop-types';

const CarFilled = props => {
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
        d="M17.317 9.472c.756.115 2.66.574 3.767 2.434 1.38 2.313-.03 3.582-.123 3.667l-.003.003a.623.623 0 01-.4.145h-2.384c-.23 1.213-1.166 1.944-2.566 1.944-1.398 0-2.336-.73-2.566-1.944h-3.42c-.233 1.21-1.168 1.939-2.566 1.939S4.72 16.928 4.49 15.72H2.773a.611.611 0 01-.597-.454l-.002-.012c-.028-.123-.237-1.051-.154-2.413-.009-1.062.672-2.843 2.21-4.345 1.084-1.059 2.966-2.32 5.781-2.32 4.465 0 6.692 2.477 7.306 3.295zM7.053 16.466c-.938 0-1.398-.442-1.398-1.353 0-.91.457-1.355 1.398-1.355.941 0 1.398.442 1.398 1.355 0 .91-.457 1.353-1.398 1.353zm8.552.006c-.938 0-1.398-.443-1.398-1.353 0-.91.457-1.353 1.398-1.353.938 0 1.395.443 1.395 1.353 0 .91-.457 1.353-1.395 1.353z"
      ></path>
    </svg>
  );
};

CarFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CarFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CarFilled;
