import React from 'react';
import PropTypes from 'prop-types';

const SearchFilled = props => {
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
        d="M2.025 9.76a7.846 7.846 0 007.846 7.845 7.792 7.792 0 005.138-1.918l5.697 5.697a.55.55 0 00.395.165.561.561 0 00.398-.958l-5.704-5.704A7.848 7.848 0 004.322 4.21a7.854 7.854 0 00-2.297 5.55zm12.67 4.725a6.725 6.725 0 00-.056-9.471l-.012-.011a6.68 6.68 0 00-4.756-1.97 6.726 6.726 0 00-4.756 11.482 6.728 6.728 0 009.485.064.561.561 0 01.094-.094zm-.72-8.726a5.73 5.73 0 00-8.104 0 5.73 5.73 0 000 8.104 5.73 5.73 0 009.782-4.053 5.686 5.686 0 00-1.678-4.05z"
      ></path>
    </svg>
  );
};

SearchFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchFilled;
