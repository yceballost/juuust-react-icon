import React from 'react';
import PropTypes from 'prop-types';

const CarWithClockRegular = props => {
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
        d="M21.247 15.634a5.27 5.27 0 00-1.014-1.358c1.072-1.193 1.619-2.89 1.622-5.045 0-4.552-2.493-7.064-7.02-7.064-4.518 0-7.011 2.512-7.011 7.064 0 .098 0 .205.008.303-1.431.453-2.493 1.277-3.204 2.002-1.692 1.712-2.451 3.869-2.443 5.112-.084 1.592.144 2.654.154 2.7.065.284.311.488.597.488H4.65c.23 1.252 1.168 2.009 2.566 2.009s2.336-.757 2.566-2.009h3.414c.222 1.26 1.16 2.017 2.558 2.017 1.397 0 2.336-.756 2.566-2.017h2.378c.165 0 .31-.067.425-.173l.002-.002c.075-.075 1.47-1.465.122-4.027zm-12.2-6.406v.031c.351-.056.73-.081 1.118-.081 4.488 0 6.718 2.798 7.323 3.711a5.533 5.533 0 011.747.636c.925-.972 1.39-2.414 1.39-4.297 0-3.868-1.953-5.829-5.793-5.829C11 3.4 9.048 5.357 9.048 9.23zm7.02.995a.614.614 0 00.868 0 .624.624 0 000-.874l-1.548-1.56V5.688a.614.614 0 10-1.227 0v2.358c0 .165.064.322.18.437l1.727 1.74zm4.093 5.989c.68 1.282.426 2.064.238 2.386H18.32c-.213-1.269-1.16-2.025-2.566-2.025-1.404 0-2.345.756-2.558 2.025H9.79c-.221-1.269-1.168-2.034-2.574-2.034s-2.353.765-2.574 2.034H3.465a10.968 10.968 0 01-.056-1.927c-.008-1.037.72-2.888 2.084-4.272.9-.905 2.434-1.983 4.672-1.983 4.502 0 6.342 3.218 6.415 3.35a.61.61 0 00.507.322c.017 0 2.028.14 3.073 2.124zm-3.006 3.002v-.008c0-.947-.456-1.398-1.397-1.398-.942 0-1.39.454-1.39 1.398v.008c0 .939.448 1.4 1.39 1.4.94 0 1.397-.461 1.397-1.4zm-8.54-.016v.016c-.009.939-.465 1.392-1.398 1.392-.941 0-1.398-.462-1.398-1.409 0-.944.46-1.397 1.398-1.397.941 0 1.398.45 1.398 1.398z"
      ></path>
    </svg>
  );
};

CarWithClockRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CarWithClockRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CarWithClockRegular;
