import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeftLight = props => {
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
        d="M13.348 20.006c.183.177.483.469.872.469.213 0 .451-.087.712-.325l.008-.008 5.048-5.056c.66-.661.666-1.356.017-2.006l-5.073-5.092a.195.195 0 01-.062-.135c0-.025.006-.073.042-.109l2.563-2.563.008-.008c.267-.289.342-.788.177-1.16a.772.772 0 00-.728-.474h-.012L4.254 3.534a.672.672 0 00-.538.182.669.669 0 00-.182.538v12.602c-.003.384.188.686.518.83.359.153.826.08 1.09-.172l.005-.005 2.773-2.773a.143.143 0 01.11-.043c.05 0 .098.023.134.06l5.168 5.238.003.002.013.013zm1.2-.262c-.275.25-.41.258-.815-.146l-5.168-5.246a.743.743 0 00-.513-.224.707.707 0 00-.524.204l-2.77 2.77c-.092.087-.311.135-.479.062-.123-.053-.18-.151-.18-.314V4.237v-.014l-.002-.014c-.006-.045.003-.084.02-.1.016-.018.053-.026.1-.02.009.002.02.002.028.002l12.681.006h.003c.073 0 .165.017.221.143.076.168.04.423-.073.549l-2.56 2.56a.711.711 0 00-.204.524c.005.19.086.375.224.512l5.075 5.096c.219.218.322.414.32.602-.003.185-.115.39-.336.61l-5.048 5.051z"
      ></path>
    </svg>
  );
};

ArrowUpLeftLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpLeftLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpLeftLight;
