import React from 'react';
import PropTypes from 'prop-types';

const FileAviLight = props => {
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
        d="M21.806 7.91c.02.05.034.103.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.563-1.23-1.205L6.98 17.6H4.422a2.27 2.27 0 01-2.266-2.27v-4.178a2.27 2.27 0 012.266-2.27h2.521v-5.52c0-.63.586-1.205 1.23-1.205h7.572c.179 0 .35.07.481.194l5.41 5.238c.089.086.14.201.17.322zm-.793 12.728V8.758h-2.565c-.98 0-1.827-.316-2.443-.915-.622-.603-.95-1.43-.95-2.384V2.985H8.17c-.185 0-.406.205-.406.379v5.52h6.706a2.27 2.27 0 012.266 2.27v4.179a2.27 2.27 0 01-2.266 2.269H7.803l-.036 3.042c0 .182.204.372.406.372H20.61c.207 0 .403-.185.403-.378zM4.42 16.772h10.053c.792 0 1.44-.647 1.44-1.442v-4.18a1.44 1.44 0 00-1.44-1.44H4.42c-.793 0-1.44.648-1.44 1.44v4.18c0 .795.644 1.443 1.44 1.443zM15.879 5.457V3.165l4.919 4.764h-2.35c-.76 0-1.407-.238-1.869-.683-.46-.443-.7-1.062-.7-1.79zM6.36 11.523h.927l1.33 3.684H7.72l-.308-.928H6.215l-.286.928h-.804l1.236-3.684zm.846 2.149l-.404-1.227h-.01l-.385 1.227h.799zm2.176-2.149h-.899l1.283 3.684h.877l1.224-3.684h-.818l-.804 2.672-.863-2.672zm2.96 0h.841v3.684h-.84v-3.684z"
      ></path>
    </svg>
  );
};

FileAviLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileAviLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileAviLight;
