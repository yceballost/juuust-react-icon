import React from 'react';
import PropTypes from 'prop-types';

const ListRegular = props => {
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
        d="M4.465 6.952c0-.613-.515-1.112-1.151-1.112-.639 0-1.154.499-1.154 1.112 0 .614.515 1.11 1.154 1.112.636 0 1.151-.498 1.151-1.112zm.98-.003c0 .41.36.74.799.74h14.804c.443 0 .798-.33.798-.74 0-.409-.358-.74-.798-.74H6.244c-.443 0-.798.331-.798.74zm15.603 4.303c.44 0 .798.33.798.74 0 .408-.355.739-.798.739H6.244c-.44 0-.798-.33-.798-.74 0-.409.355-.74.798-.74h14.804zm-16.583.74c0-.614-.515-1.113-1.151-1.113-.639 0-1.154.499-1.154 1.112 0 .614.515 1.112 1.154 1.112.636 0 1.151-.498 1.151-1.112zm16.583 4.302c.44 0 .798.33.798.74 0 .405-.355.739-.798.739H6.244c-.44 0-.798-.334-.798-.74 0-.406.355-.74.798-.74h14.804zm-16.583.74c0-.614-.515-1.113-1.151-1.113-.639 0-1.154.496-1.154 1.112 0 .611.515 1.11 1.154 1.112.636 0 1.151-.501 1.151-1.112z"
      ></path>
    </svg>
  );
};

ListRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ListRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ListRegular;
