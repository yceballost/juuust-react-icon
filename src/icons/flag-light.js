import React from 'react';
import PropTypes from 'prop-types';

const FlagLight = props => {
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
        d="M17.157 7.179a.362.362 0 00.002.51l3.168 3.16c.303.386.348.845.152 1.237a1.145 1.145 0 01-1.031.636H4.165v8.731c0 .216-.18.39-.395.39a.394.394 0 01-.395-.393V3.294c0-.628.515-1.138 1.148-1.138h14.925a1.14 1.14 0 011.03.636c.197.39.152.857-.117 1.199l-3.204 3.188zm2.29 4.759a.35.35 0 00.323-.2.348.348 0 00-.037-.374l-3.137-3.126a1.143 1.143 0 010-1.611l3.168-3.151c.087-.12.034-.278.003-.337a.353.353 0 00-.322-.198H4.521a.357.357 0 00-.359.355v8.642h15.286z"
      ></path>
    </svg>
  );
};

FlagLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FlagLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FlagLight;
