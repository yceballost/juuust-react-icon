import React from 'react';
import PropTypes from 'prop-types';

const InvoicePlanFileLight = props => {
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
        d="M5.717 21.834H18.28c.44 0 .826-.386.826-.826V7.899a.277.277 0 00-.08-.2l-5.463-5.462a.302.302 0 00-.093-.06.278.278 0 00-.106-.02H5.717c-.417 0-.826.408-.826.826v18.025c0 .431.395.826.826.826zm7.367-19.118H5.717c-.106 0-.266.16-.266.267v18.025c0 .12.146.266.266.266H18.28c.129 0 .266-.137.266-.266V8.178h-2.45c-.88 0-1.634-.288-2.18-.831-.546-.544-.832-1.297-.832-2.18v-2.45zm.56.395v2.056c0 1.488.964 2.451 2.451 2.451h2.056l-4.507-4.507zm-5.742 9.437h8.193a.28.28 0 00.28-.28.28.28 0 00-.28-.28H7.902a.28.28 0 00-.28.28c0 .154.126.28.28.28zm8.193 3.006H7.902a.28.28 0 01-.28-.28.28.28 0 01.28-.28h8.193a.28.28 0 01.28.28.28.28 0 01-.28.28zm0 3.003H7.902a.28.28 0 01-.28-.28.28.28 0 01.28-.28h8.193a.28.28 0 01.28.28.28.28 0 01-.28.28z"
      ></path>
    </svg>
  );
};

InvoicePlanFileLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InvoicePlanFileLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InvoicePlanFileLight;
