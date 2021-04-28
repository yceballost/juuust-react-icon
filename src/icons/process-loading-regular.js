import React from 'react';
import PropTypes from 'prop-types';

const ProcessLoadingRegular = props => {
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
        d="M12 2.16c6.44 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84C2.16 5.563 5.563 2.16 12 2.16zm0 18.479c5.731 0 8.639-2.905 8.639-8.633 0-5.731-2.905-8.639-8.639-8.639-5.728 0-8.633 2.908-8.633 8.639 0 5.728 2.905 8.633 8.633 8.633zm.65-15.832a.606.606 0 00-.605-.605.608.608 0 00-.605.605v3.025a.604.604 0 101.21 0V4.807zm-4.215 7.154a.606.606 0 01-.606.605H4.804a.604.604 0 110-1.21H7.83a.606.606 0 01.606.605zm1.016 2.535a.605.605 0 00-.854 0L6.46 16.633a.605.605 0 000 .855l.003.002a.604.604 0 00.851-.002l2.137-2.138a.605.605 0 000-.854zm2.51 1.076c.333 0 .602.271.602.605v3.022a.602.602 0 01-1.204 0v-3.022c0-.334.269-.605.602-.605zm5.527 1.123l-2.137-2.137a.43.43 0 01-.017-.018l-.008-.01a.603.603 0 00-.863.024.603.603 0 00.033.855l2.14 2.14a.604.604 0 00.852-.854zm1.711-5.252a.602.602 0 010 1.204h-3.025a.602.602 0 010-1.204h3.025zm-4.82-2.359a.605.605 0 001.03.426l2.138-2.14a.605.605 0 00-.855-.854l-2.137 2.14a.61.61 0 00-.176.428z"
      ></path>
    </svg>
  );
};

ProcessLoadingRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProcessLoadingRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProcessLoadingRegular;
