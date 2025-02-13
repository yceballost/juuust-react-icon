import React from 'react';
import PropTypes from 'prop-types';

const DolarSymbolLight = props => {
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
        d="M12.651 11.302c.774.104 1.558.24 2.286.58 1.202.557 1.992 1.566 2.216 2.837.25 1.381-.224 2.84-1.263 3.897-.908.921-2.043 1.38-3.239 1.52v1.043a.668.668 0 11-1.336-.06v-.963a8.867 8.867 0 01-4.28-1.557.675.675 0 01-.165-.936v-.003a.669.669 0 01.93-.165 7.56 7.56 0 003.515 1.317v-6.334c-1.148-.168-2.35-.465-3.274-1.428-.765-.801-1.118-1.871-.986-3.014.151-1.356.966-2.675 2.123-3.434a5.162 5.162 0 012.14-.782V2.83a.668.668 0 111.336-.003v.952c1.387.115 2.726.672 3.7 1.47.286.236.331.656.096.945a.662.662 0 01-.939.098c-.745-.61-1.784-1.05-2.86-1.166v6.177zm-3.647-1.188c-.622-.65-.68-1.409-.622-1.93.107-.958.706-1.924 1.527-2.465a3.802 3.802 0 011.406-.554v5.955c-.896-.146-1.714-.381-2.31-1.006zm5.936 7.558c-.63.641-1.429.977-2.289 1.1v-6.12c.625.087 1.208.205 1.72.445.799.37 1.317 1.031 1.468 1.858.174.958-.162 1.972-.9 2.717z"
      ></path>
    </svg>
  );
};

DolarSymbolLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DolarSymbolLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DolarSymbolLight;
