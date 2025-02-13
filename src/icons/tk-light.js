import React from 'react';
import PropTypes from 'prop-types';

const TkLight = props => {
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
        d="M21.84 11.998c0-6.441-3.404-9.848-9.848-9.848-6.438 0-9.842 3.407-9.842 9.848 0 6.438 3.404 9.842 9.842 9.842 6.444 0 9.848-3.404 9.848-9.842zm-.824 0c0 5.987-3.034 9.021-9.024 9.021-5.984 0-9.021-3.037-9.021-9.021 0-5.99 3.034-9.024 9.021-9.024 5.987 0 9.024 3.034 9.024 9.024zm-9.352-4.903a.31.31 0 01.303.367l-.073.37a.309.309 0 01-.302.249H8.978v8.5c0 .171-.138.308-.309.308h-.406a.307.307 0 01-.308-.308v-8.5H5.279a.307.307 0 01-.308-.308v-.37c0-.17.138-.308.308-.308h6.385zm7.204 9.755a.31.31 0 00.106-.423l-3.121-5.183 2.886-3.642a.31.31 0 00-.241-.502h-.471a.311.311 0 00-.241.115l-3.81 4.797V7.409a.307.307 0 00-.308-.309h-.401a.307.307 0 00-.308.309v9.175c0 .17.137.308.308.308h.4c.171 0 .309-.137.309-.308v-3.017l1.21-1.516 2.802 4.693a.313.313 0 00.266.151h.457a.34.34 0 00.157-.045z"
      ></path>
    </svg>
  );
};

TkLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TkLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TkLight;
