import React from 'react';
import PropTypes from 'prop-types';

const ShieldFilled = props => {
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
      <path d="M12.291 21.686a.596.596 0 01-.257-.059c-.745-.355-7.286-3.577-7.897-7.128-.473-2.743-.456-9.082-.456-9.35 0-.191.087-.367.235-.485a.611.611 0 01.521-.11c1.602.258 2.448-.316 3.524-1.039C9.022 2.804 10.224 2 12.289 2h.008c2.064.003 3.266.807 4.325 1.518 1.076.723 1.927 1.289 3.552 1.034a.626.626 0 01.501.137.638.638 0 01.23.462c0 .27.017 6.608-.448 9.35-.611 3.552-7.16 6.774-7.905 7.13a.659.659 0 01-.26.055z"></path>
    </svg>
  );
};

ShieldFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldFilled;
