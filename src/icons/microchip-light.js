import React from 'react';
import PropTypes from 'prop-types';

const MicrochipLight = props => {
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
        d="M21.843 12.006a.412.412 0 01-.411.412l-2.827-.003v1.65h2.835a.414.414 0 010 .826h-2.829v2.647c0 .572-.53 1.073-1.132 1.073h-2.582v2.82a.412.412 0 01-.824 0v-2.82h-1.65v2.82a.412.412 0 01-.823 0v-2.82H9.95v2.82a.414.414 0 01-.826 0v-2.82H6.54c-.602 0-1.132-.502-1.132-1.073v-2.647H2.572a.412.412 0 010-.823h2.837v-1.65H2.572a.412.412 0 010-.824h2.837v-1.65H2.572a.412.412 0 010-.826h2.834V6.496c0-.566.541-1.081 1.132-1.081h2.583V2.572a.412.412 0 01.826 0v2.843h1.65V2.572a.412.412 0 01.824 0v2.843h1.65V2.572c0-.227.184-.412.411-.412.227 0 .412.185.41.412v2.846h2.582c.593 0 1.131.515 1.131 1.08v2.623h2.83a.412.412 0 010 .823h-2.83v1.65h2.827c.227 0 .411.185.411.412zm-4.37 5.781c.155 0 .306-.14.306-.246V6.499c0-.101-.162-.255-.305-.255H6.54c-.143 0-.305.154-.305.255V17.54c0 .11.142.246.305.246h10.933z"
      ></path>
    </svg>
  );
};

MicrochipLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicrochipLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MicrochipLight;
