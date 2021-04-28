import React from 'react';
import PropTypes from 'prop-types';

const StatusChartRegular = props => {
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
        d="M17.835 6.458a1.94 1.94 0 013.882 0 1.938 1.938 0 01-1.938 1.936 1.9 1.9 0 01-.423-.05l-2.398 4.013c.266.334.431.748.431 1.205v.003c0 1.07-.87 1.938-1.94 1.938a1.941 1.941 0 01-1.94-1.941c0-.032.005-.061.01-.09l.008-.07L9.4 11.595c-.356.387-.86.63-1.423.63a1.83 1.83 0 01-.346-.043l-.007-.001-2.21 3.896c.305.342.495.784.495 1.277a1.943 1.943 0 01-3.885 0 1.94 1.94 0 011.941-1.935c.12 0 .241.014.359.036l2.207-3.89a1.924 1.924 0 01-.496-1.275 1.94 1.94 0 013.88 0 .742.742 0 01-.01.107l-.007.053 4.126 1.806c.356-.386.86-.63 1.423-.63.151 0 .3.02.448.056l2.39-4a1.907 1.907 0 01-.451-1.224zm1.94.683a.685.685 0 11-.002-1.37.685.685 0 01.003 1.37zm-11.8 3.832a.685.685 0 11.047-1.37.685.685 0 01-.047 1.37z"
      ></path>
    </svg>
  );
};

StatusChartRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StatusChartRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StatusChartRegular;
