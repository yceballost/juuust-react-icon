import React from 'react';
import PropTypes from 'prop-types';

const StormFilled = props => {
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
        d="M11.072 2.15c.82 0 4.865.19 6.109 3.863 2.325.227 4.655 1.714 4.652 5.31 0 3.956-2.834 5.362-5.268 5.362l-.975.008-6.776 5.062a.357.357 0 01-.233.081.42.42 0 01-.252-.09.422.422 0 01-.112-.498l1.826-4.205-3.546-.28C4.111 16.62 2.15 15.57 2.15 12.28c0-2.583 1.378-3.647 2.451-4.09.193-5.748 5.406-6.04 6.47-6.04zM9.573 20.167l6.325-4.897a.44.44 0 00.095-.409.415.415 0 00-.3-.291s-3.028-.602-3.061-.706c-.042-.132 1.779-4.711 1.779-4.711.064-.182 0-.4-.169-.507a.398.398 0 00-.507.075l-5.938 6.591a.414.414 0 00-.09.407c.04.14.149.246.289.282 0 0 2.994.664 3.061.706.021.015.006.045-.011.078a.35.35 0 00-.022.048l-1.451 3.334z"
      ></path>
    </svg>
  );
};

StormFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StormFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StormFilled;
