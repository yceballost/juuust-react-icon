import React from 'react';
import PropTypes from 'prop-types';

const ThrowLightFilled = props => {
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
        d="M12.874 2.16h7.586c.773 0 1.397.627 1.397 1.4v7.589c-.002.773-.63 1.4-1.403 1.4a1.39 1.39 0 01-.989-.412l-.708-.711-6.222 6.224a1.402 1.402 0 01-1.98 0l-4.196-4.199a1.402 1.402 0 010-1.98L12.58 5.25l-.697-.698a1.401 1.401 0 01.992-2.392zM2.771 16.866a.56.56 0 01-.4-.953l2.293-2.35a.561.561 0 01.801.785l-2.294 2.35a.55.55 0 01-.4.168zm-.611 4.423a.56.56 0 00.955.395l4.636-4.633a.561.561 0 00-.793-.793L2.325 20.89a.562.562 0 00-.165.398zm5.036.002a.561.561 0 00.964.392l2.294-2.352c.006-.004.01-.009.014-.014l.004-.004.005-.005a.562.562 0 00-.827-.759L7.356 20.9a.555.555 0 00-.16.392z"
      ></path>
    </svg>
  );
};

ThrowLightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThrowLightFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThrowLightFilled;
