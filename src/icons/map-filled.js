import React from 'react';
import PropTypes from 'prop-types';

const MapFilled = props => {
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
        d="M16.843 2.171l4.477.737c.302.05.526.31.529.619v16.955a.633.633 0 01-.734.619l-4.328-.714-4.596 1.431a.634.634 0 01-.381 0l-4.404-1.431-4.52.714a.628.628 0 01-.726-.619V3.524c0-.31.224-.574.53-.622l4.669-.736a.066.066 0 01.024.001.054.054 0 00.02.001c.009 0 .017-.002.025-.004.01-.002.019-.004.029-.004.028 0 .056.008.082.015l.038.01a.17.17 0 00.038.003c.012 0 .024 0 .035.003l4.356 1.414 4.546-1.414c.012-.005.025-.004.038-.004.011 0 .022 0 .032-.002a.792.792 0 00.034-.008c.027-.007.054-.014.084-.014.014 0 .025.003.036.006a.189.189 0 00.023.005l.017-.002a.083.083 0 01.027 0zm3.745 17.571l-3.22-.529V3.53l3.22.53v15.683zm-9.215.614l-3.289-1.067V3.653l3.289 1.067v15.636z"
      ></path>
    </svg>
  );
};

MapFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MapFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MapFilled;
