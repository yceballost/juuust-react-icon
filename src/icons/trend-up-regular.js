import React from 'react';
import PropTypes from 'prop-types';

const TrendUpRegular = props => {
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
      <path d="M21.846 5.6v3.576c0 .328-.28.6-.622.6a.612.612 0 01-.622-.6V7.353l-5.47 7.54a.62.62 0 01-.754.208L7.18 12.039l-3.86 6.603a.613.613 0 01-.537.302.7.7 0 01-.308-.073.592.592 0 01-.244-.801c.005-.008.008-.017.014-.022l4.131-7.065a.625.625 0 01.788-.255l7.246 3.079 5.524-7.603H17.58a.612.612 0 01-.622-.599v-.003c0-.336.275-.602.622-.602h3.644a.61.61 0 01.622.6z"></path>
    </svg>
  );
};

TrendUpRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrendUpRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrendUpRegular;
