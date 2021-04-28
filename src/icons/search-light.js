import React from 'react';
import PropTypes from 'prop-types';

const SearchLight = props => {
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
        d="M9.966 17.772a7.809 7.809 0 01-5.524-13.33 7.814 7.814 0 0111.045-.062 7.806 7.806 0 01.192 10.907l6.085 6.082a.28.28 0 01-.196.479.28.28 0 01-.199-.084l-6.085-6.083a7.757 7.757 0 01-5.318 2.091zm0-15.056a7.248 7.248 0 105.123 2.123 7.195 7.195 0 00-5.123-2.123z"
      ></path>
    </svg>
  );
};

SearchLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchLight;
