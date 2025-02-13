import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLight = props => {
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
        d="M7.498 21.456c.3.288.728.426 1.344.426l.043-.002.038-.001h6.219c.574.017 1.042-.135 1.353-.44.3-.294.448-.706.44-1.23V13.31c0-.095.064-.173.145-.173l3.779-.006h.017c.409 0 .734-.204.874-.549.162-.4.022-.894-.356-1.255l-8.93-8.966c-.129-.135-.272-.205-.426-.205h-.003c-.173 0-.341.087-.515.264l-8.96 8.902c-.376.367-.497.8-.331 1.184.173.41.641.67 1.165.653l3.518-.022c.081 0 .146.078.146.173l-.003 6.902v.006c.008.555.154.958.443 1.238zm.411-.426c-.17-.165-.257-.434-.263-.82l.003-6.903a.75.75 0 00-.737-.761l-3.524.022H3.38c-.275.011-.53-.112-.608-.294-.087-.202.09-.42.205-.532l8.96-8.908.003-.003a.49.49 0 01.087-.075l.003.002a.025.025 0 01.008.009l.006.006 8.938 8.974c0 .002.001.003.003.004 0 0 .002 0 .003.002.25.235.271.473.218.608-.05.117-.165.182-.327.182h-.014l-3.782.005a.75.75 0 00-.737.762v6.908c.006.356-.084.625-.263.801-.246.24-.639.28-.924.272H8.918c-.488.008-.818-.076-1.009-.26z"
      ></path>
    </svg>
  );
};

ArrowUpLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpLight;
