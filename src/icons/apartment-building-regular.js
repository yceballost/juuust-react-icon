import React from 'react';
import PropTypes from 'prop-types';

const ApartmentBuildingRegular = props => {
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
        d="M17.909 21.686H5.906c-.737 0-1.38-.644-1.38-1.378V3.381c0-.723.657-1.378 1.38-1.378H17.91c.723 0 1.38.658 1.38 1.378v16.927c-.002.734-.646 1.378-1.38 1.378zM9.65 20.482V16.09c0-.334.266-.603.591-.603h3.328c.328 0 .591.27.591.603v4.389h3.745c.098 0 .196-.112.196-.174V3.378c-.005-.059-.123-.174-.196-.174H5.903c-.075 0-.193.113-.196.174v16.927c0 .062.101.174.196.174l3.748.003zm3.328-.031h-2.143v-3.76h2.143v3.76zM8.727 7.109h1.336V5.751H8.727v1.358zm-.591 1.205h2.52a.597.597 0 00.592-.603V5.148a.595.595 0 00-.591-.602H8.136a.597.597 0 00-.591.602v2.563c0 .334.263.603.59.603zm5.571-1.205h1.336V5.751h-1.336v1.358zm-.59 1.205h2.52a.597.597 0 00.591-.603V5.148a.595.595 0 00-.59-.602h-2.522a.597.597 0 00-.59.602v2.563c0 .334.263.603.59.603zm-4.39 3.826h1.336v-1.359H8.727v1.359zm-.591 1.204h2.52a.597.597 0 00.592-.602V10.18a.595.595 0 00-.591-.602H8.136a.597.597 0 00-.591.602v2.563c0 .334.263.602.59.602zm5.571-1.204h1.336v-1.359h-1.336v1.359zm-.59 1.204h2.52a.597.597 0 00.591-.602V10.18a.595.595 0 00-.59-.602h-2.522a.597.597 0 00-.59.602v2.563c0 .334.263.602.59.602z"
      ></path>
    </svg>
  );
};

ApartmentBuildingRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ApartmentBuildingRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ApartmentBuildingRegular;
