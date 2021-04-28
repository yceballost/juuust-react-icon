import React from 'react';
import PropTypes from 'prop-types';

const PillLight = props => {
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
        d="M11.845 4.227l.16-.151c2.557-2.555 5.37-2.555 7.921.002 2.519 2.513 2.558 5.289.113 7.813l-8.107 8.106a1.783 1.783 0 01-.18.177c-1.19 1.114-2.442 1.672-3.7 1.672-1.344 0-2.694-.639-3.974-1.922-2.555-2.554-2.558-5.367-.006-7.918l.16-.163a5.76 5.76 0 01.35-.345l6.938-6.94c.068-.082.16-.172.257-.265l.068-.066zm4.27 10.409a.44.44 0 00-.135.014c-1.295.412-2.827-.252-4.555-1.983-1.72-1.72-2.33-3.614-1.927-4.902.02-.068.899-.947 2.636-2.639.071-.083.15-.158.23-.235l.061-.06.17-.167c1.121-1.118 2.247-1.678 3.373-1.678 1.127 0 2.253.56 3.37 1.678 2.205 2.204 2.238 4.437.107 6.638l-3.33 3.334zm-4.707 4.706l-.081.08c-.04.046-.084.088-.129.127-2.162 2.025-4.358 1.955-6.53-.213-2.237-2.238-2.24-4.504-.008-6.737l.171-.179.002-.002c.095-.1.187-.197.31-.303l3.355-3.356c-.053 1.381.717 2.888 2.33 4.501 1.538 1.541 2.986 2.322 4.314 2.345l-3.734 3.737z"
      ></path>
    </svg>
  );
};

PillLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PillLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PillLight;
