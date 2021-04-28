import React from 'react';
import PropTypes from 'prop-types';

const ShowerRegular = props => {
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
        d="M20.63 11.146a1.632 1.632 0 011.056 1.52c0 .48-.213.908-.54 1.21l.002 2.553c0 2.386-2.372 4.288-4.711 4.68-.177.34-.527.58-.938.58-.379 0-.695-.207-.883-.501H9.028c-.19.294-.507.501-.885.501-.415 0-.768-.244-.941-.588-2.322-.412-4.659-2.308-4.659-4.672V13.87a1.613 1.613 0 01-.54-1.202c0-.904.74-1.635 1.65-1.635h.14V4.966C3.793 3.331 5.134 2 6.784 2a2.993 2.993 0 012.92 2.364 2.09 2.09 0 011.548 2.006v.227a.85.85 0 01-.854.846H7.89a.851.851 0 01-.857-.846V6.37c0-.908.585-1.67 1.4-1.961a1.751 1.751 0 00-1.652-1.18c-.964 0-1.751.78-1.751 1.737v6.068h6.655c.034-.586.292-.944.518-1.138.303-.257.667-.358.97-.392.145-.386.383-.624.585-.765.457-.316.997-.344 1.342-.313.563-.454 1.103-.518 1.462-.49.709.058 1.244.501 1.532.806.723-.022 1.33.182 1.785.589.753.677.764 1.655.761 1.764 0 .01-.003.02-.006.03l-.005.02zM8.291 6.213a.87.87 0 011.706 0H8.291zm5.283 4.51c-.117-.017-.426-.012-.563.106-.022.017-.07.064-.092.202h6.476c-.011-.14-.067-.544-.359-.801-.246-.216-.63-.3-1.148-.247a.617.617 0 01-.572-.258c-.106-.145-.47-.537-.86-.568-.08-.011-.341-.025-.714.347a.63.63 0 01-.59.163c-.11-.023-.477-.068-.679.075-.04.03-.16.114-.19.432a.603.603 0 01-.235.425.596.596 0 01-.474.124zm-9.924 1.54h16.386a.407.407 0 110 .813H3.65a.407.407 0 110-.813zm12.602 7.628a1.064 1.064 0 00-.756-.314c-.322 0-.603.151-.799.378H8.936a1.053 1.053 0 00-.799-.378 1.07 1.07 0 00-.748.305c-1.773-.33-3.613-1.787-3.613-3.456v-2.123h16.123l.003 2.123c.005 1.683-1.866 3.148-3.65 3.465z"
      ></path>
    </svg>
  );
};

ShowerRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShowerRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShowerRegular;
