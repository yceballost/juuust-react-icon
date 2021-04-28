import React from 'react';
import PropTypes from 'prop-types';

const PriceDropFilled = props => {
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
        d="M20.048 14.381a.559.559 0 00-.521-.356h-2.718V3.387c0-.855-.532-1.387-1.386-1.387H9.415c-.846 0-1.373.532-1.373 1.387v.257c-1.291.09-2.316.493-3.056 1.208-.877.843-1.32 2.092-1.32 3.711 0 1.62.443 2.866 1.32 3.711.74.712 1.765 1.118 3.056 1.208v.543H5.325a.56.56 0 00-.378.975l7.1 6.557a.557.557 0 00.76 0l7.098-6.56c.17-.157.227-.4.143-.616zM4.788 8.563c0-2.569 1.246-3.818 3.814-3.818 2.569 0 3.815 1.25 3.815 3.818 0 2.569-1.249 3.815-3.815 3.815s-3.815-1.246-3.815-3.815zm3.814 3.294a.35.35 0 01-.35-.35v-.276a2.89 2.89 0 01-1.364-.497.423.423 0 01-.196-.364.411.411 0 01.417-.41c.095.004.188.032.266.085.292.194.586.316.877.366V8.873c-1.182-.2-1.437-.906-1.437-1.472 0-.863.556-1.452 1.437-1.558v-.277a.35.35 0 01.7 0v.288c.357.048.686.16.956.325.204.126.235.292.235.378 0 .222-.18.404-.404.404a.54.54 0 01-.238-.065l-.005-.002c-.184-.1-.363-.17-.544-.213v1.45c1.212.2 1.474.917 1.474 1.496 0 .48-.177.883-.507 1.171-.248.213-.577.353-.967.413v.299a.35.35 0 01-.35.347zM9.6 9.655c0 .373-.24.636-.647.737v-1.41c.562.14.647.403.647.673zM8.252 6.66v1.357c-.61-.165-.61-.487-.61-.653 0-.374.223-.626.61-.704z"
      ></path>
    </svg>
  );
};

PriceDropFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PriceDropFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PriceDropFilled;
