import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRightLight = props => {
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
        d="M8.917 19.985c.336.333.678.501 1.017.501.336 0 .67-.16.988-.482l5.096-5.075a.195.195 0 01.134-.062c.025 0 .073.006.11.042l2.562 2.563.009.009c.288.266.787.341 1.16.176a.766.766 0 00.473-.737l.005-12.666a.672.672 0 00-.182-.538.669.669 0 00-.538-.182H7.146c-.383 0-.683.188-.826.518-.154.359-.081.826.171 1.09l.006.005L9.27 7.92c.064.062.053.174-.017.244l-5.238 5.168-.003.003c-.272.275-.84.849-.157 1.594l.009.008 5.053 5.048zm.398-.395l-5.05-5.045c-.25-.272-.259-.406.148-.812L9.65 8.565a.744.744 0 00.224-.513.707.707 0 00-.205-.524L6.9 4.758c-.087-.092-.134-.311-.062-.479.054-.123.152-.18.314-.18H19.782l.014-.002c.045-.006.084.003.101.02.017.016.025.053.02.1-.003.009-.003.02-.003.028l-.006 12.681v.003c0 .073-.016.165-.143.221-.168.076-.422.04-.549-.073l-2.56-2.56a.711.711 0 00-.523-.204.756.756 0 00-.513.224l-5.093 5.07c-.43.431-.77.425-1.212-.017z"
      ></path>
    </svg>
  );
};

ArrowUpRightLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpRightLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpRightLight;
