import React from 'react';
import PropTypes from 'prop-types';

const IdCardFilled = props => {
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
        d="M20.255 19.29H3.43C2.641 19.29 2 18.62 2 17.8V6.013c0-.821.641-1.488 1.431-1.488h16.827c.79 0 1.431.667 1.431 1.488V17.8c-.003.82-.644 1.49-1.434 1.49zm-9.392-4.986c.333 0 .602-.28.602-.628a.616.616 0 00-.602-.627H4.622a.614.614 0 00-.602.627c0 .348.271.628.602.628h6.24zm-1.4-3.978a.617.617 0 01-.606.628H4.622a.617.617 0 01-.605-.628c0-.347.272-.627.605-.627h4.235c.333 0 .605.28.605.627zm6.652-2.243c-.569 0-1.014.156-1.32.465-.319.319-.479.795-.479 1.411 0 .617.16 1.09.48 1.41.305.307.75.462 1.319.462.571 0 1.014-.157 1.322-.463.32-.319.482-.795.482-1.411 0-.617-.163-1.09-.482-1.412-.308-.308-.75-.462-1.322-.462zm-1.098 4.568h2.199c.666 0 1.213.213 1.585.61.34.368.518.878.518 1.474v.625a.21.21 0 01-.204.213h-5.992a.21.21 0 01-.204-.213v-.625c0-.596.176-1.106.515-1.473.367-.398.916-.61 1.583-.61z"
      ></path>
    </svg>
  );
};

IdCardFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IdCardFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IdCardFilled;
