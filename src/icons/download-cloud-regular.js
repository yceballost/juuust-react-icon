import React from 'react';
import PropTypes from 'prop-types';

const DownloadCloudRegular = props => {
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
        d="M10.97 3c.92 0 5.44.21 6.827 4.26 2.605.25 5.206 1.891 5.203 5.861 0 4.362-3.168 5.91-5.888 5.91l-1.847.01-2.548 2.675a.934.934 0 01-.658.284.93.93 0 01-.657-.284l-2.53-2.639-3.017.019C3.505 19.096 1 17.802 1 14.175c0-2.852 1.55-4.026 2.739-4.511C3.955 3.32 9.781 3 10.97 3zm6.145 14.656h-.532l.739-.769a.97.97 0 00.187-1.016.928.928 0 00-.854-.569h-1.603l-.01-4.646a.934.934 0 00-.926-.924H9.884c-.513 0-.93.42-.93.936v4.535l-1.612.01a.91.91 0 00-.845.568.942.942 0 00.188 1.016l.873.918-1.703.01c-1.055 0-3.503-.34-3.503-3.547 0-1.799.758-2.935 2.251-3.365a.668.668 0 00.485-.67v-.12c0-5.243 4.502-5.645 5.882-5.645.783 0 4.736.173 5.663 3.72a.69.69 0 00.639.512c1.314.037 4.376.55 4.376 4.511.003 4.214-3.472 4.535-4.533 4.535zm-5.052 2.778l-3.691-3.859h1.017c.514 0 .918-.41.918-.933v-4.535h3.386l.01 4.637c0 .513.413.936.927.936h1.007l-3.574 3.754z"
      ></path>
    </svg>
  );
};

DownloadCloudRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadCloudRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadCloudRegular;
