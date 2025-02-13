import React from 'react';
import PropTypes from 'prop-types';

const IntranetFilled = props => {
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
        d="M7.627 7.221c.894-2.74 2.538-4.778 4.395-5.221v5.221H7.627zM5.86 15.703H2.535C2.185 14.571 2 13.291 2 11.846c0-1.188.123-2.266.359-3.235H5.71a16.77 16.77 0 00.148 7.092zm2.006 1.39h4.156v4.593c-1.706-.412-3.23-2.173-4.156-4.594zm.91 4.243c-1.059-1.053-1.924-2.52-2.521-4.244H3.067c1.087 2.171 2.995 3.586 5.709 4.244zm9.294-2.162c0-.56.518-1.017 1.157-1.017.63-.003 1.145.456 1.145 1.017 0 .568-.515 1.025-1.145 1.025-.642 0-1.157-.46-1.157-1.025zm1.157-15.149c-.639 0-1.157.457-1.157 1.023 0 .56.515 1.016 1.157 1.016.63 0 1.145-.456 1.145-1.016 0-.566-.515-1.023-1.145-1.023zm-1.157 8.11c0-.558.518-1.017 1.157-1.017.63 0 1.145.459 1.145 1.016 0 .566-.515 1.023-1.145 1.023-.642 0-1.157-.457-1.157-1.023zm-6.048.582v1.008h3.149c.358 0 .647.255.655.575l.045 4.291h.98c.3-.924 1.236-1.6 2.373-1.6 1.356 0 2.46.978 2.46 2.183 0 1.201-1.104 2.187-2.46 2.187-1.137 0-2.076-.683-2.372-1.605h-1.628c-.358 0-.655-.257-.655-.574l-.045-4.291H12.02v.815H7.409a15.37 15.37 0 01-.499-3.88c0-1.117.12-2.196.35-3.213h4.762v.723h2.505l.044-4.291c0-.32.297-.577.656-.577h1.627c.3-.922 1.236-1.605 2.373-1.605 1.356 0 2.46.977 2.46 2.187 0 1.205-1.104 2.182-2.46 2.182-1.137 0-2.076-.683-2.373-1.599h-.98l-.045 4.286c-.008.325-.297.582-.655.582h-3.152v1.05h4.832c.297-.915 1.233-1.599 2.373-1.599 1.356 0 2.46.978 2.46 2.182 0 1.21-1.104 2.188-2.46 2.188-1.137 0-2.076-.683-2.373-1.605h-4.832zM2.796 7.221h3.257c.577-1.991 1.532-3.686 2.714-4.87C5.81 3.07 3.812 4.7 2.796 7.22z"
      ></path>
    </svg>
  );
};

IntranetFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IntranetFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IntranetFilled;
