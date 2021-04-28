import React from 'react';
import PropTypes from 'prop-types';

const FireRegular = props => {
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
        d="M16.699 9.756c.51.364.98.776 1.409 1.233a6.025 6.025 0 011.647 4.367 6.004 6.004 0 01-1.96 4.218c-1.752 1.616-3.684 1.9-3.766 1.91a8.05 8.05 0 01-1.81.202c-.041 0-.083-.003-.125-.006l-.084-.005c-.013 0-.025.002-.038.003a.84.84 0 01-.083.005 4.07 4.07 0 01-.549-.044c-2.19-.23-4.277-1.306-5.624-3.028-3.404-4.35-.6-11.042 2.907-13.925 1.572-1.288 3.437-2.238 5.252-2.67a.597.597 0 01.6.202c.145.177.18.42.087.63-.07.166-1.712 4.096 2.137 6.908zm.288 8.925a6.537 6.537 0 01-1.773 1.162c1.378-2.218.11-5.437-1.49-6.846-.74-.652-1.622-1.131-2.482-1.353a.6.6 0 00-.7.815l.001.003c.029.077.66 1.76-.853 2.944-.249.19-.476.403-.677.636a3.317 3.317 0 00-.594 3.35 6.524 6.524 0 01-1.762-1.538C3.749 14.137 6.329 8.126 9.382 5.62a12.555 12.555 0 013.757-2.134C12.797 5.157 12.71 8.33 16 10.74c.451.322.869.686 1.233 1.078a4.836 4.836 0 011.325 3.49 4.803 4.803 0 01-1.572 3.373zm-5.77 1.706c-.006 0-.639-.113-1.21-.678-.781-.77-.82-2.031-.095-2.866.148-.17.32-.33.51-.476 1.215-.955 1.515-2.199 1.47-3.182.376.199.726.44 1.045.723 1.247 1.098 2.347 3.832 1.168 5.448a2.733 2.733 0 01-2.076 1.104.752.752 0 01-.075 0c-.065.002-.132 0-.199-.004-.108-.007-.214-.022-.32-.037-.053-.007-.106-.015-.16-.021a.162.162 0 00-.028-.006l-.03-.005z"
      ></path>
    </svg>
  );
};

FireRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FireRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FireRegular;
