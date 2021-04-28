import React from 'react';
import PropTypes from 'prop-types';

const TravelBagRegular = props => {
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
        d="M16.45 5.991c.647 0 1.212.63 1.212 1.35v12.39c0 .734-.554 1.353-1.212 1.353h-1.045c-.082.546-.558.6-.686.602h-.068c-.134-.003-.605-.053-.686-.602H9.909c-.081.546-.557.6-.686.602h-.068c-.134-.003-.605-.053-.686-.602H7.388c-.658 0-1.21-.62-1.21-1.35V7.344c0-.72.566-1.35 1.21-1.35h1.375V2.885c0-.479.418-.882.91-.882h4.49c.485 0 .911.411.911.882v3.11h1.376V5.99zm-6.454-.008V3.218h3.848v2.765H9.997zm6.434 1.361v12.39a.21.21 0 01-.045.131l-8.933-.002a.251.251 0 01-.042-.132V7.344c0-.047.028-.1.05-.131h8.92c.022.028.05.084.05.131zm-2.482 5.196v4.91H9.89v-4.91h4.06zM9.89 9.729v1.594h4.06V9.728h-4.06zm5.295.006c0-.6-.348-1.222-.925-1.222L9.584 8.51c-.58 0-.924.622-.924 1.221v7.72c0 .697.397 1.221.924 1.221h4.675c.527 0 .925-.527.925-1.221V9.734z"
      ></path>
    </svg>
  );
};

TravelBagRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TravelBagRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TravelBagRegular;
