import React from 'react';
import PropTypes from 'prop-types';

const HotelLight = props => {
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
        d="M21.843 12.027c0-9.053-7.505-9.815-9.432-9.86a21.73 21.73 0 00-.756-.01h-.177c-1.974.016-9.322.697-9.322 9.812 0 9.128 7.415 9.843 9.392 9.874.101.002.205.002.309.002.207 0 .414-.002.593-.005 1.88-.037 9.393-.74 9.393-9.813zm-.821 0c0 8.197-6.574 8.953-8.588 8.99l-.577.008c-.099 0-.197 0-.295-.003-.86-.014-3.07-.174-5.014-1.398-2.37-1.496-3.571-4.07-3.571-7.655 0-3.583 1.188-6.149 3.535-7.625 1.927-1.21 4.118-1.359 4.972-1.367h.17c.247 0 .491.003.738.008.86.023 3.067.202 5.022 1.429 2.392 1.501 3.608 4.064 3.608 7.613zm-4.709 5.303V6.669H13.88v4.347h-3.76V6.67H7.687v10.66h2.434v-4.487h3.759v4.49l2.434-.002zm.82-10.658a.82.82 0 00-.82-.821s-2.434 0-2.431-.003a.82.82 0 00-.821.82v3.527h-2.118V6.67a.82.82 0 00-.82-.82H7.688a.82.82 0 00-.82.82v10.664c0 .454.367.82.82.82h2.432a.82.82 0 00.82-.82v-3.67h2.118v3.67c0 .454.367.82.82.82h2.435a.82.82 0 00.82-.82V6.672z"
      ></path>
    </svg>
  );
};

HotelLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HotelLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HotelLight;
