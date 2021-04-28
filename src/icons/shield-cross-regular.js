import React from 'react';
import PropTypes from 'prop-types';

const ShieldCrossRegular = props => {
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
        d="M20.675 4.69c.134.114.23.28.23.458v.028c0 .524.006 6.642-.457 9.32-.61 3.552-7.16 6.773-7.905 7.129l-.005.001-.006.001a.571.571 0 01-.496 0l-.004-.001-.004-.001c-.745-.356-7.286-3.577-7.896-7.13-.463-2.677-.457-8.798-.457-9.322v-.027a.632.632 0 01.235-.482.611.611 0 01.521-.11c1.603.253 2.451-.316 3.527-1.039C9.02 2.804 10.221 2 12.286 2h.008c2.064 0 3.266.804 4.325 1.515 1.076.723 1.93 1.292 3.552 1.037a.642.642 0 01.504.137zm-8.989-1.432c-1.336.131-2.173.692-3.053 1.283-1.011.677-2.062 1.38-3.74 1.294.009 1.053.031 3.154.132 5.12h6.661V3.258zm-6.355 11.03a22.45 22.45 0 01-.233-2.103h6.586v7.888c-2.202-1.185-5.98-3.625-6.353-5.784zm7.568 5.785v-7.888h6.588c-.058.807-.131 1.543-.226 2.104-.373 2.16-4.157 4.599-6.362 5.784zm6.79-14.238a118.953 118.953 0 01-.129 5.12H12.9V3.258c1.324.13 2.16.688 3.036 1.272l.016.01.014.01c1.004.675 2.044 1.374 3.723 1.285z"
      ></path>
    </svg>
  );
};

ShieldCrossRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldCrossRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldCrossRegular;
