import React from 'react';
import PropTypes from 'prop-types';

const FilePngLight = props => {
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
        d="M21.806 7.913c.02.05.034.103.034.162v12.563c0 .653-.563 1.204-1.23 1.204H8.173c-.655 0-1.23-.563-1.23-1.204l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.27v-4.179a2.27 2.27 0 012.266-2.268h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.572c.179 0 .35.07.481.194l5.41 5.235c.089.092.142.207.17.328zm-.793 12.725V8.756h-2.565c-.98 0-1.827-.317-2.443-.916-.622-.603-.952-1.426-.952-2.384v-2.47H8.17c-.185 0-.406.204-.406.378v5.52h6.706a2.27 2.27 0 012.266 2.27v4.179a2.27 2.27 0 01-2.266 2.269H7.803l-.036 3.042c0 .182.204.372.406.372H20.61c.207 0 .403-.185.403-.378zM4.42 16.772h10.053c.792 0 1.44-.647 1.44-1.442v-4.18c0-.795-.645-1.442-1.44-1.442H4.42c-.793 0-1.44.647-1.44 1.443v4.179c0 .795.644 1.443 1.44 1.443zM15.879 5.454V3.165l4.919 4.762h-2.35c-.762 0-1.407-.239-1.869-.684-.46-.442-.7-1.062-.7-1.79zm-4.367 7.869c0-1.152.608-1.93 1.86-1.93.364 0 .801.075 1.036.176l-.106.614a3.289 3.289 0 00-.871-.135c-.742 0-1.048.44-1.048 1.24 0 .415.053.754.216.978.134.188.356.297.708.297.135 0 .317-.016.446-.036v-.773h-.515v-.602h1.35v1.876c-.35.107-.908.188-1.311.188-1.32-.003-1.765-.728-1.765-1.893zm-7.064-1.86H5.71c.574 0 .941.08 1.176.3.2.181.297.467.297.86 0 .391-.092.688-.274.893-.216.24-.55.355-1.031.355h-.591v1.27h-.84v-3.678zM5.7 13.24c.269 0 .38-.036.49-.14.098-.098.146-.252.146-.468 0-.198-.043-.344-.14-.434-.101-.092-.258-.129-.516-.129h-.392v1.171H5.7zm2.694-1.778h-.619v3.675h.737v-2.23l1.69 2.23h.671v-3.675h-.736v2.353l-1.743-2.353z"
      ></path>
    </svg>
  );
};

FilePngLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilePngLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilePngLight;
