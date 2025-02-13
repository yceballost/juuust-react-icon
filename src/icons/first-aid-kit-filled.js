import React from 'react';
import PropTypes from 'prop-types';

const FirstAidKitFilled = props => {
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
        d="M20.23 6.543c.804 0 1.456.645 1.456 1.44v11.485c0 .793-.652 1.437-1.456 1.437H3.457A1.448 1.448 0 012 19.468V7.983c0-.793.653-1.44 1.457-1.44H7.1v-1.66c0-.673.638-1.202 1.456-1.202h6.566c.818 0 1.46.53 1.46 1.201v1.661h3.647zM8.333 4.947v1.596h7.023V4.947a.437.437 0 00-.227-.053H8.563a.415.415 0 00-.23.053zm5.37 6.938h1.82c.561 0 1.054.443 1.054.947v1.776c0 .507-.49.95-1.05.95h-1.818v1.795c0 .563-.44 1.04-.961 1.04h-1.804c-.521 0-.96-.474-.96-1.037v-1.793H8.161c-.571 0-1.053-.434-1.053-.95v-1.775c0-.516.48-.95 1.05-.95h1.819v-1.796c0-.551.448-1.036.96-1.036h1.801c.513 0 .964.485.964 1.036v1.793z"
      ></path>
    </svg>
  );
};

FirstAidKitFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FirstAidKitFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FirstAidKitFilled;
