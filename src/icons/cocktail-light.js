import React from 'react';
import PropTypes from 'prop-types';

const CocktailLight = props => {
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
        d="M13.596 6.3c0-2.673 1.46-4.144 4.112-4.144 2.655 0 4.118 1.474 4.118 4.14 0 2.667-1.463 4.138-4.115 4.138-.515 0-.98-.07-1.41-.18l-3.85 4.465c-.057.065-.127.107-.197.149v4.38l4.171 1.763a.415.415 0 11-.16.796l-8.495.016a.414.414 0 01-.17-.79l3.834-1.776v-4.373l-.01-.005a.715.715 0 01-.19-.134l-6.271-6.64a.833.833 0 01-.16-.893.815.815 0 01.751-.501l1.521-.009-1.6-1.607a.443.443 0 00-.319-.135H2.568a.413.413 0 010-.826h2.583c.339 0 .664.137.902.378l2.114 2.126c.01.011.017.024.024.036l.016.026 5.406-.026a6.884 6.884 0 00-.007-.12c-.005-.083-.01-.166-.01-.255zm4.112 3.31a5.15 5.15 0 01-.801-.059l1.294-1.501a.825.825 0 00.227-.569.82.82 0 00-.818-.826h-.008l-3.166.014V6.66a5.267 5.267 0 01-.016-.365c0-2.23 1.075-3.313 3.29-3.313 2.217 0 3.295 1.084 3.295 3.313 0 2.233-1.078 3.314-3.297 3.314zm-5.88 4.569l-4.344-4.6h8.305l-.01.017-3.95 4.583zm.023 5.798l-2.199 1.017s4.583-.006 4.586-.009l-2.387-1.008zm5.753-12.496l-1.095 1.27H6.98a.415.415 0 00-.212.066l-1.21-1.283c0 .003 12.047-.053 12.047-.053z"
      ></path>
    </svg>
  );
};

CocktailLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CocktailLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CocktailLight;
