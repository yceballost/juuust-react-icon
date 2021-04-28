import React from 'react';
import PropTypes from 'prop-types';

const ProgramAlarmFilled = props => {
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
        d="M21.616 17.871c.202.16.275.426.185.667a.592.592 0 01-.565.403h-5.227c-.034.55-.185 1.359-.76 1.994-.534.603-1.31.908-2.296.908-.99 0-1.765-.305-2.3-.908-.574-.635-.72-1.448-.75-1.994H4.674a.597.597 0 01-.568-.403.59.59 0 01.187-.667c.412-.339.754-.779 1.037-1.302C3.3 15.902 2.16 14.22 2.16 11.422c0-3.328 1.619-5.073 4.443-5.412 1.507-3.958 5.924-3.868 6.353-3.843.364-.025 3.002-.095 4.918 1.68 1.277 1.183 1.927 2.889 1.927 5.082v3.804c-.014.07-.19 3.504 1.816 5.137zM3.367 11.42c0 2.919 1.37 4.277 4.306 4.277 2.935 0 4.305-1.358 4.305-4.277s-1.37-4.277-4.305-4.277c-2.936 0-4.306 1.358-4.306 4.277zm5.574 2.266a.613.613 0 00.86 0 .597.597 0 000-.851l-1.52-1.51V9.29a.604.604 0 00-.608-.602.604.604 0 00-.608.602v2.283c0 .16.064.314.179.426l1.697 1.686z"
      ></path>
    </svg>
  );
};

ProgramAlarmFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProgramAlarmFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProgramAlarmFilled;
