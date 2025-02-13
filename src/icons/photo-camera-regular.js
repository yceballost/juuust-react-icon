import React from 'react';
import PropTypes from 'prop-types';

const PhotoCameraRegular = props => {
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
        d="M21.307 18.863c.535-.566.499-1.384.493-1.434h-.003V8.54c0-.76-.294-1.205-.54-1.445-.44-.428-.994-.47-1.151-.481l-.04-.004-5.235-.006-.813-1.389a1.197 1.197 0 00-1.027-.591h-2.183c-.456 0-.865.255-1.067.664l-.647 1.316c-2.42 0-4.428.003-4.95.006-.826.003-1.29.33-1.537.602-.513.574-.451 1.306-.446 1.325l.026 8.908c.047 1.6 1.17 1.91 1.633 1.91l16.249.003c.636 0 1.025-.269 1.238-.496zm-.88-.815c.16-.17.174-.515.169-.58l-.003-8.927c0-.277-.06-.476-.18-.591a.575.575 0 00-.336-.143l-5.59-.003a.604.604 0 01-.522-.297l-.989-1.689-2.168.006-.798 1.647a.604.604 0 01-.54.336c-2.583 0-4.77 0-5.32.006-.31.002-.53.07-.647.204-.16.18-.146.46-.143.462l.028 8.956c.021.682.352.725.407.732l.008.001 16.266.003c.221-.005.31-.073.358-.123zm-5.512-5.056c0-2.74-2.238-2.97-2.813-2.983a1.967 1.967 0 00-.22.003h-.06c-.588.005-2.781.21-2.781 2.966 0 2.762 2.213 2.978 2.801 2.986h.095c.03 0 .061 0 .091-.002h.083c.563-.012 2.804-.225 2.804-2.97zm-1.202 0c0 .431 0 1.742-1.622 1.773l-.154.003h-.075c-1.617-.025-1.617-1.356-1.617-1.793 0-.434 0-1.759 1.591-1.773h.048c.064 0 .132 0 .19.003 1.64.039 1.64 1.356 1.64 1.787z"
      ></path>
    </svg>
  );
};

PhotoCameraRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PhotoCameraRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PhotoCameraRegular;
