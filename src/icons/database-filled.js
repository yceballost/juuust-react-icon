import React from 'react';
import PropTypes from 'prop-types';

const DatabaseFilled = props => {
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
        d="M21.714 9.613l-.005 4.46c0 .314-.101.602-.266.84.17.241.271.532.271.849l-.005 4.46a1.46 1.46 0 01-1.451 1.464H3.476a1.462 1.462 0 01-1.45-1.465l.005-4.46c0-.313.098-.601.266-.84a1.46 1.46 0 01-.272-.848l.006-4.46c0-.313.098-.602.266-.84a1.46 1.46 0 01-.272-.849l.006-4.459C2.03 2.658 2.68 2 3.479 2h16.782a1.46 1.46 0 011.448 1.465l-.006 4.46c0 .313-.1.602-.266.84.176.24.277.532.277.848zM19.706 5.65c0 1.033-.608 1.65-1.63 1.65-1.023 0-1.63-.617-1.63-1.65 0-1.034.607-1.65 1.63-1.65 1.02 0 1.63.616 1.63 1.65zm-.017 6.199c0 1.033-.608 1.65-1.63 1.65-1.023 0-1.633-.617-1.633-1.65 0-1.034.61-1.65 1.633-1.65 1.02 0 1.63.616 1.63 1.65zM18.06 19.7c1.022 0 1.63-.616 1.63-1.65 0-1.033-.61-1.65-1.63-1.65-1.023 0-1.633.617-1.633 1.65 0 1.034.61 1.65 1.633 1.65zM11.064 5.647a.617.617 0 01-.613.622H4.767a.617.617 0 01-.613-.622c0-.344.275-.622.614-.622h5.683c.339 0 .613.278.613.622zm-.613 6.824a.617.617 0 00.613-.622.617.617 0 00-.613-.622H4.767a.617.617 0 00-.613.622c0 .344.275.622.614.622h5.683zm.613 5.619a.617.617 0 01-.613.622H4.767a.619.619 0 01-.613-.622c0-.345.275-.622.614-.622h5.683c.339 0 .613.277.613.622zm7.662-12.44c0-.485-.171-.658-.65-.658-.48 0-.65.17-.65.658 0 .484.17.658.65.658.479 0 .65-.174.65-.658zm-.667 5.54c.479 0 .65.174.65.659 0 .484-.171.658-.65.658-.48 0-.65-.174-.65-.658 0-.485.17-.659.65-.659zm.65 6.86c0-.484-.171-.658-.65-.658-.48 0-.65.174-.65.658 0 .485.17.659.65.659.479 0 .65-.174.65-.659z"
      ></path>
    </svg>
  );
};

DatabaseFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DatabaseFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DatabaseFilled;
