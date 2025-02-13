import React from 'react';
import PropTypes from 'prop-types';

const FirstAidKitLight = props => {
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
        d="M21.843 7.605c0-.697-.575-1.266-1.28-1.266h-3.93v-1.91c0-.575-.564-1.023-1.28-1.023H8.645c-.717 0-1.28.448-1.28 1.023v1.91h-3.93c-.706 0-1.28.569-1.28 1.266v11.762c0 .697.574 1.266 1.28 1.266h17.126c.706 0 1.28-.569 1.28-1.266V7.605zM8.203 4.43v1.91h7.592v-1.91c0-.05-.151-.194-.443-.194H8.646c-.29 0-.442.143-.442.194zm12.802 14.938V7.605a.44.44 0 00-.443-.437H3.436a.44.44 0 00-.442.437v11.762c0 .24.199.437.442.437h17.126a.44.44 0 00.443-.437zm-5.218-6.793c0 .05.016.082.022.087l-.05-.437v.415l-2.488.003a.413.413 0 01-.42-.415V9.77c-.006-.014-.006-.022-.003-.028h-1.686l-.023 2.485c0 .23-.187.415-.42.415l-2.484.002c-.017.003-.023.003-.028 0v1.675l2.512.017c.233 0 .42.185.42.415l.003 2.456c.003.014.003.023 0 .026h1.692l.017-2.485a.417.417 0 01.42-.412h2.485c.014-.005.022-.005.028-.003v-1.759h.002zm.837 0c0-.406-.406-.764-.865-.764l-2.068-.003V9.765c0-.454-.361-.855-.773-.855h-1.84c-.412 0-.773.398-.773.855v2.045l-2.065.002c-.47 0-.865.35-.865.765v1.82c0 .415.397.766.865.766l2.067-.003.003 2.045c0 .462.353.854.773.854h1.84c.418 0 .774-.392.774-.854l-.003-2.045h2.064c.463 0 .866-.359.866-.765v-1.82z"
      ></path>
    </svg>
  );
};

FirstAidKitLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FirstAidKitLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FirstAidKitLight;
