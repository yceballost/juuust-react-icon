import React from 'react';
import PropTypes from 'prop-types';

const LightningLight = props => {
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
        d="M17.822 11.203a.41.41 0 01.3.292.409.409 0 01-.104.406l-9.591 9.815a.405.405 0 01-.515.056.421.421 0 01-.157-.501l2.874-7.418-4.477-1.095a.412.412 0 01-.297-.288.43.43 0 01.099-.407l9.21-9.77a.405.405 0 01.518-.062c.165.11.23.323.157.507l-2.9 7.275 4.883 1.19zm-6.258 2.513l-2.316 5.983 7.678-7.854-4.636-1.129a.419.419 0 01-.286-.563l2.274-5.709-7.235 7.678 4.238 1.037c.115.028.21.106.266.212a.423.423 0 01.017.345z"
      ></path>
    </svg>
  );
};

LightningLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LightningLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LightningLight;
