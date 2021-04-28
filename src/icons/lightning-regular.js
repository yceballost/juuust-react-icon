import React from 'react';
import PropTypes from 'prop-types';

const LightningRegular = props => {
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
        d="M17.687 11.023c.21.053.375.216.434.429a.627.627 0 01-.151.599L8.684 21.67a.584.584 0 01-.748.078.618.618 0 01-.23-.736l2.7-7.05-4.111-1.017a.599.599 0 01-.432-.423.626.626 0 01.143-.597l8.916-9.571a.582.582 0 01.754-.09c.24.16.336.473.23.745l-2.72 6.905 4.501 1.109zm-5.919 2.731l-1.893 4.944 6.504-6.74-4.146-1.022a.596.596 0 01-.39-.316.634.634 0 01-.022-.51l1.816-4.605L7.587 12l3.767.932a.6.6 0 01.389.314.639.639 0 01.025.507z"
      ></path>
    </svg>
  );
};

LightningRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LightningRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LightningRegular;
