import React from 'react';
import PropTypes from 'prop-types';

const FirstAidKitRegular = props => {
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
        d="M21.686 7.983c0-.795-.652-1.44-1.456-1.44h-3.647V4.88c0-.673-.642-1.202-1.46-1.202H8.557c-.818 0-1.456.53-1.456 1.202v1.66H3.457A1.45 1.45 0 002 7.98v11.488c0 .793.653 1.437 1.457 1.437H20.23c.804 0 1.456-.645 1.456-1.437V7.983zM8.333 4.947v1.596h7.023V4.947a.459.459 0 00-.227-.053H8.56a.43.43 0 00-.227.053zm12.124 14.518V7.98c0-.126-.101-.227-.227-.227H3.457c-.126 0-.227.101-.227.227v11.485c0 .123.1.224.227.224h16.77a.226.226 0 00.23-.224zm-5.113-5.12v-1.247H13.09a.614.614 0 01-.617-.605v-2.224h-1.266v2.224a.612.612 0 01-.613.608l-2.255.003v1.246l2.255-.003a.61.61 0 01.616.605l.003 2.224 1.266.003-.003-2.224a.615.615 0 01.613-.608l2.255-.002zm1.233-1.51c0-.507-.493-.95-1.05-.95h-1.824v-1.793c0-.551-.448-1.036-.96-1.036H10.94c-.512 0-.96.485-.96 1.036v1.796H8.161c-.568 0-1.05.434-1.05.95v1.778c0 .516.482.95 1.053.95h1.821v1.792c0 .56.44 1.037.96 1.037h1.802c.52 0 .96-.473.96-1.037v-1.795h1.819c.557 0 1.05-.445 1.05-.95v-1.778z"
      ></path>
    </svg>
  );
};

FirstAidKitRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FirstAidKitRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FirstAidKitRegular;
