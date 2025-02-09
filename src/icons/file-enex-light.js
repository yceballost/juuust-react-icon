import React from 'react';
import PropTypes from 'prop-types';

const FileEnexLight = props => {
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
        d="M21.806 7.907c.022.05.034.104.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.563-1.23-1.205l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.269v-4.18A2.27 2.27 0 014.422 8.88h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.569c.182 0 .353.07.482.194l5.408 5.238c.09.08.143.199.174.319zM20.61 21.013c.207 0 .406-.185.406-.378V8.755h-2.568c-.98 0-1.824-.316-2.443-.915-.622-.603-.952-1.429-.952-2.384V2.983H8.17c-.185 0-.406.204-.406.378v5.518h6.703a2.27 2.27 0 012.266 2.269v4.18a2.27 2.27 0 01-2.266 2.268H7.801l-.037 3.042c0 .182.205.373.406.373h12.44v.002zM2.98 15.327c0 .796.644 1.443 1.44 1.443h10.05c.793 0 1.44-.647 1.44-1.443v-4.18c0-.795-.645-1.442-1.44-1.442H4.42c-.793 0-1.44.647-1.44 1.443v4.18zM15.879 3.162l4.919 4.765h-2.35c-.76 0-1.407-.239-1.869-.684-.46-.442-.7-1.062-.7-1.79V3.162zM3.697 11.61h2.199l-.056.538h-1.4v.79h1.12v.557H4.44v.832H5.92v.538H3.697V11.61zm2.776 0h.546l1.543 2.087V11.61h.653v3.258h-.597L7.123 12.89v1.978H6.47V11.61h.003zm5.65 0h-2.2v3.255h2.225v-.538h-1.482v-.832h1.12v-.557h-1.12v-.79h1.4l.057-.538zm1.372 1.633l-.994-1.633h.776l.647 1.076.59-1.076h.79l-1.066 1.594 1.039 1.66h-.824l-.647-1.103-.585 1.104h-.804l1.078-1.622z"
      ></path>
    </svg>
  );
};

FileEnexLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileEnexLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileEnexLight;
