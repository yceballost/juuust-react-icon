import React from 'react';
import PropTypes from 'prop-types';

const TshirtFilled = props => {
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
      <path d="M21.487 5.756L15.384 2.06c-.003-.003-.009-.003-.011-.003a.372.372 0 00-.098-.036c-.023-.006-.045-.014-.07-.014-.009 0-.017-.006-.023-.006-.014 0-.028.006-.04.008a.38.38 0 00-.1.023c-.014.005-.022.011-.036.017a.344.344 0 00-.101.07l-.017.016c-.02.023-.045.04-.059.068-.008.016-.008.033-.017.047 0 .003 0 .006-.002.006a.36.36 0 00-.031.16c0 1.907-.919 2.837-2.801 2.837-1.886 0-2.801-.927-2.801-2.84a.414.414 0 00-.202-.356.412.412 0 00-.406-.003L2.205 5.751a.413.413 0 00-.168.526l1.974 4.398a.404.404 0 00.54.202l1.614-.773-.033 11.168c0 .109.042.215.117.294.076.075.18.12.289.12h10.868a.403.403 0 00.286-.12.42.42 0 00.117-.294l-.033-11.163 1.583.768c.1.047.218.053.322.014a.42.42 0 00.23-.23l1.744-4.4a.407.407 0 00-.168-.505z"></path>
    </svg>
  );
};

TshirtFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TshirtFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TshirtFilled;
