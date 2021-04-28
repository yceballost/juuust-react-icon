import React from 'react';
import PropTypes from 'prop-types';

const PlantFilled = props => {
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
        d="M10.314 7.975c-.487.252-1.056.381-1.723.381-1.913 0-3.028-.994-3.134-2.81l-.009-.016-.008-.12V3.44c0-.706.585-1.28 1.303-1.28h1.854c2.028 0 3.148 1.1 3.148 3.1 0 .827-.207 1.508-.619 2.034l-.14.16c-1.103-2.398-2.571-2.826-2.67-2.852a.411.411 0 00-.503.292.406.406 0 00.288.501c.02.006 1.255.4 2.213 2.58zm3.353 1.557c-.361.706-.642 1.46-.849 2.18h3.717c.81 0 1.468.65 1.468 1.442v1.482c0 .68-.487 1.247-1.129 1.404H7.14c-.641-.146-1.137-.723-1.137-1.404v-1.482c0-.792.661-1.442 1.468-1.442h3.759c-.182-1.62-.53-2.835-.916-3.734.199-.104.386-.235.56-.39l.118-.131c.445.963.832 2.238 1.047 3.938.239-.776.544-1.602.956-2.372l.008.008.025.025c.177.2.4.345.639.476zm0 0c.602-1.168 1.443-2.162 2.597-2.493a.413.413 0 00.29-.504c0-.003 0-.005-.002-.005a.415.415 0 00-.518-.275c-1.37.39-2.35 1.49-3.042 2.77l-.213-.274c-.339-.527-.502-1.16-.502-1.902-.002-1.966 1.143-3.092 3.146-3.092h1.846c.717 0 1.294.574 1.294 1.271l-.017 2.107c-.114 1.815-1.22 2.804-3.126 2.804-.697-.003-1.274-.14-1.753-.407zm2.992 7.508H7.353l.373 3.529c0 .706.585 1.28 1.302 1.28h5.941c.726 0 1.311-.577 1.311-1.216l.378-3.593z"
      ></path>
    </svg>
  );
};

PlantFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlantFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlantFilled;
