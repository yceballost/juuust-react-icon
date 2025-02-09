import React from 'react';
import PropTypes from 'prop-types';

const MobileQuestionFilled = props => {
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
        d="M20.891 3.123c.65.636.958 1.536.958 2.732v12.3c0 1.22-.317 2.123-.966 2.756-.642.627-1.544.94-2.76.94h-6.207c-1.218 0-2.117-.313-2.767-.94-.577-.572-.885-1.342-.95-2.356v-.546h-.115c-3.74 0-5.924-1.874-5.924-5.869 0-3.994 2.185-5.868 5.924-5.868h.107v-.42c0-1.182.308-2.073.958-2.717.647-.65 1.549-.975 2.767-.975h6.208c1.218.006 2.126.32 2.767.963zm-8.09 9.02c0 3.182-1.501 4.661-4.714 4.661-3.204 0-4.706-1.479-4.706-4.66 0-3.183 1.502-4.662 4.706-4.662 3.213 0 4.714 1.479 4.714 4.661zM9.283 8.925c.457.33.67.787.67 1.434 0 .77-.33 1.24-1.028 2.061-.779.894-.779.894-.779 1.675 0 .222-.182.401-.406.401h-.26a.403.403 0 01-.398-.325 2.045 2.045 0 01-.037-.403c0-.68.247-1.096.768-1.715l.098-.114c.832-.978.944-1.205.944-1.591 0-.275-.07-.437-.252-.58-.104-.084-.297-.18-.852-.18-.317 0-.6.037-.938.124a.42.42 0 01-.317-.05.402.402 0 01-.182-.264l-.04-.199a.403.403 0 01.228-.44c.28-.129.868-.23 1.367-.23.588-.002 1.064.132 1.414.396zm-1.658 5.834c.406 0 .683.278.683.659 0 .42-.274.689-.666.689-.412 0-.684-.266-.684-.65v-.037a.643.643 0 01.667-.66zm6.345 3.25c0-.659.389-1.045 1.047-1.045.664 0 1.053.386 1.053 1.045 0 .319-.09.577-.274.753-.188.193-.454.289-.779.289s-.59-.096-.779-.289c-.179-.176-.268-.434-.268-.753z"
      ></path>
    </svg>
  );
};

MobileQuestionFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobileQuestionFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobileQuestionFilled;
