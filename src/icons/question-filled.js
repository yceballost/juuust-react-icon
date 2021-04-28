import React from 'react';
import PropTypes from 'prop-types';

const QuestionFilled = props => {
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
        d="M12.3 2.158l.094.002c1.577.037 9.442.69 9.44 9.86 0 9.177-7.838 9.784-9.41 9.812-.173.003-.375.006-.58.006-.092 0-.19 0-.282-.003-1.572-.022-9.412-.605-9.412-9.87 0-9.264 7.787-9.8 9.35-9.813.259-.005.546 0 .8.006zm1.242 9.904c-1.339 1.55-1.39 1.61-1.39 3.056a.4.4 0 01-.4.4h-.442a.395.395 0 01-.393-.324 3.13 3.13 0 01-.056-.633c0-1.084.381-1.726 1.236-2.754l.162-.196c1.406-1.664 1.672-2.126 1.672-2.913 0-.557-.16-.922-.534-1.221-.216-.171-.594-.37-1.628-.37-.56 0-1.059.064-1.667.218a.4.4 0 01-.49-.316l-.064-.345a.4.4 0 01.221-.437c.378-.179 1.303-.364 2.196-.364.941 0 1.692.21 2.235.62.698.512 1.026 1.223 1.026 2.232-.003 1.232-.516 1.966-1.684 3.347zm-1.955 6.216c-.535 0-.874-.334-.874-.827v-.064c0-.496.347-.843.843-.843.53 0 .874.347.874.843 0 .56-.339.89-.843.89z"
      ></path>
    </svg>
  );
};

QuestionFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

QuestionFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default QuestionFilled;
