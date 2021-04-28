import React from 'react';
import PropTypes from 'prop-types';

const ReloadLight = props => {
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
      <path d="M21.496 2.196a.615.615 0 00-.647.112l-2.818 2.673a9.881 9.881 0 00-6.075-2.017c-4.958-.009-9.138 3.557-9.734 8.302-.597 4.745 2.585 9.171 7.4 10.3 4.815 1.129 9.748-1.392 11.482-5.871a.552.552 0 00-.336-.714.597.597 0 00-.445.01.568.568 0 00-.306.315c-1.308 3.358-4.703 5.529-8.42 5.383-3.717-.145-6.919-2.577-7.935-6.025-1.02-3.451.372-7.143 3.45-9.154 3.079-2.011 7.152-1.894 10.098.297L14.611 8.28a.54.54 0 00-.134.61c.09.211.302.348.537.348l5.916-.355a.569.569 0 00.544-.524l.358-5.569a.574.574 0 00-.336-.594z"></path>
    </svg>
  );
};

ReloadLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ReloadLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ReloadLight;
