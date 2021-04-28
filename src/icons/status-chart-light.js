import React from 'react';
import PropTypes from 'prop-types';

const StatusChartLight = props => {
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
        d="M18.332 3.915c0-.972.787-1.765 1.754-1.765.97 0 1.757.793 1.754 1.765 0 .973-.785 1.763-1.754 1.763-.188 0-.364-.037-.535-.093l-2.634 4.447a1.761 1.761 0 01-1.261 2.981 1.763 1.763 0 01-1.754-1.765c0-.103.011-.207.03-.308L9.394 8.936c-.32.42-.82.698-1.387.698-.165 0-.325-.025-.482-.07l-2.426 4.313a1.762 1.762 0 01-1.194 3.046 1.763 1.763 0 01-1.754-1.766 1.76 1.76 0 011.754-1.762c.163.002.325.027.48.075L6.81 9.155a1.76 1.76 0 011.194-3.049c.966 0 1.754.79 1.754 1.763 0 .104-.012.207-.031.308l4.54 2.004c.321-.42.82-.698 1.389-.698.193 0 .384.033.566.1l2.623-4.42a1.775 1.775 0 01-.513-1.248zm1.757.939a.938.938 0 010-1.875c.515 0 .933.42.933.939 0 .518-.42.936-.933.936zm-4.43 7.33a.938.938 0 010-1.874.938.938 0 010 1.874zm-8.583-4.31c0 .516.418.934.933.934a.935.935 0 00.93-.94.933.933 0 00-.93-.935.935.935 0 00-.933.936v.005zm-3.17 8.222a.935.935 0 010-1.872.937.937 0 010 1.872z"
      ></path>
    </svg>
  );
};

StatusChartLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StatusChartLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StatusChartLight;
