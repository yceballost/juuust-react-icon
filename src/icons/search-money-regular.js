import React from 'react';
import PropTypes from 'prop-types';

const SearchMoneyRegular = props => {
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
        d="M2.025 9.76a7.846 7.846 0 007.846 7.845 7.792 7.792 0 005.138-1.918l5.697 5.697a.55.55 0 00.395.165.561.561 0 00.398-.958l-5.704-5.704A7.848 7.848 0 004.322 4.21a7.854 7.854 0 00-2.297 5.55zm1.12 0a6.726 6.726 0 016.726-6.726 6.671 6.671 0 014.756 1.972 6.724 6.724 0 010 9.473 6.728 6.728 0 01-9.512.037 6.732 6.732 0 01-1.97-4.757zm6.502 3.896c0 .207.168.378.378.378a.38.38 0 00.381-.379v-.547c.558-.07 1.026-.26 1.367-.556.44-.381.672-.919.672-1.552 0-.778-.356-1.748-2.039-1.993V6.99c.276.054.548.155.83.308l.008.003c.095.05.199.081.305.084.283 0 .513-.23.513-.513 0-.112-.04-.322-.303-.484a3.31 3.31 0 00-1.353-.445v-.275c0-.21-.17-.381-.38-.381a.38.38 0 00-.379.38v.263c-1.228.109-2.006.9-2.006 2.074 0 .765.352 1.721 2.006 1.965v2.13c-.43-.056-.862-.228-1.291-.513a.642.642 0 00-.342-.109.526.526 0 00-.532.521c0 .19.084.348.252.465.567.392 1.228.621 1.913.669v.524zm.76-1.579c.62-.119.988-.495.988-1.04 0-.389-.128-.77-.989-.957v1.997zm-.76-3.185v-1.93c-.602.082-.952.44-.952.996 0 .361.122.747.952.934z"
      ></path>
    </svg>
  );
};

SearchMoneyRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchMoneyRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchMoneyRegular;
