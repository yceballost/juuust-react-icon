import React from 'react';
import PropTypes from 'prop-types';

const DownloadCloudFilled = props => {
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
        d="M10.948 3c.917 0 5.488.216 6.802 4.332 1.581.124 5.25.927 5.25 5.741 0 5.519-4.818 5.79-5.782 5.79l-1.37.01-3.19 2.904a1.007 1.007 0 01-.636.223.957.957 0 01-.617-.213l-3.133-2.865-2.545.01C3.435 18.932 1 17.68 1 14.152c0-2.877 1.618-3.999 2.795-4.438C3.924 3.328 9.762 3 10.948 3zm5.607 13.988l.46-.476a.392.392 0 00.075-.404.355.355 0 00-.341-.223h-2.07a.137.137 0 01-.137-.139l-.019-5.173v-.003c0-.2-.163-.361-.366-.361H9.834a.37.37 0 00-.366.364v5.068a.144.144 0 01-.138.142H7.25a.357.357 0 00-.338.235.352.352 0 00.072.392l.56.587 4.467 4.082 4.543-4.09z"
      ></path>
    </svg>
  );
};

DownloadCloudFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadCloudFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadCloudFilled;
