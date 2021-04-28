import React from 'react';
import PropTypes from 'prop-types';

const EmergencyCrossWithCircleRegular = props => {
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
        d="M21.686 11.871c0-9.053-7.504-9.815-9.431-9.86-.23-.005-.499-.011-.754-.011l-.09.001-.086.002c-1.975.017-9.322.694-9.322 9.81 0 9.128 7.414 9.842 9.392 9.87.104.003.213.003.32.003.201 0 .403 0 .58-.005 1.879-.034 9.391-.74 9.391-9.81zm-1.232 0c0 7.608-5.723 8.535-8.185 8.58a33.58 33.58 0 01-.558.005c-.1 0-.204 0-.302-.002-2.46-.034-8.18-.947-8.18-8.642 0-7.678 5.667-8.56 8.102-8.58l.168-.002c.246 0 .504.005.725.01 2.473.06 8.23 1.02 8.23 8.631zm-3.345 1.41c.14 0 .255-.105.27-.15l-.004-2.554c-.017-.048-.131-.146-.266-.146h-3.221a.616.616 0 01-.616-.616V6.602c0-.14-.104-.255-.149-.269l-2.557.003c-.037.011-.137.126-.137.266v3.222a.616.616 0 01-.617.616H6.591c-.151 0-.252.103-.26.14v2.566c.002.033.103.137.26.137h3.221c.34 0 .617.274.617.616v3.221c0 .152.103.252.14.258h2.574c.034-.008.137-.106.137-.258l-.008-3.218a.615.615 0 01.616-.616h3.221v-.006zm1.499-2.712c0-.729-.7-1.367-1.499-1.367h-2.608V6.605c0-.795-.638-1.496-1.367-1.496h-2.568c-.74 0-1.367.684-1.367 1.496V9.21H6.594c-.81 0-1.49.628-1.49 1.367v2.569c0 .742.68 1.367 1.49 1.367h2.605v2.605c0 .806.625 1.487 1.367 1.487h2.577c.74 0 1.367-.68 1.367-1.49l-.006-2.602h2.605c.798 0 1.499-.64 1.499-1.367v-2.577z"
      ></path>
    </svg>
  );
};

EmergencyCrossWithCircleRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmergencyCrossWithCircleRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmergencyCrossWithCircleRegular;
