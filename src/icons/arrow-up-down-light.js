import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpDownLight = props => {
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
        d="M7.513 12.02a.962.962 0 01-.96-.961l-.003-3.39-2.247-.02a.489.489 0 01-.44-.282.515.515 0 01.085-.569l4.434-4.47a.498.498 0 01.31-.169.488.488 0 01.43.168l4.411 4.474a.122.122 0 01.008.01.514.514 0 01.073.559.485.485 0 01-.442.282l-2.244.02.006 3.387c0 .529-.432.96-.961.96h-2.46zm7.463 9.728c.09.07.193.103.3.103.14 0 .274-.059.37-.17l4.433-4.471a.515.515 0 00.084-.569.489.489 0 00-.44-.283l-2.246-.02-.003-3.392c0-.529-.431-.96-.96-.96h-2.46c-.53 0-.96.431-.96.96l.005 3.39-2.244.02a.485.485 0 00-.442.282.515.515 0 00.064.55c.003.002.006.006.008.01a.122.122 0 00.009.009l4.412 4.473a.52.52 0 00.07.068zm.302-.49l-4.286-4.342 2.177-.017h.006a.5.5 0 00.484-.51l-.005-3.44a.4.4 0 01.4-.4h2.46a.4.4 0 01.4.4l.006 3.44a.5.5 0 00.484.51h.006l2.176.017-4.308 4.341zm-8.165-10.2l-.003-3.44a.508.508 0 00-.487-.512h-.006L4.441 7.09l4.308-4.336 4.285 4.342-2.176.017h-.006a.501.501 0 00-.484.51l.005 3.437a.4.4 0 01-.4.4h-2.46a.4.4 0 01-.4-.4z"
      ></path>
    </svg>
  );
};

ArrowUpDownLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpDownLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpDownLight;
