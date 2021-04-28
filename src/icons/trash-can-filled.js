import React from 'react';
import PropTypes from 'prop-types';

const TrashCanFilled = props => {
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
        d="M16.549 6.137h4.535c.333 0 .602.272.605.603a.603.603 0 01-.602.602H19.63v11.115c0 1.008-.305 1.812-.907 2.389-.855.818-2.02.871-2.311.871a.703.703 0 01-.056-.002H7.305c-1.036 0-1.854-.314-2.428-.928-.89-.95-.82-2.271-.816-2.356v-.002L4.06 7.342H2.602a.601.601 0 110-1.205h4.532V4.325c0-.784.23-1.39.681-1.798.62-.563 1.398-.507 1.485-.493l5.128-.006c.804 0 1.283.333 1.544.614.63.675.585 1.627.577 1.733v1.762zm-8.213 0h7.011v-1.8c.009-.188-.022-.628-.257-.878-.146-.154-.362-.226-.662-.226l-5.187.002h-.003c-.066-.003-.395-.019-.625.19-.184.172-.277.477-.277.9v1.812zm5.56 11.476a.601.601 0 00.603-.602V10.85a.603.603 0 00-1.205 0v6.162c0 .334.272.602.602.602zm-3.507-.602a.601.601 0 11-1.204 0V10.85a.601.601 0 111.204 0v6.162z"
      ></path>
    </svg>
  );
};

TrashCanFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrashCanFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrashCanFilled;
