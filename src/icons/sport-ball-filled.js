import React from 'react';
import PropTypes from 'prop-types';

const SportBallFilled = props => {
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
        d="M12.6 2c1.65.126 3.19.655 4.518 1.504-1.272 2.003-2.034 4.695-2.13 7.563H12.6V2zm0 10.513v9.162a9.708 9.708 0 004.635-1.569c-1.302-1.966-2.109-4.703-2.246-7.593h-2.39zm3.834 0c.126 2.574.83 4.983 1.947 6.717 1.888-1.678 3.132-4.048 3.305-6.717h-5.252zm0-1.446h5.252a9.847 9.847 0 00-3.412-6.706c-1.078 1.754-1.745 4.182-1.84 6.706zm-5.28 0H8.658c-.095-2.86-.848-5.549-2.109-7.543a9.733 9.733 0 014.605-1.521v9.064zm-4.75 9.011a9.914 9.914 0 004.75 1.608v-9.173H8.65c-.135 2.902-.927 5.58-2.247 7.565zM2 12.513h5.204c-.123 2.543-.826 4.944-1.935 6.678A9.899 9.899 0 012 12.512zm5.213-1.446c-.095-2.543-.742-4.916-1.82-6.678a9.824 9.824 0 00-3.382 6.678h5.202z"
      ></path>
    </svg>
  );
};

SportBallFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SportBallFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SportBallFilled;
