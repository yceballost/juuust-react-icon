import React from 'react';
import PropTypes from 'prop-types';

const HandLeftLight = props => {
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
        d="M9.577 17.393c-.078.23-.118.49-.118.774 0 1.257.79 2.036 2.065 2.036h7c.969 0 1.745-.272 2.3-.81.557-.54.865-1.378.865-2.36V9.244c0-.781-.745-1.126-1.061-1.272-.299-.136-1.266-.613-2.397-1.17l-.08-.04-.424-.208c-1.788-.878-3.882-1.907-5.223-2.537-.854-.4-1.742-.24-2.263.41a1.789 1.789 0 00-.398 1.13c.003.44.154.866.431 1.208.292.364.695.67 1.272 1.008l-7.386.003h-.042C2.77 7.864 2 8.64 2 9.907c0 1.316.83 2.134 2.16 2.136h2.904c-.058.208-.09.437-.09.684 0 1.003.505 1.703 1.354 1.944a2.506 2.506 0 00-.118.776c0 1.005.51 1.708 1.367 1.947zm10.67 1.418c-.398.386-.98.58-1.729.58l-6.991-.003c-.824 0-1.241-.412-1.241-1.224-.003-.177.022-.35.075-.518a.805.805 0 00-.056-.639.82.82 0 00-.504-.4c-.51-.143-.767-.536-.767-1.166a1.642 1.642 0 01.075-.52.818.818 0 00-.555-1.04c-.504-.143-.758-.535-.758-1.163 0-.17.02-.327.058-.464.02-.07.031-.146.031-.219a.818.818 0 00-.82-.812H4.161c-.876 0-1.338-.457-1.338-1.32 0-.53.137-1.238 1.347-1.316h7.375c.37 0 .695-.247.793-.6a.81.81 0 00-.373-.916c-.526-.308-.84-.551-1.047-.812a1.124 1.124 0 01-.255-.703c0-.23.075-.448.218-.625.278-.347.765-.414 1.267-.179 1.448.678 3.77 1.82 5.635 2.74 1.118.551 2.177 1.07 2.496 1.218.42.193.585.345.585.535v7.787c0 .762-.22 1.392-.618 1.779z"
      ></path>
    </svg>
  );
};

HandLeftLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HandLeftLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HandLeftLight;
