import React from 'react';
import PropTypes from 'prop-types';

const TechServiceInternetFilled = props => {
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
        d="M21.842 8.455v4.938c0 1.115-.266 1.983-.787 2.582-.563.645-1.404.973-2.504.973H5.44c-1.098 0-1.94-.328-2.504-.97-.52-.602-.787-1.47-.787-2.585V8.455c0-1.115.266-1.984.787-2.583C3.5 5.228 4.34 4.9 5.441 4.9h13.11c1.098 0 1.94.328 2.504.972.52.6.787 1.468.787 2.583zm-.594 10.677H2.744a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h18.504c.308 0 .56.252.56.56 0 .308-.252.56-.56.56zm-10.807-6.571a.615.615 0 00-.269.297s-.333.919-.902 1.182c-.568.263-1.481-.073-1.481-.073-.115-.042-.118-.117-.009-.168l.552-.258a.492.492 0 00.241-.302l.129-.61a.304.304 0 00-.146-.314l-.549-.295a.488.488 0 00-.386-.01l-.552.257c-.11.05-.163 0-.123-.112 0 0 .327-.919.896-1.182.569-.264 1.482.073 1.482.073.131.039.271.033.4-.017l3.824-1.782a.598.598 0 00.269-.294s.327-.919.896-1.182c.569-.263 1.482.073 1.482.073.115.04.117.115.008.165l-.552.258a.493.493 0 00-.24.302l-.13.611a.303.303 0 00.146.314l.552.294c.12.056.26.061.387.011l.552-.258c.109-.05.162 0 .123.112 0 0-.33.92-.897 1.182-.568.264-1.481-.072-1.481-.072a.614.614 0 00-.4.016l-3.822 1.782z"
      ></path>
    </svg>
  );
};

TechServiceInternetFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TechServiceInternetFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TechServiceInternetFilled;
