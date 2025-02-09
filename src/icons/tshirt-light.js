import React from 'react';
import PropTypes from 'prop-types';

const TshirtLight = props => {
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
        d="M15.54 2.214l6.104 3.697a.412.412 0 01.168.51l-1.745 4.398a.403.403 0 01-.552.218l-1.583-.767.034 11.162c0 .11-.042.213-.118.292a.396.396 0 01-.285.12H6.694a.396.396 0 01-.286-.12.413.413 0 01-.117-.292l.033-11.168-1.613.773a.404.404 0 01-.543-.202l-1.975-4.4a.413.413 0 01.168-.527l6.361-3.697a.405.405 0 01.608.356c0 1.91.916 2.84 2.801 2.84 1.888 0 2.804-.927 2.804-2.838 0-.056.008-.109.03-.16 0 0 .004-.002.004-.005l.004-.014c.003-.011.006-.022.012-.033a.17.17 0 01.038-.047c.008-.006.015-.013.021-.02l.006-.007a.344.344 0 01.112-.08.456.456 0 01.036-.017.428.428 0 01.101-.02l.014-.004a.086.086 0 01.025-.004l.012.002a.03.03 0 00.01.003c.026.003.048.009.07.014a.368.368 0 01.099.034c.003 0 .008 0 .011.003zm2.16 7.028l1.776.862 1.453-3.666-5.238-3.171c-.235 1.913-1.476 2.963-3.563 2.963-2.092 0-3.339-1.05-3.571-2.977L3.08 6.435l1.652 3.68 1.821-.873a.407.407 0 01.58.372L7.1 21.02h10.054L17.12 9.614c0-.143.07-.274.188-.35a.415.415 0 01.392-.022z"
      ></path>
    </svg>
  );
};

TshirtLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TshirtLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TshirtLight;
