import React from 'react';
import PropTypes from 'prop-types';

const LocationMapLight = props => {
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
        d="M21.824 21.316l-2.342-8.192a.417.417 0 00-.232-.263.418.418 0 00-.348.008l-2.823 1.41-.505-.163c1.242-2.003 2.331-4.29 2.337-6.049.011-3.693-2.188-5.906-5.878-5.917h-.027c-1.81 0-3.303.532-4.32 1.544-1.02 1.014-1.563 2.513-1.569 4.337-.003 1.753 1.045 4.006 2.255 5.992l-.664.194-2.364-1.337a.411.411 0 00-.594.233l-2.58 8.192a.41.41 0 00.554.501l4.399-1.91 4.664 1.905.115.028a.437.437 0 00.246-.02l4.782-1.916 4.334 1.91a.41.41 0 00.56-.488zM6.938 8.033c.003-1.625.45-2.888 1.328-3.76.868-.865 2.126-1.302 3.737-1.302h.025c3.275.008 5.073 1.815 5.062 5.093-.008 3.057-3.76 8.044-5.098 9.562-1.334-1.516-5.065-6.5-5.054-9.593zm13.856 12.67l-3.5-1.544-.705-4.116-.017-.092 2.255-1.127 1.966 6.878zm-17.57-.01l2.156-6.852 1.838 1.04-.496 4.294-3.499 1.519zm8.38-2.277c-.557-.585-1.683-1.98-2.778-3.67l-.798.23-.017.14-.465 4.068 4.04 1.656.019-2.424zm4.15-3.381l-.639-.202c-1.056 1.605-2.129 2.936-2.692 3.536l-.017 2.454 4.06-1.625-.712-4.163zm-5.065-7.338c0 .88.445 1.325 1.325 1.325.88 0 1.325-.445 1.325-1.325 0-.88-.446-1.325-1.325-1.325-.877 0-1.325.445-1.325 1.325zm1.325 2.146c1.322 0 2.146-.823 2.146-2.146 0-1.322-.824-2.146-2.146-2.146S9.87 6.372 9.87 7.697s.82 2.146 2.143 2.146z"
      ></path>
    </svg>
  );
};

LocationMapLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LocationMapLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LocationMapLight;
