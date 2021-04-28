import React from 'react';
import PropTypes from 'prop-types';

const CancelRegular = props => {
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
        d="M24 12.003C24 3.832 19.578 0 11.997 0 4.415 0 0 3.832 0 12.003 0 20.18 4.415 24 11.997 24 19.577 24 24 20.179 24 12.003zM11.997 22.501c7.065 0 10.504-3.436 10.504-10.498C22.5 4.938 19.065 1.5 12 1.5 4.935 1.5 1.503 4.935 1.503 12.003c-.004 7.063 3.432 10.498 10.494 10.498zM17.85 6.143a.746.746 0 010 1.059L13.052 12l4.794 4.794a.75.75 0 11-1.045 1.08l-.017-.017-4.79-4.795-4.782 4.78a.75.75 0 01-1.058.004l-.004-.003a.75.75 0 010-1.062L10.931 12l-4.78-4.78a.747.747 0 01-.038-1.06.747.747 0 011.058-.037l.038.037 4.78 4.781 4.795-4.794a.751.751 0 011.066-.004z"
      ></path>
    </svg>
  );
};

CancelRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CancelRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CancelRegular;
