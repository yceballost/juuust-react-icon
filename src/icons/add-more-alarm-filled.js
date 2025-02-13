import React from 'react';
import PropTypes from 'prop-types';

const AddMoreAlarmFilled = props => {
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
        d="M21.468 17.714c.196.16.269.434.188.678a.606.606 0 01-.578.395h-5.24c-.04.546-.196 1.359-.762 1.995-.544.602-1.325.907-2.306.907-.991 0-1.77-.305-2.313-.907-.569-.636-.723-1.449-.754-1.995H4.465a.602.602 0 01-.392-1.07c.462-.37.846-.885 1.145-1.496C3.706 15.678 2 14.367 2 11.134c0-4.198 2.843-5.148 4.42-5.347 1.532-3.885 5.927-3.807 6.35-3.781.373-.017 3.014-.09 4.93 1.68 1.283 1.182 1.933 2.897 1.933 5.093v3.819c-.01.26-.124 3.534 1.835 5.116zm-18.25-6.58c0 3.636 2.519 4.216 4.02 4.23h.457c1.51-.022 4.028-.61 4.028-4.199 0-3.594-2.54-4.19-4.054-4.23H7.19c-1.487.009-3.972.572-3.972 4.2zm4.247 3.314a.607.607 0 00.61-.602h.003v-2.104h2.12a.61.61 0 00.609-.605.607.607 0 00-.608-.605h-2.12V8.457a.607.607 0 00-.611-.603.606.606 0 00-.608.603v2.075H4.742a.604.604 0 100 1.207h2.115v2.107a.608.608 0 00.608.602z"
      ></path>
    </svg>
  );
};

AddMoreAlarmFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddMoreAlarmFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AddMoreAlarmFilled;
