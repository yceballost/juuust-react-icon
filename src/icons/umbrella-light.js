import React from 'react';
import PropTypes from 'prop-types';

const UmbrellaLight = props => {
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
        d="M19.504 6.03c1.201 1.23 1.983 2.857 2.322 4.84.067.37-.037.76-.286 1.068-.266.313-.65.49-1.059.49l-7.977-.022v7.358c0 .686.568 1.247 1.266 1.247.697 0 1.266-.56 1.266-1.247 0-.23.19-.417.423-.417a.42.42 0 01.423.417c0 1.146-.947 2.079-2.11 2.079-1.16 0-2.103-.925-2.111-2.065V12.4l-8.14-.02a1.424 1.424 0 01-.72-.204 1.343 1.343 0 01-.625-1.367C2.529 8.826 3.324 7.2 4.54 5.989c1.664-1.684 4.064-2.558 7.12-2.611v-.804c0-.23.191-.418.424-.418a.42.42 0 01.422.418v.798c3.009.092 5.359.986 6.998 2.658zM3.249 11.467a.52.52 0 01-.24-.515c.321-1.815 1.04-3.292 2.133-4.384 1.222-1.232 2.902-1.98 5-2.25-1.644 1.048-3.935 3.208-4.6 7.236l-2.013-.006a.58.58 0 01-.28-.08zm17.641-.056a.522.522 0 01-.403.182l-2.025-.005c-.69-4.12-2.745-6.213-4.34-7.233 1.995.305 3.6 1.053 4.777 2.252 1.08 1.104 1.784 2.586 2.098 4.404a.53.53 0 01-.107.4zm-8.384-6.963c1.27.51 4.224 2.215 5.096 7.137l-5.096-.014V4.448zm-.843-.017c-1.23.532-4.428 2.361-5.263 7.126l5.263.011V4.431z"
      ></path>
    </svg>
  );
};

UmbrellaLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UmbrellaLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UmbrellaLight;
