import React from 'react';
import PropTypes from 'prop-types';

const DownloadCloudLight = props => {
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
        d="M10.947 3c.92 0 5.486.213 6.801 4.356 1.58.12 5.249.93 5.252 5.777 0 5.552-4.817 5.824-5.784 5.824l-1.984.018-2.667 2.8a.71.71 0 01-.504.225.721.721 0 01-.516-.226l-2.639-2.77-3.18.018C3.438 19.022 1 17.764 1 14.215c0-2.892 1.618-4.02 2.795-4.461C3.914 3.327 9.761 3 10.947 3zm6.266 15.015l-1.093.009 1.14-1.193a.75.75 0 00.137-.787.714.714 0 00-.654-.442h-1.865l-.01-4.987a.727.727 0 00-.716-.722h-4.32a.723.723 0 00-.716.722v4.894H7.24a.706.706 0 00-.654.442.745.745 0 00.147.79l1.277 1.335-2.297.01c-1.14 0-3.797-.377-3.797-3.868 0-1.953.83-3.195 2.463-3.674.204-.055.329-.367.329-.571 0-5.595 4.77-6.03 6.232-6.03.826 0 5.01.188 6.012 3.99a.454.454 0 00.432.347c1.408.037 4.689.59 4.689 4.856.003 4.53-3.719 4.879-4.861 4.879zm-5.155 2.95l-4.322-4.517h1.59a.713.713 0 00.707-.723v-4.893h3.915l.01 4.986c0 .405.322.723.716.723h1.572l-4.188 4.424z"
      ></path>
    </svg>
  );
};

DownloadCloudLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadCloudLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadCloudLight;
