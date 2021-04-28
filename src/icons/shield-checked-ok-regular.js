import React from 'react';
import PropTypes from 'prop-types';

const ShieldCheckedOkRegular = props => {
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
        d="M20.905 5.14v.032c0 .555.008 6.654-.449 9.33-.621 3.61-7.61 6.985-7.907 7.128a.582.582 0 01-.51-.003c-.297-.14-7.28-3.518-7.902-7.126-.476-2.745-.46-9.092-.456-9.361a.597.597 0 01.74-.583c1.608.255 2.46-.316 3.534-1.036l.009-.006C9.025 2.804 10.227 2 12.29 2h.009c2.063.003 3.262.806 4.324 1.518 1.079.723 1.933 1.294 3.566 1.04a.615.615 0 01.715.582zm-1.625 9.154c.364-2.134.423-6.75.431-8.479-1.68.081-2.733-.613-3.75-1.294l-.003-.002c-1.008-.674-1.96-1.312-3.664-1.315h-.005c-1.706 0-2.658.639-3.67 1.317-1.014.678-2.056 1.373-3.748 1.294.009 1.728.067 6.345.437 8.48.412 2.386 4.958 5.108 6.983 6.12 2.028-1.012 6.58-3.74 6.99-6.12zm-3.493-5.61l-4.983 5.042-2-2.031a.592.592 0 00-.843 0 .607.607 0 000 .851l2.425 2.457a.592.592 0 00.84 0l5.404-5.468a.607.607 0 000-.852.592.592 0 00-.843 0z"
      ></path>
    </svg>
  );
};

ShieldCheckedOkRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldCheckedOkRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldCheckedOkRegular;
