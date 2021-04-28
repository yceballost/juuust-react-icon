import React from 'react';
import PropTypes from 'prop-types';

const BoatRegular = props => {
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
        d="M21.686 12.723a.604.604 0 00-.602-.605l-3.63-.003c-.09-1.014-.437-1.846-1.07-2.457-1.142-1.103-2.746-1.075-2.868-1.073h-.006l-2.275-.002V4.289a.604.604 0 00-.602-.606H6.591a.604.604 0 00-.602.606v4.29c-.448 0-.779 0-.91.004-.49.005-.76.213-.9.383a.977.977 0 00-.213.703l-.02 2.426-1.344-.003a.6.6 0 00-.6.636l.27 5.888c.025.588.411 1.465 1.367 1.465H16.064c.017.002.051.003.098.003.446 0 2.099-.095 3.493-1.423 1.348-1.28 2.031-3.277 2.031-5.938zM10.028 5.56H7.19v-.664h2.838v.664zM5.171 9.796l-.017 2.23 11.093-.015c-.09-.622-.325-1.117-.698-1.479-.733-.705-1.82-.731-1.993-.735l-.024-.001c-.056-.007-2.22-.007-4.353-.006H7.627l-1.26.002h-.001c-.562.001-.991.002-1.195.004zm13.672 7.974c.989-.95 1.535-2.442 1.625-4.44l-17.236-.02.241 5.256s.026.308.166.308H16.11c.209-.003 1.602-.017 2.733-1.104zM7.19 8.574h2.838V6.77H7.19v1.804zm-.717 7.098a.406.406 0 000 .812.406.406 0 000-.812zm-1.207.41c0 .669.54 1.215 1.207 1.215.664 0 1.208-.546 1.208-1.216 0-.67-.541-1.215-1.208-1.215-.666 0-1.207.546-1.207 1.215zm5.241-.41a.406.406 0 000 .813.404.404 0 00.403-.407.404.404 0 00-.403-.406zm-1.207.41c0 .669.54 1.215 1.207 1.215s1.21-.546 1.207-1.216c0-.67-.54-1.215-1.207-1.215-.664 0-1.207.546-1.207 1.215zm5.243-.41a.406.406 0 000 .812.404.404 0 00.404-.406.404.404 0 00-.404-.406zm-1.207.41c0 .669.54 1.215 1.207 1.215s1.208-.546 1.208-1.216c0-.67-.54-1.215-1.208-1.215-.666 0-1.207.546-1.207 1.215z"
      ></path>
    </svg>
  );
};

BoatRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BoatRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BoatRegular;
