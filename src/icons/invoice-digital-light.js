import React from 'react';
import PropTypes from 'prop-types';

const InvoiceDigitalLight = props => {
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
        d="M5.176 16.61H18.83c1.014 0 1.785-.294 2.292-.877.479-.546.72-1.353.72-2.398V8.397c0-1.045-.244-1.852-.72-2.398-.507-.58-1.278-.874-2.292-.874H5.176c-1.014 0-1.784.294-2.291.874-.48.546-.72 1.353-.72 2.398v4.938c0 1.045.24 1.852.72 2.4.507.58 1.277.875 2.29.875zM2.725 8.4c0-1.852.779-2.715 2.45-2.715h13.656c1.673 0 2.451.86 2.451 2.712v4.94c0 1.852-.778 2.715-2.45 2.715H5.175c-1.672 0-2.451-.863-2.451-2.714V8.4zm18.829 10.428H2.436a.281.281 0 01-.28-.28.28.28 0 01.28-.28h19.118a.28.28 0 01.28.28.28.28 0 01-.28.28zM9.77 14.551h4.473c.3 0 .499-.202.499-.499V9.373a.279.279 0 00-.082-.217l-1.89-1.894a.29.29 0 00-.2-.081h-2.8c-.308 0-.507.199-.507.504v6.356c0 .308.199.51.507.51zm4.412-.56V9.635h-.889c-.618 0-1.002-.448-1.002-1.171V7.74H9.823v6.25h4.358zM12.85 8.463v-.325l.933.936h-.49c-.295 0-.443-.208-.443-.611zm.476 2.305H10.68a.281.281 0 01-.28-.28c0-.154.126-.28.28-.28h2.65a.28.28 0 01.28.28c0 .154-.129.28-.283.28zm0 1.135H10.68a.281.281 0 01-.28-.28c0-.155.126-.28.28-.28h2.65a.28.28 0 01.28.28c0 .154-.129.28-.283.28zm-2.647 1.134h2.647a.283.283 0 00.283-.28.281.281 0 00-.28-.28h-2.65a.281.281 0 00-.28.28c0 .154.126.28.28.28z"
      ></path>
    </svg>
  );
};

InvoiceDigitalLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InvoiceDigitalLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InvoiceDigitalLight;
