import React from 'react';
import PropTypes from 'prop-types';

const LearnDataRegular = props => {
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
        d="M14.871 2.16c1.63 0 3.185.202 4.367.56 1.732.521 2.605 1.367 2.605 2.502V18.79c0 1.129-.873 1.975-2.605 2.502-1.187.35-2.745.551-4.367.551-1.621 0-3.168-.198-4.358-.551-1.731-.527-2.605-1.373-2.605-2.502v-.151c-.849-.644-1.997-.953-2.812-1.095a1.309 1.309 0 01-1.082-1.297v-2.342l-1.131-.501a1.247 1.247 0 01-.723-1.132c0-.501.275-.927.723-1.137l5.025-2.252V5.222c0-.183.025-.367.076-.544.249-.868 1.098-1.53 2.529-1.958 1.182-.358 2.728-.56 4.358-.56zM10.87 3.919c1.072-.328 2.495-.504 4-.504 1.515 0 2.938.176 4.01.504.668.21 1.44.543 1.656 1.028a.69.69 0 01-.16.235c-.257.303-.78.577-1.498.787-1.064.328-2.487.502-3.994.502-1.516 0-2.939-.177-4.003-.502a4.622 4.622 0 01-1.04-.434c-.324-.176-.532-.383-.624-.594.17-.395.754-.756 1.653-1.022zm9.725 5.717c-.19.328-.74.762-1.706 1.053-1.056.32-2.445.493-3.919.502a.827.827 0 00-.066-.038l-.023-.013L9.38 8.673a1.242 1.242 0 00-.224-.076V6.588c.376.227.824.426 1.364.586 1.188.358 2.737.552 4.367.552 1.622 0 3.168-.194 4.359-.552a5.71 5.71 0 001.347-.577v3.04zm0 4.734c-.182.32-.73.762-1.706 1.056-1.073.328-2.496.501-4 .501-.341 0-.692-.008-1.025-.033v-2.042l1.017-.451c.398-.177.667-.544.714-.972 1.364-.042 2.647-.236 3.653-.544a5.505 5.505 0 001.347-.593v3.078zm-1.714 5.717c.784-.235 1.714-.653 1.714-1.297h-.003v-2.75c-.383.232-.84.434-1.347.593-1.182.359-2.737.552-4.358.552-.465 0-.925-.017-1.373-.05-.182.207-.44.358-.731.409-.849.148-2.048.476-2.905 1.162-.207.16-.44.26-.68.311.19.518.988.86 1.672 1.07 1.078.328 2.501.504 4 .504 1.507 0 2.93-.176 4.01-.504zM8.77 17.72c-1.064-.846-2.47-1.23-3.512-1.473v-1.782l3.12 1.398c.157.076.334.11.5.11.176 0 .34-.034.5-.11l3.222-1.44-.034 1.883c-1 .184-2.395.568-3.462 1.414a.273.273 0 01-.333 0zm.11-7.899l-5.49 2.468 5.498 2.425 5.485-2.459L8.88 9.821z"
      ></path>
    </svg>
  );
};

LearnDataRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LearnDataRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LearnDataRegular;
