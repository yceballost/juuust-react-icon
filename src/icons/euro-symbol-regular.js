import React from 'react';
import PropTypes from 'prop-types';

const EuroSymbolRegular = props => {
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
      <path d="M18.667 18.846c-1.084.538-2.443.81-4.034.81-3.812 0-6.126-1.493-7.02-4.527h5.519c.515 0 .935-.44.935-.986 0-.544-.417-.986-.935-.986H7.266c-.04-.434-.081-.863-.081-1.342 0-.207.028-.386.036-.588h5.91c.516 0 .936-.44.936-.986s-.417-.986-.935-.986H7.45c.723-3.53 3.073-5.286 7.182-5.286 1.574 0 2.916.266 3.995.79.47.23 1.025.014 1.243-.479.216-.493.014-1.078-.456-1.308C18.09 2.325 16.479 2 14.633 2c-5.143 0-8.3 2.557-9.106 7.255H3.936c-.516 0-.936.44-.936.986s.42.986.936.986h1.397c-.005.196-.02.386-.02.588 0 .465.023.908.06 1.342H3.936c-.516 0-.936.44-.936.986 0 .543.42.986.936.986h1.736c1.006 4.216 4.098 6.496 8.958 6.496 1.871 0 3.496-.337 4.832-.997.468-.233.67-.819.448-1.311-.218-.494-.773-.706-1.243-.471z"></path>
    </svg>
  );
};

EuroSymbolRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EuroSymbolRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EuroSymbolRegular;
