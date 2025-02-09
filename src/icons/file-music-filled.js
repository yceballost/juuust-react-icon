import React from 'react';
import PropTypes from 'prop-types';

const FileMusicFilled = props => {
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
        d="M19.287 7.997a.612.612 0 00-.047-.238.842.842 0 00-.213-.384L13.814 2.25A.85.85 0 0013.209 2h-7.3c-.725 0-1.387.658-1.387 1.384v16.918c0 .737.648 1.384 1.387 1.384h11.992c.75 0 1.386-.633 1.386-1.384V7.997zM13.54 5.434V3.67l4.05 3.984h-1.772c-.684 0-1.258-.213-1.664-.611-.4-.395-.614-.95-.614-1.608zm1.19 6.885l-3.742-1.03v-.611l3.743 1.03v.611zm-.876 6.09h.104c.512-.011.773-.291.773-.838 0-.543-.26-.826-.779-.84h-.112c-.756.008-.756.63-.756.835 0 .552.257.835.77.843zM9.189 16.4h-.115c-.51-.009-.77-.292-.77-.844 0-.204 0-.826.756-.832h.11c.518.012.781.297.781.844 0 .54-.26.82-.762.832zm1.62-6.866l4.327 1.193c.353.045.63.353.639.734v6.115c0 1.37-.964 1.871-1.79 1.888h-.143c-.824-.011-1.79-.515-1.79-1.896 0-1.381.96-1.88 1.784-1.888l.143.002c.25.006.51.062.756.168v-2.437l-3.742-1.033-.014 3.33c-.07 1.253-.983 1.729-1.776 1.746H9.06c-.826-.012-1.79-.516-1.79-1.897 0-1.38.961-1.88 1.785-1.888h.143c.249.006.51.062.756.168v-3.59c0-.407.322-.735.72-.735l.134.02z"
      ></path>
    </svg>
  );
};

FileMusicFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileMusicFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileMusicFilled;
