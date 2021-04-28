import React from 'react';
import PropTypes from 'prop-types';

const WomanFilled = props => {
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
        d="M9.466 4.485c0 1.549.916 2.473 2.449 2.473 1.535 0 2.453-.924 2.453-2.476 0-.793-.226-1.418-.675-1.852-.431-.417-1.028-.63-1.778-.63-.751 0-1.348.213-1.78.636-.444.437-.669 1.059-.669 1.849zm7.628 10.294c.176-.364.204-.78.073-1.171 0 0-1.519-4.37-1.521-4.364a1.328 1.328 0 00-.076-.194 2.833 2.833 0 00-2.605-1.74h-2.098a2.826 2.826 0 00-2.594 1.712 1.54 1.54 0 00-.081.205l-1.527 4.392c-.131.384-.103.801.076 1.165.176.359.479.628.84.751.166.059.334.09.504.09h.003l-.168.63a.604.604 0 00.577.759h.4l.018 3.146c0 .848.6 1.504 1.397 1.523h.037c.347.009.68-.123.927-.367.283-.28.437-.689.437-1.16l-.017-3.145h.47l-.013 3.149c0 .868.56 1.507 1.33 1.523h.037c.501 0 .81-.204.983-.375.271-.272.417-.67.417-1.146l.017-3.15h.4a.604.604 0 00.577-.76l-.168-.63c.169.008.337-.023.493-.087.376-.126.678-.395.855-.756z"
      ></path>
    </svg>
  );
};

WomanFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WomanFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WomanFilled;
