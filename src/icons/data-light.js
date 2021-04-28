import React from 'react';
import PropTypes from 'prop-types';

const DataLight = props => {
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
        d="M16.463 2.566C15.253 2.211 13.671 2 12.006 2c-1.677 0-3.26.208-4.46.566-1.41.427-2.24 1.062-2.479 1.888-.042.16-.067.324-.067.492v14.108c0 1.067.855 1.87 2.545 2.38 1.21.367 2.793.566 4.46.566 1.657 0 3.243-.2 4.458-.567 1.685-.517 2.537-1.312 2.537-2.38V4.95c0-1.07-.852-1.862-2.537-2.383zM18.17 9.61c-.208.393-.818.91-1.94 1.252-1.128.342-2.627.527-4.219.527-1.592 0-3.082-.182-4.218-.524-1.01-.31-1.741-.777-1.963-1.244v-3.7c.413.333.987.617 1.724.837 1.209.367 2.795.566 4.46.566s3.251-.2 4.46-.566c.723-.217 1.286-.484 1.7-.82v3.672h-.004zm-1.94 6.183c1.122-.342 1.732-.86 1.94-1.253h.003v-3.706c-.439.341-1.018.626-1.698.825-1.204.368-2.785.57-4.46.57-1.666 0-3.252-.202-4.461-.57-.703-.21-1.286-.495-1.724-.82v3.71c.222.475.953.936 1.963 1.244 1.136.344 2.626.535 4.218.535s3.091-.194 4.219-.535zm1.94 3.265c0 .652-.655 1.184-1.949 1.58-1.136.341-2.635.532-4.218.532-1.584 0-3.083-.19-4.227-.532-1.294-.393-1.95-.928-1.95-1.58v-3.291c.431.324 1.022.61 1.725.825 1.21.368 2.795.57 4.46.57 1.676 0 3.257-.2 4.46-.57.681-.199 1.26-.492 1.7-.834v3.3zm-6.167-16.22c-1.59 0-3.091.19-4.227.532-1.069.328-1.724.777-1.899 1.287.005.005.007.007.008.01v.007c.175.51.83.95 1.908 1.278 1.136.344 2.626.535 4.218.535s3.083-.193 4.219-.535c1.055-.316 1.698-.743 1.89-1.235 0-.009.008-.017.008-.017-.14-.538-.779-.988-1.907-1.33-1.127-.341-2.63-.532-4.218-.532z"
      ></path>
    </svg>
  );
};

DataLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DataLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DataLight;
