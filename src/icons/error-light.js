import React from 'react';
import PropTypes from 'prop-types';

const ErrorLight = props => {
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
        d="M21.843 8.172a.846.846 0 00-.25-.592L16.42 2.592c-.306-.303-.653-.451-1.057-.434l-7.165.008c-.742 0-1.353.608-1.353 1.347v5.101L2.25 17.628a.865.865 0 00-.093.378c.009.437.364.815.801.782l3.897.017v1.619c-.017.403.1.756.347 1.02.238.251.594.4.997.4l12.381-.017c.695 0 1.255-.569 1.255-1.258l.009-12.397zm-.827.577l-.008 11.823a.432.432 0 01-.432.434l-12.372.017c-.123 0-.294-.025-.403-.148-.09-.093-.132-.233-.124-.429v-1.644l7.28.025h.028a.77.77 0 00.751-.557.762.762 0 00-.05-.583L9.725 5.768a.732.732 0 00-.367-.363L9.352 5.4a.782.782 0 00-1.047.359L7.669 7V3.517a.533.533 0 01.535-.527l6.75-.008.034 2.465v.003c0 .1-.004 1.489.925 2.437.554.56 1.296.837 2.23.846l2.873.017zM7.677 17.998H2.988l3.855-7.63.826-1.628L8.99 6.127l5.983 11.88-7.297-.01zm8.165-14.82a.315.315 0 00-.056-.051l.034 2.316c0 .073.008 1.174.695 1.866.39.395.941.6 1.633.6l2.616.016c-.003 0-4.921-4.748-4.921-4.748zM9.034 14.804a.416.416 0 01-.412-.412v-4.47a.412.412 0 01.824 0v4.47a.416.416 0 01-.412.412zm-.639 1.165a.645.645 0 001.289 0 .644.644 0 00-1.289 0z"
      ></path>
    </svg>
  );
};

ErrorLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ErrorLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ErrorLight;
