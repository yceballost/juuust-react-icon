import React from 'react';
import PropTypes from 'prop-types';

const BicycleBikeRegular = props => {
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
        d="M16.68 11.653c.382-.104.79-.174 1.253-.174 2.375 0 3.736 1.42 3.74 3.896 0 2.477-1.362 3.894-3.737 3.894-2.373 0-3.734-1.42-3.734-3.894 0-1.537.526-2.666 1.495-3.302l-.88-1.779-1.966 3.95c.306.283.477.711.477 1.26 0 .731-.3 1.247-.824 1.49l.314.656h.485a.54.54 0 01.529.552v.002a.539.539 0 01-.53.55h-.809a.528.528 0 01-.473-.306l-.636-1.325c-.653-.112-1.073-.543-1.19-1.215H9.45c-.19 2.134-1.504 3.355-3.697 3.355-2.376 0-3.737-1.417-3.737-3.89 0-2.474 1.361-3.894 3.737-3.894.406.003.812.056 1.204.163L8.21 9.078l-.854-1.82h-.81a.541.541 0 01-.53-.552.54.54 0 01.53-.552H9.28a.54.54 0 01.53.552.54.54 0 01-.53.552h-.742l.6 1.28h5.145v-2.56a.549.549 0 01.415-.538c.153-.034 1.535-.334 2.35.35.255.213.56.613.56 1.302a.54.54 0 01-.53.552.541.541 0 01-.529-.552c0-.271-.087-.378-.162-.442-.23-.193-.678-.224-1.043-.193v2.498l1.337 2.698zm-4.94 2.196a.408.408 0 00-.052.004.408.408 0 01-.052.004l-1.98-4.216h4.288l-2.095 4.216c-.023 0-.045-.002-.068-.005l-.042-.003zm6.193 4.143c-1.715 0-2.513-.832-2.513-2.62 0-1.039.277-1.745.838-2.162l1.185 2.4a.516.516 0 00.714.238.565.565 0 00.23-.744l-1.135-2.294c.21-.037.431-.056.68-.056 1.718 0 2.516.831 2.516 2.621 0 1.785-.798 2.617-2.515 2.617zm-5.667-2.488c0-.414-.126-.549-.527-.549-.397 0-.526.132-.526.55 0 .42.123.548.527.548.403 0 .526-.129.526-.549zm-6.515 2.488c-1.715 0-2.516-.832-2.516-2.62 0-1.787.799-2.621 2.516-2.621.23 0 .44.017.638.047L5.261 15.11a.564.564 0 00.022.538.525.525 0 00.45.263h2.502c-.154 1.415-.952 2.082-2.484 2.082zm2.481-3.188c-.086-.754-.364-1.286-.84-1.622l-.795 1.622h1.635zm.564-4.485l1.843 3.92c-.168.156-.297.35-.373.568h-.815c-.12-1.264-.63-2.21-1.499-2.76l.844-1.728z"
      ></path>
    </svg>
  );
};

BicycleBikeRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BicycleBikeRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BicycleBikeRegular;
