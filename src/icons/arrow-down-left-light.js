import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeftLight = props => {
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
        d="M3.716 20.302c.12.12.286.185.47.185h.023c.016-.002.033-.002.048 0h12.599c.384 0 .683-.188.826-.518.154-.359.082-.827-.17-1.09l-.006-.006-2.773-2.773c-.065-.062-.053-.174.017-.244l5.238-5.168.003-.002c.271-.275.84-.85.156-1.594l-.008-.009-5.056-5.05c-.33-.333-.658-.496-.997-.501-.342-.006-.681.16-1.006.484L7.988 9.09a.195.195 0 01-.135.062.155.155 0 01-.109-.042L5.18 6.546l-.008-.009c-.289-.266-.788-.342-1.16-.176a.766.766 0 00-.474.736l-.005 12.667a.672.672 0 00.182.538zm.527-13.434a.532.532 0 01.204-.04c.132 0 .263.042.345.115l2.56 2.56c.14.138.325.21.524.205a.762.762 0 00.512-.224l5.093-5.073c.218-.218.414-.322.602-.32.185.004.39.116.61.337l5.045 5.042c.25.274.258.409-.145.815l-5.238 5.168a.743.743 0 00-.225.513.707.707 0 00.205.524l2.77 2.77c.087.092.135.31.062.479-.053.123-.151.18-.314.18H4.226a.105.105 0 01-.014.002c-.045.006-.084-.003-.101-.02s-.025-.053-.02-.1c.003-.009.003-.02.003-.029L4.1 7.092v-.003c0-.073.017-.165.143-.221z"
      ></path>
    </svg>
  );
};

ArrowDownLeftLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownLeftLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownLeftLight;
