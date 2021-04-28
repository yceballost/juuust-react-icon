import React from 'react';
import PropTypes from 'prop-types';

const CasinoRegular = props => {
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
        d="M21.622 13.445c0-2.417-.664-4.283-1.972-5.546-.868-.843-2.014-1.39-3.4-1.647-.328-.955-.827-1.765-1.496-2.409-1.258-1.216-3.073-1.832-5.395-1.832-2.323 0-4.135.616-5.387 1.832-1.3 1.26-1.96 3.126-1.96 5.546 0 2.42.657 4.283 1.96 5.538.866.84 2.014 1.384 3.406 1.642.328.958.824 1.77 1.493 2.414 1.25 1.207 3.062 1.82 5.387 1.82 2.322 0 4.137-.61 5.392-1.817 1.308-1.258 1.972-3.12 1.972-5.54zM5.232 4.387c.877-.664 2.06-1.04 3.516-1.118h.003v1.386c-.978.079-1.796.35-2.44.81L5.233 4.387zm-.868.88c-.652.881-1.025 2.058-1.103 3.515h1.386c.079-.978.336-1.802.787-2.446l-1.07-1.07zm-1.1 4.755v-.002.002zm1.389 0h-1.39c.085 1.453.457 2.626 1.115 3.502l1.073-1.073c-.454-.641-.717-1.457-.798-2.429zm9.608 6.95c-.947 0-1.695-.193-2.253-.552a7.053 7.053 0 001.597-.644c.42-.238.804-.518 1.146-.843.636-.614 1.117-1.37 1.445-2.26a8.668 8.668 0 00.462-2.107c.026.02.053.038.08.056.055.039.111.078.158.123.594.574.897 1.485.897 2.7 0 1.216-.303 2.124-.897 2.695-.577.552-1.462.832-2.636.832zm4.988.602c.661-.877 1.037-2.047 1.118-3.498H18.98c-.084.972-.347 1.787-.803 2.425l1.072 1.073zm-4.367 1.975c1.446-.081 2.62-.448 3.493-1.1l-1.075-1.08c-.642.449-1.451.712-2.418.794v1.386zm-1.235 0v-1.386c-.966-.079-1.779-.342-2.42-.79l-1.079 1.078c.88.653 2.054 1.02 3.5 1.098zm-3.515-2.823l-.855.854a4.917 4.917 0 01-.512-.849l.113.005a10.053 10.053 0 001.254-.01zm-3.084-1.493c.4.109.837.184 1.3.23l.127.01c.09.009.18.017.27.023v-1.387c-.063-.006-.13-.009-.196-.011a2.808 2.808 0 01-.258-.02.882.882 0 01-.07-.016l-.061-.014a4.861 4.861 0 01-1.202-.373l-.042-.02a3.921 3.921 0 01-.591-.333l-1.078 1.079c.504.37 1.109.647 1.8.832zm2.31-9.384c-1.17 0-2.055.28-2.63.835-.59.574-.893 1.484-.893 2.7 0 1.218.3 2.126.89 2.694.048.046.102.083.156.12.03.02.06.04.088.063.322.24.72.411 1.19.518l.098.022c.056.013.112.026.174.037.286.044.589.072.925.072a.94.94 0 00.106-.007l.079-.007c.26-.008.51-.025.742-.061.176-.028.342-.065.501-.112.488-.138.897-.35 1.208-.647.473-.457.75-1.13.848-1.992.026-.224.045-.454.045-.703 0-.146-.012-.282-.024-.416a11.595 11.595 0 01-.012-.144c-.048-.527-.163-.98-.342-1.364a2.723 2.723 0 00-.518-.776 2.439 2.439 0 00-.384-.286c-.557-.356-1.303-.546-2.246-.546zm.622-1.194V3.27c1.454.081 2.633.457 3.513 1.123l-1.076 1.076c-.644-.46-1.459-.731-2.437-.813zm3.493 9.737l-1.075-1.078a3.357 3.357 0 01-.432.263 4.685 4.685 0 01-1.193.415c-.067.015-.14.024-.213.033-.048.006-.096.012-.143.02-.072.011-.145.022-.22.03l-.104.016a2.455 2.455 0 01-.113.016v1.386c.398-.025.774-.07 1.13-.137a6.234 6.234 0 001.688-.555c.241-.123.468-.255.675-.409zm.27-1.482l-.466-.465c.309-.434.527-.95.664-1.54a6.15 6.15 0 00.137-.888h1.387v.022c-.03.535-.1 1.031-.21 1.49a5.717 5.717 0 01-.499 1.337c-.12.232-.255.45-.406.652l-.608-.608zm.616-7.638l-.821.82-.247.247c.138.199.252.417.356.644.018.039.038.076.057.113.038.07.075.141.103.22.143.407.218.872.266 1.365l.08-.007c.035-.004.068-.007.105-.007.157 0 .303.014.45.028l.172.017.075.006c.174.014.348.029.51.058v.006h.025c-.008-.003-.017-.006-.025-.006a8.707 8.707 0 00-.188-1.417 6.109 6.109 0 00-.395-1.202v-.02h-.005l-.005-.009-.003-.008a4.82 4.82 0 00-.51-.849zm2.22 2.322c.698.188 1.309.47 1.816.854l-1.076 1.076a3.786 3.786 0 00-.605-.35 11.148 11.148 0 00-.134-1.58zm3.788 5.246c-.079-1.453-.451-2.63-1.107-3.512l-1.067 1.07c.454.644.712 1.465.79 2.442h1.384zM8.062 8.081c-.143.12-.096.4-.068.518.012.052.033.105.053.159.013.034.026.068.037.102.1.3.235.602.437.916a4.87 4.87 0 00.675.849c.023.025.093.098.151.143l.02.013h.003a5.421 5.421 0 00.636-.711l.015-.021a4.24 4.24 0 00.598-1.113c.012-.036.026-.071.04-.107.029-.076.058-.152.075-.227.03-.137.064-.383-.059-.504l-.002-.005c-.002-.003-.003-.007-.006-.009a.452.452 0 00-.266-.092.8.8 0 00-.44.112c-.037.02-.073.042-.11.064-.047.025-.092.05-.14.081l-.148.09-.347.006-.12-.056-.04-.017a8.812 8.812 0 00-.288-.166c-.01-.005-.021-.01-.032-.013a.235.235 0 01-.03-.012.847.847 0 00-.347-.087h-.034a.407.407 0 00-.263.087zm-.804-.94c-.462.4-.633 1.033-.465 1.744.109.457.32.925.594 1.39.015.024.027.05.04.074a.998.998 0 00.052.094c.26.406.476.678.826 1.036l.026.025c.058.06.182.177.296.264.152.106.32.182.474.212a.867.867 0 00.176.031l.09.003.062-.003a.917.917 0 00.176-.025l.031-.01a1.35 1.35 0 00.462-.208 2.65 2.65 0 00.325-.295c.303-.316.507-.563.726-.89l.095-.14c.123-.19.218-.384.31-.572a4.55 4.55 0 00.286-.711c.012-.038.026-.076.04-.114.02-.054.041-.108.053-.16.112-.474.061-.903-.112-1.264a1.48 1.48 0 00-.35-.482 1.69 1.69 0 00-.922-.37c-.014-.001-.028-.005-.042-.008a.297.297 0 00-.042-.008 2.048 2.048 0 00-1.1.266 2.03 2.03 0 00-1.102-.266c-.38.02-.736.156-1.005.386z"
      ></path>
    </svg>
  );
};

CasinoRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CasinoRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CasinoRegular;
