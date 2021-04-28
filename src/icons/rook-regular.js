import React from 'react';
import PropTypes from 'prop-types';

const RookRegular = props => {
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
        d="M16.31 17.983h.778a.61.61 0 01.614.62v2.632a.614.614 0 01-.617.617H6.836a.618.618 0 01-.616-.617v-2.633c0-.341.275-.616.616-.616h.779v-1.678c0-.341.274-.616.616-.616h.544l.753-6.532h-.19a.618.618 0 01-.617-.616V6.98H7.635a.618.618 0 01-.617-.617V2.776c0-.342.275-.616.617-.616h1.81c.338 0 .615.277.615.616v.925h.463v-.925c0-.342.274-.616.616-.616h1.568c.34 0 .617.277.617.616v.995l.493-.009v-.986c0-.342.274-.616.616-.616h1.885c.339 0 .616.277.616.616v3.586a.614.614 0 01-.616.616h-1.022V8.54a.614.614 0 01-.617.616h-.19l.753 6.532h.451c.34 0 .617.278.617.617v1.677zm.162 2.63H7.458v-1.4h9.014v1.4zm-7.619-2.63h6.224v-1.061H8.853v1.061zm4.395-8.826h-2.473l-.754 6.532H14l-.751-6.532zm-3.291-1.23h4.106v-.946H9.957v.946zm-1.13-4.535h-.576v2.359h7.45V3.392h-.65v.975c0 .336-.27.61-.607.616l-1.725.026a.62.62 0 01-.628-.614V3.392h-.336v.925a.614.614 0 01-.616.616H9.444a.618.618 0 01-.616-.616v-.925z"
      ></path>
    </svg>
  );
};

RookRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RookRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RookRegular;
