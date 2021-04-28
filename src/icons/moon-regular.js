import React from 'react';
import PropTypes from 'prop-types';

const MoonRegular = props => {
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
        d="M2.55 11.818c0 7.16 4.88 9.79 9.457 9.868.294 0 .608 0 .86-.003 1.459-.025 6.386-.456 8.492-5.008a.617.617 0 00-.866-.793c-1.36.774-2.828.92-3.593.936-.196.005-.434.005-.647.005-1.518-.025-6.485-.585-6.485-6.817 0-4.6 2.645-6.13 4.863-6.603a.616.616 0 00-.02-1.207 11.241 11.241 0 00-1.795-.188L11.936 2C7.4 2.059 2.55 4.667 2.55 11.818zm1.238 0c0-7.647 5.896-8.518 7.983-8.583-1.686 1.062-3.238 3.05-3.235 6.768 0 5.846 3.978 7.989 7.711 8.047.239 0 .496 0 .692-.008a9.608 9.608 0 002.323-.339c-2.068 2.457-5.331 2.726-6.42 2.745-.253.009-.553.009-.821.009-1.933-.031-8.233-.751-8.233-8.64z"
      ></path>
    </svg>
  );
};

MoonRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoonRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoonRegular;
