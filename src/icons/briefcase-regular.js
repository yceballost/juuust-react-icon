import React from 'react';
import PropTypes from 'prop-types';

const BriefcaseRegular = props => {
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
        d="M16.933 7.182h3.46c.806 0 1.453.653 1.453 1.463v11.73c0 .813-.65 1.471-1.454 1.471H3.62c-.804 0-1.459-.66-1.459-1.47V8.645c0-.81.655-1.463 1.46-1.463h3.453v-.355c0-2.569 2.174-4.667 4.84-4.667h.188c2.667 0 4.832 2.098 4.832 4.667v.355zm-8.63-.355c0-1.883 1.625-3.429 3.61-3.429h.188c1.986 0 3.602 1.546 3.602 3.429v.355h-7.4v-.355zm12.314 5.462c-1.664 1.221-4.306 1.776-8.538 1.776-4.34 0-7.031-.586-8.687-1.891V8.647a.23.23 0 01.23-.224h16.773c.123 0 .222.101.222.224v3.642zm-9.197 4.146h1.174v-1.132h-1.173v1.131zm8.975 4.17a.222.222 0 00.222-.23h-.003v-6.621c-1.591.91-3.734 1.39-6.793 1.512v1.39a.94.94 0 01-.434.818c-.205.131-.46.199-.787.199h-1.196c-.32 0-.583-.068-.787-.2a.955.955 0 01-.429-.817V15.26c-3.076-.14-5.216-.644-6.798-1.586v6.7c0 .132.106.23.23.23h16.775z"
      ></path>
    </svg>
  );
};

BriefcaseRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BriefcaseRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BriefcaseRegular;
