import React from 'react';
import PropTypes from 'prop-types';

const TabletRegular = props => {
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
        d="M19.282 5.608s.005 8.507.005 12.431c0 3.426-2.675 3.644-3.358 3.644-.101 0-.157-.002-.157-.002s-3.757.002-7.715.002c-3.958 0-3.52-3.641-3.52-3.641V5.622C4.538 2.193 7.292 2 7.914 2c.078 0 .123.003.123.003L15.788 2c3.81.003 3.494 3.608 3.494 3.608zM5.73 5.622c0-1.496.66-1.908.88-2.042.517-.325 1.13-.35 1.307-.35h.042L8 3.23a.76.76 0 00.04.001h7.751c.821 0 1.426.208 1.796.614.574.639.512 1.653.512 1.653v.007a1.46 1.46 0 00-.005.105s.005 6.932.005 11.168H5.73V5.622zm12.37 12.42c0 1.994-1.18 2.415-2.169 2.415l-.061-.006c-.034-.003-.065-.003-.095-.003l-7.715.003c-.88 0-1.512-.216-1.882-.639-.55-.63-.457-1.619-.457-1.619.006-.05.009-.1.009-.151v-.034H18.1v.034zm-5.463 1.221c0-.476-.274-.759-.73-.759-.457 0-.732.283-.732.76 0 .232.064.417.19.551.13.137.314.207.541.207.227 0 .412-.072.54-.207.127-.134.191-.32.191-.552z"
      ></path>
    </svg>
  );
};

TabletRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TabletRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TabletRegular;
