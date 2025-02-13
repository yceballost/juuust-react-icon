import React from 'react';
import PropTypes from 'prop-types';

const ToothFilled = props => {
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
      <path d="M15.431 21.714h-.114c-.157 0-.275-.039-.348-.064a1.762 1.762 0 01-.756-.572 5.736 5.736 0 01-.485-.747l-.075-.166a17.4 17.4 0 01-.317-.804c-.263-.694-1.022-2.692-1.496-3.213-.473.521-1.23 2.521-1.493 3.213-.145.387-.24.633-.313.796l-.009.04-.073.134a5.667 5.667 0 01-.49.753 1.719 1.719 0 01-.717.552 1.066 1.066 0 01-.37.076h-.112c-.157 0-.274-.04-.347-.065a1.739 1.739 0 01-.754-.571 5.466 5.466 0 01-.423-.645l-.044-.075a19.964 19.964 0 01-1.406-3.07 21.246 21.246 0 01-.715-2.289c-.042-.16-.092-.367-.148-.59l-.028-.116c-1.025-1.784-1.75-3.554-2.16-5.26-.583-2.44-.078-4.488 1.42-5.76.857-.736 2.023-1.176 3.28-1.24 1.294-.07 2.639.252 3.874.938.334.188.67.378 1.031.591a84.49 84.49 0 011.03-.588c1.236-.686 2.584-1.011 3.88-.941 1.255.064 2.42.504 3.28 1.244 1.496 1.271 2 3.316 1.418 5.756-.409 1.706-1.137 3.473-2.16 5.26l-.025.098c-.056.233-.106.446-.154.617a20.845 20.845 0 01-.714 2.283 19.76 19.76 0 01-1.39 3.039l-.058.1a5.584 5.584 0 01-.429.65 1.72 1.72 0 01-.717.552.914.914 0 01-.373.084z"></path>
    </svg>
  );
};

ToothFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ToothFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ToothFilled;
