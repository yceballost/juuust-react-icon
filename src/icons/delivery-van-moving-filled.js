import React from 'react';
import PropTypes from 'prop-types';

const DeliveryVanMovingFilled = props => {
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
        d="M21.028 10.493a428.447 428.447 0 01-3.266-4.356c-.336-.465-.958-.778-1.546-.778H5.29c-.409 0-.826.184-1.148.504-.322.319-.504.74-.504 1.148v.532H2.56a.562.562 0 00-.56.56c0 .309.252.56.56.56H3.64v1.611H2.56a.562.562 0 00-.56.56c0 .309.252.56.56.56H3.64v1.612H2.56a.562.562 0 00-.56.56c0 .308.252.56.56.56H3.64v1.078c0 .41.185.827.504 1.149.32.322.74.504 1.148.504h.14c.266 1.05 1.09 1.639 2.35 1.639 1.261 0 2.085-.588 2.348-1.639h4.585c.266 1.05 1.09 1.639 2.35 1.639s2.084-.588 2.35-1.639h.625c.41 0 .826-.185 1.149-.504.322-.32.504-.74.504-1.149v-3.277c-.003-.57-.416-1.11-.663-1.432l-.001-.002zm-13.25 6.882c-.926 0-1.321-.395-1.321-1.322s.395-1.322 1.322-1.322 1.322.395 1.322 1.322-.395 1.322-1.322 1.322zm7.962-1.322c0 .927.394 1.322 1.322 1.322.927 0 1.322-.395 1.322-1.322s-.395-1.322-1.322-1.322c-.928 0-1.323.395-1.323 1.322z"
      ></path>
    </svg>
  );
};

DeliveryVanMovingFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DeliveryVanMovingFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DeliveryVanMovingFilled;
