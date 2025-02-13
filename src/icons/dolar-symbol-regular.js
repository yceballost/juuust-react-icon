import React from 'react';
import PropTypes from 'prop-types';

const DolarSymbolRegular = props => {
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
        d="M13.193 10.896c.664.101 1.33.247 1.97.552a4.034 4.034 0 012.26 2.983c.252 1.443-.224 2.961-1.277 4.062a5.206 5.206 0 01-2.956 1.54v.65c0 .538-.422.975-.944.975-.52 0-.944-.437-.944-.975v-.633a8.57 8.57 0 01-3.893-1.535.995.995 0 01-.221-1.374l.01-.015c.3-.415.88-.51 1.295-.21a6.763 6.763 0 002.815 1.165v-5.479c-1.05-.182-2.132-.51-2.997-1.44-.787-.846-1.149-1.974-1.017-3.179.171-1.44.95-2.737 2.14-3.563a5.017 5.017 0 011.871-.773v-.672A.96.96 0 0112.25 2a.96.96 0 01.944.975v.616a6.764 6.764 0 013.373 1.479c.403.347.465.95.134 1.37l-.014.017-.014.016a.92.92 0 01-1.3.107 4.864 4.864 0 00-2.179-1.009v5.325zM9.673 9.81c-.502-.538-.553-1.171-.502-1.608a3.12 3.12 0 011.3-2.152c.263-.176.546-.294.834-.386v4.941c-.644-.134-1.213-.342-1.633-.795zm5.134 7.31c-.451.474-1.011.754-1.614.905v-5.151c.423.078.827.174 1.174.342.837.403 1.118 1.07 1.204 1.56.138.81-.154 1.706-.764 2.344z"
      ></path>
    </svg>
  );
};

DolarSymbolRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DolarSymbolRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DolarSymbolRegular;
