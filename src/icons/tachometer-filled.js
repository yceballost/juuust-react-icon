import React from 'react';
import PropTypes from 'prop-types';

const TachometerFilled = props => {
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
        d="M2.15 14.986c0-6.314 3.403-9.653 9.84-9.653 6.443 0 9.846 3.34 9.846 9.653 0 1.42-.179 2.709-.53 3.829a.817.817 0 01-.036.087l-.02.042c-.1.201-.31.33-.54.33H3.268a.601.601 0 01-.577-.414c-.359-1.132-.541-2.434-.541-3.874zm9.83-7.18a.597.597 0 00-.603.592v.8c0 .326.269.592.602.592.33 0 .602-.263.602-.591v-.801a.597.597 0 00-.602-.591zM7.541 11.16c.157 0 .311-.06.429-.174a.58.58 0 000-.838l-.577-.565a.61.61 0 00-.855 0 .585.585 0 000 .837l.577.566a.61.61 0 00.426.174zm5.678 5.117l6.375-1.832a.59.59 0 00.41-.736.602.602 0 00-.749-.401l-6.38 1.835a1.257 1.257 0 00-.883-.356c-.692 0-1.255.549-1.255 1.23 0 .68.56 1.232 1.255 1.232a1.25 1.25 0 001.227-.972zM5.951 14.93h-.818a.597.597 0 01-.602-.591c0-.325.272-.591.602-.591h.818c.333 0 .602.266.602.59a.597.597 0 01-.602.592zm10.03-4.779l.578-.566a.61.61 0 01.854 0 .585.585 0 010 .838l-.577.566a.61.61 0 01-.851 0 .583.583 0 01-.003-.838z"
      ></path>
    </svg>
  );
};

TachometerFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TachometerFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TachometerFilled;
