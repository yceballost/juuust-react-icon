import React from 'react';
import PropTypes from 'prop-types';

const AutenticationSuccessLight = props => {
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
        d="M21.383 14.669c.485-2.782.468-9.238.46-9.51a.418.418 0 00-.157-.31.471.471 0 00-.345-.09c-1.767.277-2.731-.353-3.84-1.093l-.005-.003c-1.069-.705-2.284-1.507-4.354-1.507h-.008c-2.064 0-3.281.8-4.354 1.503l-.01.007c-1.101.74-2.065 1.373-3.832 1.092a.42.42 0 00-.353.082.4.4 0 00-.149.319v.008c0 .228-.01 4.854.27 7.925-1.637.557-2.55 1.919-2.55 4.185 0 3.044 1.65 4.473 4.482 4.473 1.622 0 2.838-.485 3.594-1.46a31.736 31.736 0 002.731 1.51c.056.026.115.04.174.043a.432.432 0 00.179-.043c.305-.14 7.443-3.546 8.067-7.131zm-.807-.137c.395-2.289.443-7.362.443-8.91-1.818.148-2.919-.567-3.972-1.264-1.02-.684-2.078-1.381-3.908-1.381h-.008c-1.826 0-2.885.697-3.905 1.378l-.018.012c-1.056.694-2.155 1.416-3.954 1.26 0 1.246.034 4.759.255 7.28a7.084 7.084 0 011.126-.098c1.866 0 3.208.63 3.913 1.927h4.992c1.58 0 2.885.485 3.773 1.412.05.05.14.17.23.294.54-.622.919-1.272 1.033-1.91zm-4.543-8.026c-.675-.65-1.65-.98-2.9-.98-1.246 0-2.22.33-2.893.98-.7.675-1.053 1.673-1.053 2.97 0 1.296.356 2.294 1.053 2.966.673.647 1.647.975 2.894.975 1.25 0 2.224-.33 2.899-.975.703-.675 1.059-1.672 1.059-2.966 0-1.295-.356-2.295-1.059-2.97zm-.569 5.348c.535-.513.807-1.314.807-2.376 0-1.064-.272-1.865-.807-2.38-.518-.5-1.3-.751-2.33-.751-1.025 0-1.807.252-2.322.75-.532.516-.804 1.317-.804 2.381 0 1.065.272 1.863.8 2.376.514.496 1.298.745 2.323.745 1.034 0 1.815-.252 2.333-.745zM8.66 15.397a.41.41 0 01.58.58l-3.187 3.185a.41.41 0 01-.58.003l-.003-.003-1.434-1.431a.41.41 0 01.58-.58l1.142 1.14c.003 0 2.902-2.894 2.902-2.894zm10.32 1.661c-1.947 1.922-5.07 3.538-5.846 3.916a33.787 33.787 0 01-2.473-1.38c.288-.631.459-1.387.459-2.315a6.05 6.05 0 00-.238-1.722h4.66c1.35 0 2.452.4 3.183 1.157.09.112.173.227.255.344zM6.638 20.932c2.493 0 3.658-1.165 3.658-3.652 0-2.496-1.165-3.653-3.658-3.653-2.49 0-3.658 1.157-3.658 3.652 0 2.488 1.168 3.653 3.658 3.653z"
      ></path>
    </svg>
  );
};

AutenticationSuccessLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AutenticationSuccessLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AutenticationSuccessLight;
