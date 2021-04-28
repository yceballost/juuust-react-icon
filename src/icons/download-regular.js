import React from 'react';
import PropTypes from 'prop-types';

const DownloadRegular = props => {
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
        d="M11.104 21.333c.179.213.445.336.725.336.28 0 .546-.123.728-.336l8.863-9.142c.011-.012.022-.023.03-.034.25-.303.3-.726.13-1.079a.962.962 0 00-.874-.56h-3.961l.003-6.596a1.903 1.903 0 00-1.905-1.905h-6.03c-1.051 0-1.905.854-1.905 1.905v6.596H2.975a.958.958 0 00-.871.56c-.171.353-.12.774.128 1.079l.016.017.015.017 8.84 9.142zm.728-.812l-8.62-8.913v-.003h3.816c.535 0 .972-.448.972-.997V3.922c0-.449.364-.816.815-.816h6.03c.452 0 .816.367.816.818l-.003 6.687c0 .549.437.997.972.997h3.843l-8.641 8.913z"
      ></path>
    </svg>
  );
};

DownloadRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadRegular;
