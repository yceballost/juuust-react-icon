import React from 'react';
import PropTypes from 'prop-types';

const AmbulanceFilled = props => {
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
        d="M20.97 11.112c.254.32.716.922.716 1.63v2.88c0 .53-.224 1.053-.619 1.448-.403.395-.933.625-1.45.625h-.875c-.207 1.49-1.271 2.395-2.896 2.395-1.7 0-2.779-.99-2.913-2.6H8.989c-.132 1.614-1.213 2.6-2.913 2.6-1.709 0-2.79-.995-2.922-2.617C2.504 17.39 2 16.877 2 16.247V4.916c0-.684.594-1.235 1.32-1.235h11.7c.725 0 1.319.56 1.319 1.243v1.449c.692.042 1.37.386 1.756.93.376.51 2.586 3.43 2.874 3.809zm-.522 4.51V12.75c0-.283-.26-.631-.429-.855l-.025-.033a352.32 352.32 0 01-2.896-3.835c-.157-.221-.462-.378-.76-.412v6.65c1.295.165 2.155.955 2.385 2.196h.89c.19 0 .404-.098.572-.263a.851.851 0 00.263-.577zm-4.605 3.232c1.132 0 1.7-.568 1.7-1.694s-.568-1.703-1.7-1.703c-1.129 0-1.7.577-1.7 1.703.003 1.126.571 1.694 1.7 1.694zM7.776 17.16c0 1.126-.569 1.694-1.7 1.694-1.13 0-1.709-.568-1.706-1.694 0-1.126.577-1.703 1.706-1.703 1.128 0 1.7.577 1.7 1.703zm2.93-8.894h1.773c.429 0 .807.336.812.723v1.61c0 .387-.38.723-.81.723H10.71v1.77c0 .437-.33.807-.72.807H8.364c-.386 0-.717-.37-.717-.807l-.008-1.77H5.866c-.437 0-.802-.328-.802-.723V8.986c0-.395.365-.723.802-.723h1.773V6.496c0-.429.339-.807.725-.807H9.98c.387 0 .726.378.726.807v1.77z"
      ></path>
    </svg>
  );
};

AmbulanceFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AmbulanceFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AmbulanceFilled;
