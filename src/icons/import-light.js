import React from 'react';
import PropTypes from 'prop-types';

const ImportLight = props => {
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
        d="M5.758 10.725l5.894 5.893a.721.721 0 00.188.13c.14.06.3.06.44 0a.816.816 0 00.196-.13l5.79-5.79a.58.58 0 00-.82-.82l-4.808 4.806V2.737a.58.58 0 00-.58-.58c-.322 0-.58.26-.582.58v12.076l-4.9-4.91a.286.286 0 00-.027-.029l-.015-.014a.58.58 0 10-.776.866zm16.084 6.333a.58.58 0 00-.58-.577.573.573 0 00-.573.58v3.625H3.316V17.06a.581.581 0 00-1.16 0v4.204c0 .32.258.578.577.578h18.532c.32 0 .578-.261.578-.58v-4.205z"
      ></path>
    </svg>
  );
};

ImportLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ImportLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ImportLight;
