import React from 'react';
import PropTypes from 'prop-types';

const CopyLight = props => {
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
        d="M16.224 7.899h4.366c.692 0 1.253.56 1.253 1.252v11.437c0 .691-.56 1.252-1.253 1.252H9.15c-.691 0-1.251-.56-1.251-1.252v-4.311c0-.062.016-.124.044-.18H3.408c-.692 0-1.252-.56-1.252-1.252V3.408c0-.689.56-1.252 1.252-1.252h11.44c.692 0 1.252.56 1.252 1.252v4.516a.46.46 0 01.123-.025zm-13.247 6.95V3.408c0-.239.193-.435.431-.435h11.44c.238 0 .434.193.434.434v11.437a.436.436 0 01-.434.434H3.408a.432.432 0 01-.431-.43zm18.045 5.741a.436.436 0 01-.434.435H9.15a.432.432 0 01-.432-.435v-4.31a.404.404 0 00-.045-.18h6.174c.692 0 1.252-.56 1.252-1.252V8.694a.46.46 0 00.123.025h4.367c.238 0 .435.194.435.434V20.59h-.003z"
      ></path>
    </svg>
  );
};

CopyLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CopyLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CopyLight;
