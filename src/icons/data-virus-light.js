import React from 'react';
import PropTypes from 'prop-types';

const DataVirusLight = props => {
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
        d="M22 4.803c0-1.019-.82-1.779-2.439-2.265C18.41 2.19 16.895 2 15.295 2c-1.596 0-3.113.19-4.265.54-1.344.402-2.143 1.005-2.37 1.79l-.004.003c-.042.15-.065.307-.065.47v2.87c-.027 0-.055-.003-.082-.005-.045-.003-.091-.006-.14-.006h-.006c-1.525 0-2.413.586-3.196 1.104l-.004.003c-.803.53-1.438.95-2.648.76A.419.419 0 002 9.933v.022c0 .4-.005 4.858.339 6.812.454 2.605 5.546 5.048 5.842 5.19l.006.002a.41.41 0 00.355 0c.923-.45 1.81-.958 2.658-1.53 1.139.316 2.579.495 4.095.495 1.591 0 3.105-.19 4.266-.538C21.181 19.9 22 19.137 22 18.118V4.803zm-.834.973V9.19c-.202.367-.774.854-1.835 1.178-1.076.321-2.505.5-4.021.5-.147 0-.29-.004-.435-.009h-.001a65.827 65.827 0 00-.145-.005c.003-.517.003-.865.003-.916a.438.438 0 00-.507-.407c-1.222.188-1.854-.23-2.658-.76l-.002-.002-.006-.004c-.582-.383-1.218-.802-2.131-.995V5.767c.398.302.936.558 1.616.763 1.155.344 2.666.535 4.263.535 1.596 0 3.11-.191 4.263-.538.671-.202 1.2-.453 1.596-.751zm0 8.069V10.39c-.418.313-.959.577-1.596.768-1.153.347-2.667.538-4.263.538-.133 0-.265-.005-.397-.01-.065-.003-.13-.006-.195-.007-.017 1.132-.063 2.606-.168 3.812l.122.006c.21.01.421.02.638.02 1.514 0 2.942-.18 4.02-.501 1.062-.322 1.64-.808 1.84-1.172zm0 1.2v3.073c0 .61-.62 1.104-1.847 1.471-1.084.325-2.512.504-4.024.504-1.158 0-2.268-.108-3.212-.305 1.12-.876 2.123-1.934 2.313-3.021.023-.137.046-.285.066-.444l.205.01c.211.009.423.019.64.019 1.596 0 3.107-.191 4.263-.538.637-.19 1.178-.456 1.596-.768zm-12.8 6.075c1.503-.737 4.903-2.74 5.208-4.495.037-.205.065-.444.094-.703l-.003-.023c-.002-.01-.005-.021-.003-.031.002-.014.006-.026.01-.039.004-.008.008-.017.01-.027.134-1.328.185-3.184.202-4.45l-.005-.02a.344.344 0 01-.012-.1c0-.02.006-.038.013-.057a.61.61 0 00.007-.022v-.113c.003-.25.005-.47.005-.644-1.274.069-2.045-.44-2.79-.933H11.1l-.002-.001c-.75-.495-1.462-.963-2.73-.966h-.006c-1.272 0-1.983.47-2.735.967-.754.498-1.522.999-2.791.939.005 1.243.048 4.655.324 6.223.308 1.752 3.703 3.755 5.205 4.495zM9.48 4.53c.16-.476.774-.888 1.793-1.196 1.075-.324 2.504-.5 4.023-.5 1.517 0 2.949.179 4.024.5 1.056.32 1.66.729 1.807 1.224a.053.053 0 01-.005.008.06.06 0 00-.006.009c-.176.46-.794.86-1.787 1.158-1.076.321-2.504.5-4.021.5s-2.943-.179-4.021-.5c-1.022-.307-1.645-.72-1.802-1.195l-.002-.004c-.002-.002-.003-.003-.003-.005z"
      ></path>
    </svg>
  );
};

DataVirusLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DataVirusLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DataVirusLight;
