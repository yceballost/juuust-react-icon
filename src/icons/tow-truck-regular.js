import React from 'react';
import PropTypes from 'prop-types';

const TowTruckRegular = props => {
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
        d="M17.552 6.553c.437.605 2.997 3.992 3.333 4.426l.013.017c.28.368.788 1.034.788 1.812v3.336c0 .574-.252 1.154-.694 1.594-.443.44-1.026.692-1.6.692h-.224c-.454 1.053-1.445 1.672-2.82 1.672-1.376 0-2.368-.619-2.821-1.672H9.664c-.454 1.053-1.446 1.672-2.82 1.672-1.393 0-2.396-.633-2.841-1.709-.504-.08-.95-.3-1.306-.652-.442-.44-.694-1.02-.694-1.594v-4.4a.6.6 0 01.602-.6h4.151L4.992 7.595l-.003 1.692c.005.028.042.69-.4 1.165-.186.2-.522.44-1.076.443h-.014c-.583 0-.928-.25-1.115-.457-.451-.501-.384-1.201-.376-1.283a.604.604 0 011.2.14c-.01.096.01.272.075.342.026.028.065.032.112.037.033.003.07.006.11.02.097-.004.164-.02.198-.057.073-.081.087-.269.084-.31l.006-4.197a.592.592 0 01.347-.535l.006-.003a.432.432 0 01.11-.03l.021-.003.05-.016a.328.328 0 01.107-.023h.006l1.442.01c.2 0 .381.099.493.261l4.2 6.079V6.108a.6.6 0 01.602-.6h4.302c.801 0 1.613.41 2.073 1.045zM5.557 5.73l3.734 5.409-1.199-.003-2.686-5.41.151.004zm14.925 10.42c0 .258-.123.53-.342.745a1.101 1.101 0 01-.709.333l.008-.094c.005-.04.01-.08.01-.122 0-1.907-1.191-3.09-3.105-3.09-1.913 0-3.103 1.186-3.103 3.09 0 .045.004.085.009.125.003.031.007.062.008.094h-3.33c0-.032.004-.064.007-.095.005-.04.009-.081.009-.123 0-1.908-1.19-3.09-3.104-3.09-1.913 0-3.103 1.185-3.103 3.09v.005c-.022-.014-.044-.026-.067-.039a.55.55 0 01-.127-.087c-.218-.216-.341-.487-.341-.745v-3.798h7.969a.6.6 0 00.602-.6V6.71h3.7c.412 0 .863.224 1.096.546.445.61 3.022 4.02 3.36 4.454.208.269.553.717.553 1.095v3.345zm-4.135 2.756c-1.257 0-1.896-.636-1.896-1.89 0-1.256.639-1.891 1.896-1.891 1.258 0 1.9.635 1.9 1.89s-.642 1.891-1.9 1.891zm-11.4-1.89c0 1.254.638 1.89 1.896 1.89 1.26 0 1.9-.636 1.896-1.89 0-1.256-.638-1.891-1.896-1.891s-1.896.635-1.896 1.89z"
      ></path>
    </svg>
  );
};

TowTruckRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TowTruckRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TowTruckRegular;
