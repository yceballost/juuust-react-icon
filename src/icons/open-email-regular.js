import React from 'react';
import PropTypes from 'prop-types';

const OpenEmailRegular = props => {
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
        d="M20.866 7.985c.375.263.792.77.815 1.773 0 0-.009 9.8-.006 9.804.025.218.059.899-.403 1.456-.25.3-.734.661-1.628.678-.745.012-4.333.012-6.521.011H9.499c-2.633 0-4.95-.003-5.454-.01-.897-.02-1.381-.379-1.63-.679-.463-.557-.426-1.238-.401-1.456l-.008-9.787c.022-1.017.442-1.524.787-1.774l.137-.086 7.28-4.597c.042-.034.698-.482 1.625-.482a3.071 3.071 0 011.67.502l7.36 4.647zM10.899 4.34a1.84 1.84 0 01.95-.271c.535 0 .935.269.96.288l7.36 4.647c.15.107.24.348.262.667l-7.795 4.86a1.66 1.66 0 01-.919.288c-.521 0-.915-.263-.959-.293h-.002L3.244 9.79V9.79c.008-.387.103-.664.246-.768l7.41-4.68zm8.723 16.124c-.591.01-3.272.014-7.356.01h-.042c-3.58 0-7.493 0-8.157-.01-.232-.003-.54-.048-.694-.227-.171-.202-.132-.535-.132-.535l.008-.05-.005-8.404 6.812 4.291c.07.053.728.51 1.661.51.563 0 1.1-.165 1.588-.484l7.138-4.449-.009 8.482.009.104v.001c.002.026.035.334-.127.528-.15.185-.462.227-.694.233z"
      ></path>
    </svg>
  );
};

OpenEmailRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OpenEmailRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OpenEmailRegular;
