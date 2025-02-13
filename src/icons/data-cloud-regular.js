import React from 'react';
import PropTypes from 'prop-types';

const DataCloudRegular = props => {
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
        d="M4.482 7.795C4.68 2.283 9.894 2 10.958 2c.82 0 4.854.18 6.104 3.706 2.325.218 4.65 1.647 4.65 5.106 0 3.801-2.84 5.146-5.272 5.146l-.163.008v3.622c0 .552-.302 1.305-1.784 1.75-.768.228-1.76.348-2.79.348-1.042 0-2.034-.12-2.793-.347-1.481-.445-1.792-1.199-1.792-1.75v-3.575H6.38c-2.104 0-4.356-1.129-4.356-4.289 0-2.479 1.384-3.51 2.457-3.93zM16.28 11.23v3.518l.165-.009c.95 0 4.042-.283 4.042-3.93 0-3.436-2.725-3.882-3.896-3.915a.619.619 0 01-.583-.454c-.826-3.073-4.355-3.227-5.05-3.227-1.235 0-5.255.347-5.255 4.902l.008.106a.6.6 0 01-.442.583c-1.333.38-2.014 1.361-2.014 2.919 0 2.773 2.185 3.072 3.126 3.072h.737V11.23c0-.138.016-.267.058-.39.174-.616.762-1.07 1.729-1.361 1.532-.454 4.07-.454 5.59 0 1.482.437 1.785 1.19 1.785 1.75zm-4.577-.883c-.924 0-1.793.107-2.44.3-.456.132-.711.283-.834.417.114.12.375.283.843.42 1.294.39 3.577.39 4.87 0 .46-.137.712-.294.835-.414-.137-.154-.425-.3-.834-.431-.656-.185-1.524-.292-2.44-.292zm3.347 3.527c-.098.137-.37.356-.91.512-1.294.39-3.577.39-4.871 0-.574-.17-.826-.372-.927-.495v-1.46a4.4 4.4 0 00.566.219c.759.218 1.75.347 2.792.347 1.04 0 2.028-.12 2.79-.347a4.59 4.59 0 00.558-.21v1.434h.002zm-.91 3.426c.54-.154.812-.373.91-.51v-1.451a3.669 3.669 0 01-.549.21c-.764.227-1.762.347-2.792.347-1.05 0-2.04-.12-2.793-.347a5.598 5.598 0 01-.574-.21v1.468c.092.12.353.322.927.493 1.294.389 3.577.389 4.871 0zm.91 2.288c0 .193-.344.415-.91.583-1.308.39-3.577.39-4.88 0-.563-.171-.915-.39-.915-.583V18.26c.17.073.36.146.574.21.753.227 1.742.348 2.792.348 1.031 0 2.028-.12 2.793-.348.196-.055.376-.131.55-.21v1.328h-.004z"
      ></path>
    </svg>
  );
};

DataCloudRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DataCloudRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DataCloudRegular;
