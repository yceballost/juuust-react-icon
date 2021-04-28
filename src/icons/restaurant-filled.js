import React from 'react';
import PropTypes from 'prop-types';

const RestaurantFilled = props => {
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
        d="M10.714 2.755a.598.598 0 00-.594-.602.602.602 0 00-.597.602l-.005 4.532h-.922V2.752a.598.598 0 00-.594-.602.6.6 0 00-.594.602v4.535h-.82V2.752a.581.581 0 00-.594-.582c-.328 0-.594.288-.594.619v7.358c0 .614.359 1.073.835 1.073l.386-.003a467.596 467.596 0 00-1.028 8.11c0 1.826 1.283 2.495 2.373 2.51h.199c1.098-.02 2.375-.687 2.372-2.558l-.009-.085c-.063-.627-.468-4.595-.949-7.971h.3c.476 0 .835-.46.835-1.073V2.755zm7.812 16.565c-.012-.116-.283-2.854-.65-5.739a.579.579 0 00.171-.423V2.775a.598.598 0 00-.594-.603c-2.129 0-3.862 1.754-3.862 3.91v7.076c0 .334.266.603.593.603h.185a440 440 0 00-.694 5.613c0 1.796 1.257 2.448 2.336 2.462h.187c1.076-.022 2.33-.678 2.328-2.512v-.004z"
      ></path>
    </svg>
  );
};

RestaurantFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RestaurantFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RestaurantFilled;
