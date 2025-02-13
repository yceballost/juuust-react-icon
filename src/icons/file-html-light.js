import React from 'react';
import PropTypes from 'prop-types';

const FileHtmlLight = props => {
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
        d="M21.806 7.913c.02.05.034.103.034.162v12.563c0 .653-.563 1.204-1.23 1.204H8.173c-.655 0-1.23-.563-1.23-1.204l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.27v-4.179a2.27 2.27 0 012.266-2.268h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.572c.179 0 .35.07.481.194l5.41 5.238c.089.086.14.201.17.325zm-.793 12.725V8.758h-2.565c-.98 0-1.827-.316-2.443-.915-.622-.6-.952-1.426-.952-2.384V2.985H8.17c-.185 0-.406.205-.406.379v5.52h6.706a2.27 2.27 0 012.266 2.27v4.179a2.27 2.27 0 01-2.266 2.269H7.803l-.036 3.042c0 .182.204.372.406.372H20.61c.207 0 .403-.185.403-.378zM4.42 16.772h10.053c.792 0 1.44-.647 1.44-1.442v-4.18c0-.795-.645-1.442-1.44-1.442H4.42c-.793 0-1.44.647-1.44 1.443v4.179c0 .795.644 1.443 1.44 1.443zM15.879 5.457V3.165l4.919 4.764h-2.35c-.76 0-1.407-.238-1.869-.683-.46-.443-.7-1.062-.7-1.79zM3.607 11.708h.706v1.26h1.09v-1.26h.706v3.095h-.706v-1.302h-1.09v1.302h-.706v-3.095zm3.86.51H6.51v-.51h2.656l-.054.51h-.935V14.8H7.47v-2.582h-.003zm2.622-.51h-.557v3.095h.593v-1.8l.662 1.094h.543l.641-1.075v1.781h.647v-3.095h-.543l-1.008 1.728-.978-1.728zm3.199 0h.706v2.583h1.37v.512h-2.076v-3.095z"
      ></path>
    </svg>
  );
};

FileHtmlLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileHtmlLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileHtmlLight;
