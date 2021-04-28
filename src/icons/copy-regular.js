import React from 'react';
import PropTypes from 'prop-types';

const CopyRegular = props => {
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
        d="M16.081 7.602h4.146c.804 0 1.46.656 1.456 1.46v11.165a1.46 1.46 0 01-1.459 1.46H9.062c-.804 0-1.46-.656-1.46-1.46v-4.143H3.51c-.832 0-1.51-.678-1.51-1.51V3.51C2 2.675 2.675 2 3.507 2h11.064c.832 0 1.51.675 1.51 1.51v4.092zM3.275 14.574V3.51c0-.129.106-.235.235-.235H14.57c.13 0 .236.106.236.235v11.064a.237.237 0 01-.236.236H3.507a.236.236 0 01-.232-.236zm17.137 5.653a.185.185 0 01-.185.185H9.064a.185.185 0 01-.184-.185V16.08h5.694c.832 0 1.51-.678 1.51-1.51V8.877h4.143c.104 0 .185.081.185.185v11.165z"
      ></path>
    </svg>
  );
};

CopyRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CopyRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CopyRegular;
