import React from 'react';
import PropTypes from 'prop-types';

const MicrochipRegular = props => {
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
        d="M21.843 12.006a.606.606 0 01-.605.605H18.67v1.213h2.568a.606.606 0 010 1.21H18.67v2.392c0 .667-.61 1.252-1.308 1.252h-2.328v2.56a.606.606 0 01-1.21 0v-2.56H12.61v2.56a.606.606 0 01-1.21 0v-2.56h-1.213v2.56a.606.606 0 01-1.21 0v-2.56H6.65c-.709 0-1.308-.571-1.308-1.252v-2.392H2.765a.606.606 0 010-1.21h2.577V12.61H2.765a.606.606 0 010-1.21h2.577v-1.213H2.765a.606.606 0 010-1.21h2.577V6.61c0-.672.61-1.26 1.308-1.26h2.328V2.764a.606.606 0 011.21 0V5.35h1.213V2.765a.606.606 0 011.21 0V5.35h1.213V2.765a.606.606 0 011.21 0V5.35h2.328c.697 0 1.308.589 1.308 1.26v2.368h2.568a.606.606 0 010 1.21H18.67V11.4h2.568c.334 0 .605.271.605.605zM6.647 17.468H17.36c.04 0 .09-.04.1-.059v-2.963-.006a.022.022 0 01-.002-.006c0-.003 0-.005.002-.007v-2.41-.004a.01.01 0 01-.002-.004l.001-.005.002-.004V6.636a.17.17 0 00-.098-.07H6.65c-.03 0-.09.045-.1.076V9.579l.002.007-.001.007a.02.02 0 00-.002.007l.003 2.397c0 .002 0 .003.002.005v.004a.018.018 0 010 .007.01.01 0 00-.002.004v5.409l.006.004c.015.01.052.038.09.038z"
      ></path>
    </svg>
  );
};

MicrochipRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicrochipRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MicrochipRegular;
