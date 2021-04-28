import React from 'react';
import PropTypes from 'prop-types';

const StatusChartFilled = props => {
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
      <path d="M19.776 4.522a1.94 1.94 0 00-1.941 1.936c0 .468.173.894.453 1.227l-2.392 4a1.87 1.87 0 00-.448-.056c-.563 0-1.067.246-1.42.63l-4.129-1.81c.003-.053.017-.103.017-.159a1.94 1.94 0 00-3.882 0c0 .476.187.924.495 1.275l-2.204 3.89a1.922 1.922 0 00-.359-.036 1.94 1.94 0 00-1.94 1.935 1.943 1.943 0 003.884 0c0-.493-.19-.935-.495-1.277l2.21-3.896c.114.022.232.045.35.045.563 0 1.067-.247 1.423-.63l4.126 1.806c-.003.053-.017.104-.017.16 0 1.07.868 1.94 1.938 1.94 1.07 0 1.942-.868 1.942-1.938v-.002c0-.457-.166-.871-.432-1.202l2.398-4.014c.134.03.274.05.42.05 1.07 0 1.936-.865 1.938-1.935a1.935 1.935 0 00-1.935-1.939"></path>
    </svg>
  );
};

StatusChartFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StatusChartFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StatusChartFilled;
