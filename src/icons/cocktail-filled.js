import React from 'react';
import PropTypes from 'prop-types';

const CocktailFilled = props => {
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
        d="M13.246 6.227C13.263 3.5 14.762 2 17.48 2c2.731 0 4.235 1.513 4.23 4.26 0 2.748-1.505 4.261-4.236 4.261-.392 0-.753-.036-1.092-.098l-3.765 4.361a1.158 1.158 0 01-.294.241v3.801l3.966 1.675a.613.613 0 01.359.681.603.603 0 01-.591.487l-8.33.017a.605.605 0 01-.589-.476.614.614 0 01.34-.684l3.64-1.686v-3.798a1.183 1.183 0 01-.285-.216L4.68 8.316a1.226 1.226 0 01-.236-1.313 1.21 1.21 0 011.107-.74l.81-.003-1.023-1.03a.248.248 0 00-.174-.07H2.63a.607.607 0 010-1.216h2.535c.384 0 .76.154 1.028.426l1.871 1.882 5.182-.025zm4.233 3.078c-.023 0-.043-.001-.064-.003a.833.833 0 00-.06-.002l.905-1.048c.202-.216.325-.51.325-.83 0-.671-.538-1.215-1.204-1.215h-.011l-2.914.014c.014-2.047.975-3.005 3.023-3.005 2.036 0 3.028.997 3.028 3.047 0 2.076-.964 3.042-3.028 3.042zm-1.09-.84H6.496l-.933-.989 11.815-.056-.913 1.059a.141.141 0 01-.04-.007c-.012-.004-.023-.007-.036-.007z"
      ></path>
    </svg>
  );
};

CocktailFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CocktailFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CocktailFilled;
