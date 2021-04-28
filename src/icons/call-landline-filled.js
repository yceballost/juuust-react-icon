import React from 'react';
import PropTypes from 'prop-types';

const CallLandlineFilled = props => {
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
        d="M17.61 21.806c-.866 0-1.858-.213-2.925-.639-2.182-.87-4.572-2.566-6.908-4.902l-.005-.005-.076-.073-.005-.006C5.354 13.845 3.66 11.46 2.789 9.274c-.832-2.09-.852-3.874-.056-5.028l.016-.025.012-.017.069-.09c.135-.178.378-.498.63-.74.87-.829 1.754-1.24 2.634-1.223.846.016 1.683.43 2.487 1.235.303.297.569.633.785 1 .431.694.588 1.412.465 2.131-.124.72-.524 1.423-1.196 2.096a5.708 5.708 0 01-.496.442c-.065.118-.025.488.496 1.25.602.88 1.61 1.918 2.316 2.624l.084.084c.706.706 1.745 1.712 2.625 2.317.759.52 1.131.56 1.25.496a5.27 5.27 0 01.442-.496c.672-.672 1.375-1.073 2.095-1.196.72-.124 1.437.033 2.131.465.367.218.7.482 1 .787.804.804 1.219 1.641 1.236 2.487.017.877-.395 1.765-1.227 2.633a6.362 6.362 0 01-.813.681l-.019.014-.017.011c-.008.006-.017.011-.025.02-.563.38-1.277.574-2.104.574z"
      ></path>
    </svg>
  );
};

CallLandlineFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CallLandlineFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CallLandlineFilled;
