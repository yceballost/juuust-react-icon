import React from 'react';
import PropTypes from 'prop-types';

const SearchFileFilled = props => {
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
        d="M21.647 8.034v-.009c0-.014 0-.025-.003-.039v-.014l-.008-.05a.236.236 0 00-.006-.024.211.211 0 01-.005-.024.018.018 0 00-.004-.01l-.002-.004c-.002-.008-.005-.016-.01-.025l-.004-.011-.006-.012c-.005-.016-.014-.03-.022-.044l-.025-.042-.009-.012a.782.782 0 01-.01-.015l-.008-.01-.004-.005-.009-.012a.43.43 0 00-.033-.036l-5.462-5.462a.43.43 0 00-.037-.034l-.01-.008a.782.782 0 00-.016-.012l-.016-.01-.01-.01-.043-.024a.223.223 0 00-.022-.012l-.023-.01-.01-.006-.022-.009-.015-.005h-.012a.237.237 0 00-.047-.012l-.05-.008h-.015l-.02-.001-.019-.002h-.008c-2.194-.002-4.613 0-5.824 0h-.686c-.711 0-1.151.44-1.151 1.149v2.28a5.803 5.803 0 00-2.538 9.168L2.16 17.994a.562.562 0 00.806.78l3.25-3.376a5.775 5.775 0 001.748.989V20.5c0 .715.442 1.16 1.154 1.16h11.397c.684 0 1.13-.445 1.13-1.132.002-.442.002-8.235.002-12.495zm-1.913-.56h-1.378c-.653 0-1.2-.205-1.583-.589-.384-.384-.585-.933-.585-1.585V3.922l1.773 1.773 1.773 1.778zm-6.532.128a4.678 4.678 0 00-6.62 0 4.656 4.656 0 00-1.37 3.308 4.68 4.68 0 107.99-3.308z"
      ></path>
    </svg>
  );
};

SearchFileFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SearchFileFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SearchFileFilled;
