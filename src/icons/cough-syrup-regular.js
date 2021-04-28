import React from 'react';
import PropTypes from 'prop-types';

const CoughSyrupRegular = props => {
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
        d="M18.462 9.958c0-1.63-.644-2.815-1.829-3.398a.899.899 0 00.017-.213V3.423c0-.784-.636-1.423-1.417-1.423H8.49c-.781 0-1.417.639-1.417 1.423v2.924c0 .093.011.182.028.27-.263.14-.51.302-.72.506-.695.67-1.045 1.622-1.045 2.835v7.924c0 1.213.35 2.166 1.04 2.835.663.644 1.588.97 2.747.97h5.566c2.356 0 3.765-1.424 3.765-3.805l.008-7.924zM8.272 3.423v2.924c0 .124.1.222.221.222h6.742a.22.22 0 00.222-.222V3.423c0-.123-.101-.221-.222-.221H8.493a.22.22 0 00-.221.221zm6.417 17.064c1.204 0 1.98-.448 2.339-1.313H6.77c.11.266.252.498.44.683.434.42 1.076.633 1.916.633h5.563v-.003zm1.252-12.913c.672.27 1.093.807 1.25 1.602H6.612c.101-.49.295-.896.597-1.187.174-.165.39-.289.625-.39.196.107.42.171.658.171h6.742c.26 0 .499-.075.706-.196zM6.532 17.882c0 .016.002.03.003.045l.003.045h10.714l.003-.045a.466.466 0 00.003-.045l.008-7.507H6.535v7.507h-.003zM9.305 6.031a.598.598 0 01-.596-.6V4.314a.6.6 0 01.596-.6.6.6 0 01.597.6V5.43c.003.33-.266.6-.597.6zm1.112-.6c0 .33.267.6.597.6a.6.6 0 00.597-.6V4.314a.6.6 0 00-.597-.6.6.6 0 00-.597.6V5.43zm2.303.6a.598.598 0 01-.597-.6V4.314a.6.6 0 01.597-.6.6.6 0 01.596.6V5.43c0 .33-.266.6-.596.6zm1.11-.6a.598.598 0 101.192 0V4.314a.598.598 0 10-1.193 0V5.43zm.27 9.185v-.862h-1.797V11.95h-.863v1.804l-1.796.002v.866h1.796l.003 1.804h.862v-1.804l1.796-.006zm1.037-.994c0-.493-.44-.908-.96-.908l-.84.003v-.84c0-.521-.415-.964-.906-.964h-1.128c-.49 0-.905.443-.905.964v.84h-.835c-.53 0-.96.409-.96.908v1.131c0 .502.43.908.96.908h.837v.837c0 .533.407.964.905.964h1.13c.498 0 .904-.431.904-.964v-.843h.837c.521 0 .961-.414.961-.904v-1.132z"
      ></path>
    </svg>
  );
};

CoughSyrupRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CoughSyrupRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CoughSyrupRegular;
