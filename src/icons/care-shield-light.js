import React from 'react';
import PropTypes from 'prop-types';

const CareShieldLight = props => {
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
        d="M17.161 10.039c-.386 2.243-4.52 4.274-4.991 4.498a.424.424 0 01-.174.04.437.437 0 01-.177-.04c-.47-.224-4.599-2.255-4.985-4.498-.293-1.686-.29-5.525-.289-5.86v-.017c0-.129.059-.247.16-.325.098-.079.227-.107.347-.079.997.157 1.53-.196 2.202-.647l.002-.001c.672-.448 1.43-.954 2.737-.954H12c1.302 0 2.06.506 2.73.953l.01.005c.671.448 1.21.804 2.215.644a.43.43 0 01.339.093.42.42 0 01.154.31v.112c-.003.682-.015 4.177-.286 5.766zm-.81-.146c-.251 1.476-3.08 3.168-4.358 3.807-1.277-.639-4.1-2.33-4.356-3.807-.226-1.32-.268-4.163-.274-5.275 1.035.058 1.68-.374 2.304-.792l.038-.025.005-.004c.628-.419 1.221-.814 2.28-.814h.006c1.059 0 1.652.395 2.28.814l.006.004c.627.42 1.271.845 2.341.812-.005 1.106-.044 3.958-.271 5.28zm5.253 5.683c.011-.14.26-3.453.23-4.602-.023-.969-.69-1.154-1.157-1.18a1.2 1.2 0 00-1.194.964l-.364 1.78c-.546-.309-1.21-.158-1.53.36l-.1.177c-.227.412-.655 1.177-1.476 1.602-.073.031-.454.236-1.076 1.045a9.159 9.159 0 00-1.18 2.04l-.447 1.08c-.303.23-.502.594-.502 1.006v.726c0 .697.563 1.266 1.255 1.266h3.53c.692 0 1.255-.569 1.255-1.266v-.726a1.26 1.26 0 00-.306-.818l1.659-1.417c.125-.11.258-.21.425-.337l.014-.01a2.44 2.44 0 00.62-.72c.193-.328.307-.65.344-.97zm-.818-.08c.003-.02.255-3.396.227-4.502-.006-.32-.093-.356-.311-.37-.252.008-.376.126-.41.3l-.529 2.582c-.003.018-.012.034-.02.051l-.01.022c.005.216-.042.434-.157.625l-.003.003-1.571 2.66a.409.409 0 01-.56.146.417.417 0 01-.143-.568l1.57-2.659.004-.002v-.003c.092-.157.022-.429-.132-.521-.143-.09-.345-.09-.445.075l-.084.146c-.252.451-.779 1.392-1.832 1.936l-.002.001c-.027.017-.305.185-.783.811a8.339 8.339 0 00-1.07 1.854l-.207.499h3.283a.95.95 0 01.18.02l1.896-1.622c.14-.12.291-.236.44-.348.181-.137.316-.3.442-.51.129-.226.207-.436.227-.627zm-2.756 5.078v-.726a.437.437 0 00-.435-.437h-3.529a.437.437 0 00-.434.437v.726c0 .24.196.437.434.437h3.53a.437.437 0 00.434-.437zm-7.678 0v-.726a.435.435 0 00-.434-.437h-3.53a.437.437 0 00-.434.437v.726c0 .24.193.437.434.437h3.53c.24 0 .434-.197.434-.437zm-6.037-3.591a11.516 11.516 0 00-.479-.379 1.596 1.596 0 01-.397-.481 1.595 1.595 0 01-.233-.608c-.003-.034-.255-3.41-.227-4.518.009-.306.079-.356.356-.373a.39.39 0 01.367.305l.526 2.58c.004.014.01.028.017.041l.014.032a1.215 1.215 0 00.16.63l1.569 2.659a.402.402 0 00.56.146.411.411 0 00.143-.567l-1.569-2.66-.003-.003s0-.003-.003-.003c-.092-.157-.022-.429.13-.521.148-.09.347-.09.447.075l.087.149c.252.45.779 1.39 1.835 1.935.003 0 .286.16.782.81.43.557.79 1.182 1.07 1.854l.207.499H6.39a.95.95 0 00-.18.02l-1.896-1.622zm6.359 1.862c.302.23.501.594.501 1.006v.725a1.26 1.26 0 01-1.252 1.264h-3.53a1.258 1.258 0 01-1.251-1.264v-.725c0-.314.117-.597.305-.818l-1.658-1.417a9.397 9.397 0 00-.418-.33 2.45 2.45 0 01-.638-.738 2.392 2.392 0 01-.342-.955l-.002-.03c-.028-.374-.257-3.481-.23-4.586.022-.97.689-1.151 1.083-1.176a1.204 1.204 0 011.261.96l.364 1.779c.546-.302 1.21-.154 1.527.364l.1.177c.23.411.662 1.173 1.494 1.607.056.026.437.23 1.058 1.04.471.616.869 1.302 1.177 2.039l.45 1.078zm4.07-12.49a.406.406 0 00-.58 0l-3.106 3.137-1.236-1.246a.41.41 0 00-.58 0 .418.418 0 000 .585l1.524 1.54a.412.412 0 00.58 0l3.398-3.43a.418.418 0 000-.586z"
      ></path>
    </svg>
  );
};

CareShieldLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CareShieldLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CareShieldLight;
