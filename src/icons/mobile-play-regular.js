import React from 'react';
import PropTypes from 'prop-types';

const MobilePlayRegular = props => {
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
        d="M20.897 3.11c.641.644.95 1.535.95 2.742v12.302c0 1.213-.317 2.115-.967 2.751-.642.636-1.544.941-2.762.941h-6.207c-1.219 0-2.12-.305-2.77-.933-.575-.571-.886-1.341-.95-2.364v-.546a.462.462 0 00-.058.004c-.018.002-.035.005-.054.005-3.745 0-5.919-1.875-5.919-5.872 0-4.005 2.176-5.88 5.919-5.88.022 0 .041.003.059.005.016.002.031.004.047.004v-.42c0-1.19.308-2.076.958-2.726.647-.65 1.55-.963 2.768-.963h6.21c1.218 0 2.126.314 2.776.95zm-.27 15.044V5.852c0-.869-.192-1.488-.599-1.888-.406-.4-1.03-.597-1.907-.597h-6.21c-.869 0-1.496.202-1.908.61-.406.41-.6 1.023-.6 1.875v.498c2.93.41 4.611 2.283 4.611 5.79 0 3.499-1.672 5.364-4.602 5.782v.596c.042.667.235 1.183.591 1.535.406.395 1.03.589 1.908.589h6.21c.877 0 1.501-.194 1.907-.588.407-.404.6-1.02.6-1.9zm-8.966-6.017a.608.608 0 00-.305-.523L6.65 8.922a.61.61 0 00-.913.521v5.39a.606.606 0 00.305.52c.188.11.42.11.608 0l4.706-2.692a.608.608 0 00.305-.524zm-1.826 0l-2.88 1.648v-3.297l2.88 1.65zm2.96.003c0 3.177-1.5 4.664-4.716 4.664-3.208 0-4.7-1.487-4.7-4.664 0-3.182 1.492-4.672 4.7-4.672 3.215 0 4.717 1.487 4.717 4.672zm1.166 5.869c0 .319.092.574.275.759.184.187.453.285.778.285s.594-.1.779-.285c.182-.185.274-.44.274-.76 0-.655-.394-1.047-1.053-1.047-.658 0-1.053.392-1.053 1.048z"
      ></path>
    </svg>
  );
};

MobilePlayRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobilePlayRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobilePlayRegular;
