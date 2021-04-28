import React from 'react';
import PropTypes from 'prop-types';

const TechServiceMobileFilled = props => {
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
        d="M18.605 2.15H11.42c-1.107 0-1.91.272-2.454.832-.535.549-.796 1.353-.796 2.46v4.733l-2.717 2.717a3.026 3.026 0 00-3.202 3.793.839.839 0 001.407.375l.655-.652.311.044.045.311-.656.656a.84.84 0 00.379 1.406 3.017 3.017 0 003.776-2.499v2.224c0 2.216 1.061 3.292 3.249 3.292h7.185c2.187 0 3.249-1.076 3.249-3.292V5.441c.003-2.185-1.09-3.291-3.246-3.291zm-6.065 7.933L8.173 14.45H8.17v.002l-.885.886a2.182 2.182 0 01-2.675 2.675l.952-.953-.193-1.353-1.353-.193-.952.952a2.182 2.182 0 012.675-2.675l5.252-5.255a2.186 2.186 0 012.675-2.677l-.952.952.193 1.353 1.353.193.952-.952a2.182 2.182 0 01-1.543 2.675c-.367.104-.76.104-1.129.003zm2.482 9.291c.302 0 .546-.081.714-.252.154-.157.241-.39.241-.706 0-.653-.375-.958-.955-.958s-.955.303-.955.958c0 .314.086.549.24.706.169.17.412.252.715.252z"
      ></path>
    </svg>
  );
};

TechServiceMobileFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TechServiceMobileFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TechServiceMobileFilled;
