import React from 'react';
import PropTypes from 'prop-types';

const ProcessLoadingFilled = props => {
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
        d="M2.16 12.006C2.16 5.563 5.563 2.16 12 2.16c6.443 0 9.846 3.403 9.846 9.846 0 6.437-3.406 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84zm10.49-4.174a.604.604 0 11-1.21 0V4.807a.604.604 0 111.21 0v3.025zm3.527 4.818h3.022a.604.604 0 100-1.21h-3.022a.604.604 0 100 1.21zm.46 4.902a.602.602 0 00.85-.003.604.604 0 000-.857l-2.136-2.137a.605.605 0 00-.855.854l2.137 2.14.003.003zm-4.676 2.252a.604.604 0 00.605-.605v-3.025a.604.604 0 10-1.21 0v3.025c0 .336.269.605.605.605zM9.45 15.35L7.31 17.49a.605.605 0 01-.854-.854L8.594 14.5a.605.605 0 01.855.022.6.6 0 010 .83zm-4.642-3.994a.606.606 0 000 1.21h3.025a.604.604 0 100-1.21H4.807zm9.75-2.7l2.138-2.138a.605.605 0 01.854.855L15.41 9.51a.605.605 0 01-.854 0 .608.608 0 01.003-.854z"
      ></path>
    </svg>
  );
};

ProcessLoadingFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProcessLoadingFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProcessLoadingFilled;
