import React from 'react';
import PropTypes from 'prop-types';

const CloudUploadRegular = props => {
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
        d="M11.069 3.35c.832 0 4.868.19 6.109 3.863 2.33.227 4.658 1.714 4.655 5.31 0 3.964-2.834 5.368-5.268 5.368l-1.855.008v1.83c0 .464-.37.845-.82.845h-3.796c-.46 0-.82-.38-.82-.846v-1.804l-2.78.017c-2.103 0-4.344-1.174-4.344-4.462 0-2.583 1.384-3.647 2.457-4.087.184-5.75 5.406-6.042 6.462-6.042zm5.498 13.297l-1.846.008v-1.131h1.443c.33 0 .627-.208.756-.516a.878.878 0 00-.168-.921l-4.117-4.381a.837.837 0 00-1.177 0L7.237 14.17a.878.878 0 00-.168.921.817.817 0 00.764.516h1.443v1.072l-2.779.017c-.944 0-3.134-.308-3.134-3.215 0-1.63.678-2.65 2.014-3.042a.637.637 0 00.442-.617l-.008-.1c0-4.762 4.028-5.127 5.263-5.127.7 0 4.239.157 5.076 3.373a.605.605 0 00.563.465c1.177.034 3.916.499 3.916 4.09-.003 3.823-3.104 4.123-4.062 4.123zm-3.064 2.683H10.48v-4.112a.84.84 0 00-.829-.848l-.91-.009 3.305-3.49 3.2 3.406h-.903c-.45 0-.82.376-.829.849l-.011 4.204z"
      ></path>
    </svg>
  );
};

CloudUploadRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudUploadRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudUploadRegular;
