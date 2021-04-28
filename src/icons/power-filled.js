import React from 'react';
import PropTypes from 'prop-types';

const PowerFilled = props => {
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
        d="M19.234 4.578c-1.672-1.61-4.106-2.428-7.238-2.428-3.132 0-5.563.818-7.233 2.428C3.03 6.254 2.15 8.75 2.15 12.004s.88 5.75 2.613 7.423c1.673 1.61 4.107 2.429 7.236 2.429 3.129 0 5.566-.818 7.238-2.429 1.737-1.672 2.616-4.17 2.616-7.423 0-3.252-.882-5.75-2.619-7.426zm-7.745.309c0-.309.252-.56.56-.56.308 0 .56.251.56.56v4.098c0 .308-.252.56-.56.56a.562.562 0 01-.56-.56V4.887zm.585 13.21c1.922 0 3.42-.505 4.457-1.505 1.078-1.039 1.625-2.577 1.622-4.577 0-1.68-.39-3.042-1.16-4.05-.759-.992-1.868-1.627-3.302-1.89a.56.56 0 10-.202 1.103c2.384.437 3.543 2.02 3.543 4.84 0 1.678-.431 2.947-1.28 3.765-.82.79-2.059 1.19-3.678 1.19-1.619 0-2.857-.4-3.677-1.19-.85-.818-1.28-2.084-1.28-3.765 0-2.781 1.125-4.358 3.445-4.82a.559.559 0 10-.219-1.099c-1.397.278-2.479.922-3.218 1.91-.748 1.004-1.126 2.351-1.126 4.01 0 1.994.546 3.534 1.622 4.57 1.036 1 2.532 1.508 4.453 1.508z"
      ></path>
    </svg>
  );
};

PowerFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PowerFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PowerFilled;
