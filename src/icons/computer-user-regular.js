import React from 'react';
import PropTypes from 'prop-types';

const ComputerUserRegular = props => {
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
        d="M12.457 16.27h8.627c.33 0 .602.272.6.614a.606.606 0 01-.603.608h-8.89a1.209 1.209 0 01-.734.45c-.748.135-1.796.42-2.55 1.02-.5.4-1.215.4-1.72 0-.756-.6-1.803-.885-2.548-1.02a1.22 1.22 0 01-.998-1.204v-2.045l-.963-.437A1.149 1.149 0 012 13.206c0-.46.258-.863.678-1.053l1.678-.757V7.413c0-.919.243-1.638.728-2.137.499-.513 1.233-.776 2.185-.776h11.454c.95 0 1.683.26 2.182.776.482.499.728 1.218.728 2.137v5.434c0 .92-.244 1.645-.726 2.149-.5.524-1.238.79-2.184.79l-6.266.003v.481zm.865-4.115l-4.86-2.184a1.138 1.138 0 00-.927 0l-1.992.893V7.416c0-.594.132-1.03.39-1.297.266-.274.714-.415 1.333-.415L18.72 5.7c.616 0 1.064.14 1.333.414.258.267.39.704.39 1.297v5.437c0 .6-.132 1.042-.393 1.314-.268.28-.717.423-1.33.423l-6.132.003.731-.328c.412-.185.678-.597.678-1.05a1.128 1.128 0 00-.675-1.054zm-.622 1.05l-4.725-2.122L3.3 13.206l4.725 2.123 4.675-2.123zm-4.767 4.796a.182.182 0 00.23 0c.952-.756 2.201-1.1 3.083-1.26l.003-1.55-2.787 1.253a1.127 1.127 0 01-.927 0l-2.69-1.21v1.501c.886.163 2.135.51 3.088 1.266z"
      ></path>
    </svg>
  );
};

ComputerUserRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ComputerUserRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ComputerUserRegular;
