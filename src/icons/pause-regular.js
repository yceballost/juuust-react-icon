import React from 'react';
import PropTypes from 'prop-types';

const PauseRegular = props => {
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
        d="M11.986 21.821c-3.123 0-5.551-.815-7.218-2.423-1.731-1.667-2.608-4.157-2.608-7.403 0-3.247.877-5.74 2.608-7.41C6.435 2.979 8.866 2.16 11.986 2.16c3.124 0 5.552.815 7.222 2.423 1.734 1.67 2.61 4.162 2.61 7.409 0 3.246-.88 5.736-2.61 7.406-1.67 1.608-4.098 2.423-7.222 2.423zm0-18.571c-5.798 0-8.74 2.94-8.74 8.745 0 5.798 2.942 8.74 8.74 8.74 5.802 0 8.745-2.942 8.745-8.74 0-5.801-2.944-8.745-8.745-8.745zM9.258 16.376a.562.562 0 01-.56-.56V8.167c0-.308.252-.56.56-.56.308 0 .56.252.56.56v7.647c0 .309-.252.56-.56.56zm5.462 0a.562.562 0 01-.56-.56V8.167c0-.308.252-.56.56-.56.308 0 .56.252.56.56v7.647c0 .309-.252.56-.56.56z"
      ></path>
    </svg>
  );
};

PauseRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PauseRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PauseRegular;
