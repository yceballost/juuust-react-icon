import React from 'react';
import PropTypes from 'prop-types';

const MobilePlayFilled = props => {
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
        d="M20.9 3.11c.641.644.95 1.535.95 2.742v12.302c0 1.213-.317 2.115-.967 2.751-.642.636-1.544.941-2.762.941h-6.21c-1.219 0-2.118-.305-2.768-.933-.574-.571-.885-1.341-.95-2.364v-.546c-.019 0-.037.002-.055.004a.498.498 0 01-.06.005c-3.742 0-5.918-1.875-5.918-5.872 0-4.005 2.176-5.88 5.919-5.88.02 0 .039.003.057.005.017.002.033.004.05.004v-.417c0-1.19.307-2.076.957-2.726.65-.652 1.552-.966 2.768-.966h6.21c1.218 0 2.129.314 2.779.95zm-8.101 9.03c0 3.177-1.502 4.664-4.717 4.664-3.208 0-4.7-1.487-4.7-4.664 0-3.185 1.492-4.672 4.7-4.672 3.215 0 4.717 1.487 4.717 4.672zm-1.44-.526L6.653 8.922a.605.605 0 00-.608 0 .604.604 0 00-.305.52v5.385c0 .215.115.414.305.52a.594.594 0 00.305.082c.107 0 .21-.025.306-.081l4.706-2.692a.605.605 0 00.305-.524.609.609 0 00-.308-.518zm-4.4 2.17v-3.296l2.879 1.647-2.88 1.65zm8.058 5.27c-.325 0-.594-.099-.779-.286-.182-.185-.274-.443-.274-.76 0-.655.395-1.047 1.053-1.047.658 0 1.053.392 1.053 1.048 0 .319-.092.574-.274.759-.185.187-.454.285-.779.285z"
      ></path>
    </svg>
  );
};

MobilePlayFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobilePlayFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobilePlayFilled;
