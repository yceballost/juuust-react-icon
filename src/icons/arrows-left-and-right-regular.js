import React from 'react';
import PropTypes from 'prop-types';

const ArrowsLeftAndRightRegular = props => {
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
        d="M16.38 13.473c.11.05.224.075.34.075a.779.779 0 00.492-.173c.014-.011.028-.023.042-.037l4.21-4.148a.757.757 0 000-1.132l-4.21-4.179a.788.788 0 00-.871-.137.754.754 0 00-.437.683l-.014 1.824-2.905.003c-.663 0-1.201.537-1.201 1.201v2.32c0 .663.537 1.201 1.201 1.201l2.902-.005.014 1.823a.758.758 0 00.437.68zm.67-2.883a.772.772 0 00-.768-.745c-.005 0-.008 0-.01-.002l-3.242.005a.081.081 0 01-.081-.081v-2.32c0-.044.036-.08.081-.08l3.241-.003h.011c.412 0 .754-.331.768-.746v-.01l.011-1.35 3.384 3.358-3.384 3.339-.011-1.353v-.012zM6.997 20.095a.774.774 0 01-.496-.177c-.014-.011-.028-.022-.04-.036l-4.207-4.174a.754.754 0 010-1.129l4.21-4.154a.793.793 0 01.874-.135c.27.13.434.39.437.681l.014 1.821 2.902-.005c.664 0 1.202.537 1.202 1.201v2.32c0 .663-.538 1.201-1.202 1.201l-2.907.006-.014 1.823a.754.754 0 01-.437.684.825.825 0 01-.336.073zm-.342-1.597l-3.378-3.353 3.378-3.336.011 1.35v.011c.011.42.361.751.779.745l3.238-.005c.045 0 .081.036.081.081v2.32a.081.081 0 01-.081.08l-3.238.003a.77.77 0 00-.779.746v.01l-.011 1.348z"
      ></path>
    </svg>
  );
};

ArrowsLeftAndRightRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowsLeftAndRightRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowsLeftAndRightRegular;
