import React from 'react';
import PropTypes from 'prop-types';

const RenovateDeviceChangeMobileRegular = props => {
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
        d="M18.886 20.732h-6.14c-.922 0-1.648-.25-2.16-.742-.533-.513-.801-1.261-.801-2.219V6.211c0-.958.268-1.706.8-2.219.51-.493 1.239-.742 2.16-.742h6.143c.922 0 1.647.25 2.16.742.532.513.801 1.258.801 2.219v11.56c0 .958-.269 1.706-.801 2.218-.513.494-1.241.743-2.162.743zM12.745 4.37c-1.272 0-1.84.57-1.84 1.84v11.561c0 1.272.568 1.84 1.84 1.84h6.142c1.272 0 1.84-.568 1.84-1.84V6.211c0-1.272-.568-1.84-1.84-1.84h-6.143zM3.93 20.707h3.02c1.106 0 1.767-.664 1.77-1.77v-5.992c0-1.11-.66-1.77-1.77-1.77H3.93c-1.109 0-1.77.66-1.77 1.77v5.991c0 1.11.661 1.77 1.77 1.77zm11.238-2.678c0-.429.25-.628.633-.628.384 0 .633.2.633.628 0 .207-.058.358-.16.462-.111.112-.274.165-.473.165-.198 0-.36-.053-.473-.165-.104-.104-.16-.258-.16-.462zM3.93 12.295c-.484 0-.65.165-.65.65v5.991c0 .485.163.65.65.65h3.02c.485 0 .65-.165.65-.65v-5.991c0-.488-.165-.65-.65-.65H3.93zm2.69-4.703c0 .271.218.49.49.49.117 0 .23-.042.316-.123.137-.118.83-.712.955-.838.4-.4.398-.899-.005-1.305a22.69 22.69 0 00-.95-.846.49.49 0 00-.692.056.49.49 0 00.056.692l.318.274h-.096c-.933 0-1.667.25-2.18.745-.532.516-.804 1.266-.804 2.238v.64a.489.489 0 10.98 0v-.64c0-1.366.637-2.002 2.004-2.002h.064l-.286.246a.488.488 0 00-.17.373zM5.18 18.575c0-.255.145-.373.375-.373s.378.118.378.373c0 .12-.034.213-.095.274a.383.383 0 01-.28.099c-.12 0-.219-.031-.283-.099-.062-.061-.095-.15-.095-.274z"
      ></path>
    </svg>
  );
};

RenovateDeviceChangeMobileRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RenovateDeviceChangeMobileRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RenovateDeviceChangeMobileRegular;
