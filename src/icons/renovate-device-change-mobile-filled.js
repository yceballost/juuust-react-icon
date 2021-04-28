import React from 'react';
import PropTypes from 'prop-types';

const RenovateDeviceChangeMobileFilled = props => {
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
        d="M21.045 3.992c-.51-.493-1.238-.742-2.16-.742h-6.14c-.921 0-1.647.25-2.16.742-.532.513-.8 1.258-.8 2.219v11.56c0 .958.268 1.706.8 2.218.51.494 1.239.743 2.16.743h6.143c.922 0 1.647-.25 2.16-.742.532-.513.801-1.258.801-2.219V6.211c-.003-.958-.272-1.703-.804-2.219zM4.52 10.104c.271 0 .49-.218.49-.49v-.639c0-1.366.636-2.002 2.003-2.002h.064c-.095.08-.193.165-.286.246a.492.492 0 00.63.754l.009-.009c.137-.117.826-.711.955-.837.4-.4.398-.902-.006-1.306-.249-.249-.921-.823-.95-.846a.49.49 0 00-.691.057.49.49 0 00.056.691c.07.06.188.16.317.275h-.096c-.932 0-1.666.252-2.179.745-.535.515-.804 1.269-.804 2.238v.639a.484.484 0 00.488.484zM15.8 18.656c.2 0 .362-.053.474-.165.1-.104.16-.258.16-.462 0-.429-.25-.628-.634-.628-.383 0-.633.2-.633.628 0 .207.06.358.16.462.112.112.275.165.473.165zM6.95 11.174H3.93c-1.109 0-1.77.661-1.77 1.77v5.992c0 1.11.661 1.77 1.77 1.77h3.02c1.11 0 1.77-.66 1.77-1.77v-5.991c-.003-1.11-.664-1.77-1.77-1.77zM5.555 18.95c.12 0 .216-.03.283-.098a.374.374 0 00.092-.274c0-.255-.15-.373-.378-.373-.227 0-.375.118-.375.373 0 .12.033.213.095.274a.395.395 0 00.283.098z"
      ></path>
    </svg>
  );
};

RenovateDeviceChangeMobileFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RenovateDeviceChangeMobileFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RenovateDeviceChangeMobileFilled;
