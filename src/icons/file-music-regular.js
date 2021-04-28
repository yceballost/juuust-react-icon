import React from 'react';
import PropTypes from 'prop-types';

const FileMusicRegular = props => {
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
        d="M19.287 7.997a.612.612 0 00-.048-.238.842.842 0 00-.213-.384L13.814 2.25A.85.85 0 0013.209 2h-7.3c-.726 0-1.387.658-1.387 1.384v16.918c0 .737.647 1.384 1.387 1.384h11.992c.75 0 1.386-.633 1.386-1.384V7.997zm-1.193 12.305V8.868h-2.278c-1 0-1.86-.33-2.493-.952-.638-.63-.977-1.487-.977-2.482V3.216H5.912c-.073 0-.185.109-.19.168v16.918c0 .06.097.169.19.169h11.991c.096 0 .19-.096.19-.169zM13.539 3.67v1.765c0 .658.213 1.213.614 1.608.406.398.98.61 1.663.61h1.774L13.54 3.67zm1.19 8.65v-.61l-3.742-1.031v.61l3.743 1.031zm0 5.255c0 .544-.26.824-.772.835v.003h-.104c-.513-.009-.77-.292-.77-.843 0-.205 0-.827.756-.835h.112c.515.011.779.297.779.84zM9.19 16.4c.501-.01.762-.29.762-.834 0-.546-.263-.83-.782-.843H9.06c-.756.005-.756.63-.756.832 0 .551.258.834.77.843h.115v.003zm6.577-4.943a.73.73 0 00-.63-.729L10.8 9.53l-.135-.02c-.397 0-.72.331-.72.735v3.59a2.068 2.068 0 00-.756-.167h-.143c-.823.008-1.784.507-1.784 1.888 0 1.38.966 1.885 1.79 1.896h.143c.795-.017 1.708-.493 1.776-1.745l.014-3.33 3.742 1.033v2.437a2.068 2.068 0 00-.757-.168l-.142-.003c-.821.006-1.785.507-1.785 1.888 0 1.38.967 1.885 1.79 1.896h.143c.826-.014 1.79-.518 1.79-1.888v-6.115z"
      ></path>
    </svg>
  );
};

FileMusicRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileMusicRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileMusicRegular;
