import React from 'react';
import PropTypes from 'prop-types';

const FileCompressedLight = props => {
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
        d="M13.824 2.35l5.364 5.238a.68.68 0 01.202.487v12.566c0 .653-.56 1.204-1.219 1.204H5.843c-.65 0-1.218-.563-1.218-1.204V3.36c0-.63.58-1.205 1.218-1.205h7.505c.179 0 .347.07.476.194zm-7.98 18.669h12.33c.207 0 .403-.185.4-.384V8.747h-2.548c-.972 0-1.81-.313-2.42-.913-.617-.602-.942-1.426-.942-2.384V2.974H9.177v1.04h1.137a.41.41 0 01.406.411c0 .227-.179.412-.406.412H9.177v1.966h1.137a.41.41 0 01.406.412c0 .227-.179.412-.406.412H9.177v1.969h1.137a.41.41 0 01.406.412c0 .227-.179.412-.406.412H9.177v1.969h1.137a.41.41 0 01.406.412c0 .226-.179.411-.406.411H9.177v.913h1.112a.41.41 0 01.406.412v2.314a.41.41 0 01-.406.412H7.208a.41.41 0 01-.407-.412v-2.314a.41.41 0 01.407-.412h1.154v-2.308H7.196a.41.41 0 01-.406-.411.41.41 0 01.406-.412h1.166V9.027H7.196a.41.41 0 01-.406-.411.41.41 0 01.406-.412h1.166V6.237H7.196a.41.41 0 01-.406-.411.41.41 0 01.406-.412h1.166V2.98H5.843c-.184 0-.403.207-.403.38v17.278c0 .19.202.381.403.381zm4.039-4.58H7.617V15.4h2.266v1.04zm8.482-8.51h-2.337c-.756 0-1.397-.235-1.854-.683-.454-.443-.695-1.062-.695-1.793V3.156l4.886 4.773z"
      ></path>
    </svg>
  );
};

FileCompressedLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileCompressedLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileCompressedLight;
