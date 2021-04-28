import React from 'react';
import PropTypes from 'prop-types';

const FileIlustratorLight = props => {
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
        d="M21.809 7.913c.02.05.034.106.034.162v12.563c0 .653-.564 1.204-1.23 1.204H8.176c-.656 0-1.233-.563-1.233-1.204l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.27v-4.179a2.27 2.27 0 012.266-2.268h2.521V3.36c0-.63.586-1.205 1.233-1.205h7.571c.182 0 .353.07.485.196l5.409 5.236a.683.683 0 01.168.325zm-.793 12.725V8.758H18.45c-.98 0-1.826-.316-2.442-.915-.622-.6-.953-1.426-.953-2.384V2.985H8.173c-.185 0-.406.205-.406.379v5.52h6.706a2.27 2.27 0 012.266 2.27v4.179a2.27 2.27 0 01-2.266 2.269H7.806l-.036 3.042c0 .182.204.372.406.372h12.437c.207 0 .403-.185.403-.378zM4.422 16.772h10.054c.792 0 1.44-.647 1.44-1.442v-4.18c0-.795-.645-1.442-1.44-1.442H4.422c-.792 0-1.44.647-1.44 1.443v4.179c0 .795.645 1.443 1.44 1.443zm11.46-11.316V3.165L20.8 7.929h-2.35c-.759 0-1.406-.238-1.868-.683-.46-.443-.7-1.062-.7-1.79zm-6.703 5.865h-.956l-1.277 3.804h.83l.293-.955h1.236l.316.955h.93L9.18 11.322zm-.499.95l.417 1.269h-.823l.395-1.269h.011zm2.325-.95h.868v3.804h-.868v-3.803z"
      ></path>
    </svg>
  );
};

FileIlustratorLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileIlustratorLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileIlustratorLight;
