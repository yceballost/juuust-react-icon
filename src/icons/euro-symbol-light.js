import React from 'react';
import PropTypes from 'prop-types';

const EuroSymbolLight = props => {
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
      <path d="M20.447 19.91a.642.642 0 00-.863-.325c-1.171.577-2.63.868-4.336.868-4.25 0-6.81-1.823-7.695-5.372h6.134a.666.666 0 00.65-.681.664.664 0 00-.65-.68h-6.4a14.619 14.619 0 01-.112-1.732c0-.336.042-.63.061-.95h6.449a.664.664 0 00.65-.677v-.003a.664.664 0 00-.65-.68H7.376c.69-4.076 3.317-6.16 7.872-6.16 1.686 0 3.129.288 4.294.851a.637.637 0 00.862-.33.698.698 0 00-.316-.905c-1.339-.65-2.966-.978-4.84-.978-5.26 0-8.46 2.65-9.202 7.521H4.119a.666.666 0 00-.65.68c0 .376.291.682.65.682h1.79c-.017.308-.034.622-.034.95 0 .607.04 1.176.098 1.73H4.12a.666.666 0 00-.65.68c0 .376.291.682.65.682h2.059c.927 4.417 4.01 6.733 9.067 6.733 1.899 0 3.546-.336 4.888-1a.693.693 0 00.314-.904z"></path>
    </svg>
  );
};

EuroSymbolLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EuroSymbolLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EuroSymbolLight;
