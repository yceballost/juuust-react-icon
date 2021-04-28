import React from 'react';
import PropTypes from 'prop-types';

const OnlineReloadLight = props => {
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
        d="M5.17 16.384h13.655c1.014 0 1.784-.294 2.291-.876.48-.546.72-1.353.72-2.398V8.172c0-1.045-.243-1.852-.72-2.398-.507-.58-1.277-.874-2.29-.874H5.17c-1.014 0-1.785.294-2.292.874-.479.546-.72 1.353-.72 2.398v4.938c0 1.045.241 1.851.72 2.4.507.58 1.278.874 2.292.874zm-2.451-8.21c0-1.851.778-2.714 2.45-2.714h13.656c1.672 0 2.451.86 2.451 2.712v4.94c0 1.852-.779 2.715-2.45 2.715H5.17c-1.673 0-2.451-.863-2.451-2.714V8.174zm18.829 10.429H2.43a.281.281 0 01-.28-.28.28.28 0 01.28-.28h19.118a.28.28 0 01.28.28c0 .154-.126.28-.28.28zm-11.011-4.62c.434.144.94.217 1.504.217 1.131 0 2.014-.289 2.622-.86.63-.594.952-1.482.952-2.633 0-.853-.175-1.559-.522-2.11l.316.088.038.01.235.065a.282.282 0 00.345-.196.283.283 0 00-.196-.345l-.236-.064a17.116 17.116 0 00-.868-.23c-.409-.081-.709.115-.796.521a7.214 7.214 0 00-.086.566l-.01.067c-.022.164-.044.33-.069.448-.002.02-.005.04-.005.06a.28.28 0 00.554.058c.034-.16.062-.364.087-.563a8.23 8.23 0 01.058-.408c.396.481.598 1.164.598 2.033 0 .991-.26 1.74-.776 2.224-.502.47-1.252.708-2.238.708a4.32 4.32 0 01-1.331-.187.281.281 0 00-.345.173.28.28 0 00.169.359zm-1.645-1.292c-.35-.55-.526-1.26-.526-2.116 0-1.151.319-2.04.952-2.633.608-.572 1.49-.86 2.622-.86.563 0 1.067.073 1.504.213a.28.28 0 01-.174.532 4.321 4.321 0 00-1.33-.188c-.986 0-1.737.238-2.238.71-.516.484-.776 1.232-.776 2.223 0 .865.2 1.545.592 2.026.02-.118.039-.256.055-.393.025-.199.053-.403.087-.56a.279.279 0 01.546.118c-.026.125-.05.302-.073.478l-.005.037a7.222 7.222 0 01-.087.566c-.07.339-.297.532-.614.532a.942.942 0 01-.176-.017c-.14-.028-.415-.103-.868-.23l-.236-.064a.28.28 0 11.12-.546l.015.004.014.004.235.065.042.011c.118.033.225.063.32.088z"
      ></path>
    </svg>
  );
};

OnlineReloadLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OnlineReloadLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OnlineReloadLight;
