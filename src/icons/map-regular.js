import React from 'react';
import PropTypes from 'prop-types';

const MapRegular = props => {
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
        d="M16.846 2.168l4.477.737c.302.05.526.31.526.62v16.954a.631.631 0 01-.221.48.646.646 0 01-.51.14l-4.328-.715-4.596 1.431a.648.648 0 01-.38-.003l-4.405-1.428-4.52.714a.628.628 0 01-.729-.619V3.527a.63.63 0 01.53-.622l4.669-.737c.008-.001.016 0 .024.002a.054.054 0 00.02.001c.007 0 .013-.003.02-.005a.12.12 0 01.034-.006c.03 0 .055.007.081.015l.042.01a.13.13 0 00.033.002c.013 0 .026 0 .04.004l4.356 1.411 4.549-1.414c.012-.005.025-.004.038-.004.01 0 .022 0 .032-.002l.034-.008a.325.325 0 01.083-.014c.012 0 .023.003.033.006l.024.005c.005 0 .01 0 .017-.002.01-.001.019-.002.027 0zM3.421 4.062l3.411-.538v15.683l-3.411.541V4.062zM20.59 19.74l-3.218-.53V3.53l3.218.53v15.68zM16.115 3.642l-3.482 1.084v15.641l3.482-1.084V3.642zm-8.028.01L11.38 4.72v15.633l-3.292-1.067V3.653z"
      ></path>
    </svg>
  );
};

MapRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MapRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MapRegular;
