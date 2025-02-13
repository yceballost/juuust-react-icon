import React from 'react';
import PropTypes from 'prop-types';

const CocktailRegular = props => {
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
        d="M13.221 6.224C13.235 3.501 14.734 2 17.451 2c2.731 0 4.235 1.515 4.232 4.26 0 2.748-1.504 4.261-4.235 4.261-.39 0-.75-.036-1.09-.098l-3.764 4.361a1.163 1.163 0 01-.294.241v3.798l3.966 1.678a.61.61 0 01-.232 1.168l-8.33.017a.608.608 0 01-.25-1.16l3.641-1.686v-3.798a1.198 1.198 0 01-.286-.216L4.66 8.314A1.227 1.227 0 014.422 7c.19-.445.625-.737 1.106-.74l.807-.002-1.022-1.031a.248.248 0 00-.174-.07H2.605a.607.607 0 010-1.216H5.14c.387 0 .756.154 1.028.426L8.04 6.249l5.182-.025zm4.166 3.081l-.06-.002.905-1.05c.202-.22.328-.51.328-.83 0-.672-.538-1.216-1.204-1.216h-.014l-2.913.014c.014-2.047.972-3.005 3.022-3.005 2.036 0 3.028.997 3.028 3.047 0 2.076-.964 3.045-3.028 3.045a.88.88 0 01-.064-.003zm-5.704 4.681L7.617 9.681h7.782l-3.714 4.305zm.026 5.908l-1.236.571 2.575-.006-1.34-.565zM17.35 7.423l-.916 1.056c-.01-.001-.021-.004-.032-.007a.158.158 0 00-.04-.007H6.467l-.936-.989c0 .003 11.818-.053 11.818-.053z"
      ></path>
    </svg>
  );
};

CocktailRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CocktailRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CocktailRegular;
