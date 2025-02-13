import React from 'react';
import PropTypes from 'prop-types';

const TrophyFilled = props => {
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
        d="M17.288 2c.348 0 .628.277.63.625h.004v.162c1.87.115 3.767 1.258 3.767 4.177 0 3.058-2.1 4.182-4.067 4.21h-.13c-.08 0-.156 0-.226-.003a8.402 8.402 0 01-.639-.059h-.033c-.81 1.468-1.972 2.12-4.12 2.297v3.426c2.366.224 3.674 1.694 3.674 4.23a.628.628 0 01-.63.621H8.171a.626.626 0 01-.63-.622c0-2.538 1.308-4.008 3.675-4.23v-3.411c-2.18-.104-3.572-.913-4.44-2.277a3.815 3.815 0 01-.359.022 4.867 4.867 0 01-.35.003C4.101 11.143 2 10.022 2 6.96c0-2.745 1.678-3.919 3.434-4.146v-.193c0-.345.283-.622.628-.622h11.226zm.314 7.927c-.14.003-.28 0-.42-.005.53-1.451.717-3.289.734-5.412v-.48c.93.08 2.512.561 2.512 2.93 0 2.64-1.977 2.953-2.826 2.967zm-11.515 0c-.852-.011-2.83-.325-2.83-2.966 0-2.104 1.247-2.72 2.177-2.888v.24c.011 2.21.196 4.116.745 5.611a1.018 1.018 0 00-.092.003z"
      ></path>
    </svg>
  );
};

TrophyFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrophyFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrophyFilled;
