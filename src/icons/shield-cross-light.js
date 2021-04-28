import React from 'react';
import PropTypes from 'prop-types';

const ShieldCrossLight = props => {
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
        d="M20.47 4.854a.433.433 0 01.163.31v.028c0 .53.007 6.763-.46 9.485-.615 3.583-7.677 6.983-7.98 7.126 0 .002-.002.002-.002.002l-.003.001a.39.39 0 01-.339 0l-.004-.001c-.002 0-.003 0-.004-.002-.3-.143-7.353-3.543-7.97-7.126-.47-2.72-.465-8.954-.465-9.485v-.027a.414.414 0 01.507-.406c1.738.28 2.681-.349 3.768-1.075l.02-.012c1.061-.712 2.263-1.516 4.316-1.516h.006c2.053.003 3.257.807 4.316 1.516l.01.006c1.088.728 2.032 1.36 3.772 1.083a.448.448 0 01.35.093zM11.606 3.01c-1.552.1-2.518.733-3.448 1.355C7.11 5.07 6.02 5.795 4.236 5.641c.005 1.005.028 3.44.145 5.66h7.224v-8.29zM4.69 14.53c-.109-.63-.19-1.473-.255-2.392h7.171v8.605c-1.683-.882-6.465-3.599-6.916-6.212zm7.745 6.213V12.14h7.174c-.062.92-.143 1.765-.252 2.393-.448 2.613-5.238 5.33-6.922 6.212zm7.37-15.109c-.003 1-.025 3.443-.143 5.667h-7.227V3.013c1.552.098 2.519.734 3.446 1.356 1.042.695 2.12 1.412 3.924 1.266z"
      ></path>
    </svg>
  );
};

ShieldCrossLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldCrossLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldCrossLight;
