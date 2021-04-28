import React from 'react';
import PropTypes from 'prop-types';

const AntennaRegular = props => {
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
        d="M20.255 2.182c.95.961 1.431 2.35 1.431 4.135 0 1.781-.482 3.17-1.431 4.128a.601.601 0 01-.429.182.603.603 0 01-.445-.198.665.665 0 01.017-.914c.7-.705 1.053-1.781 1.053-3.198 0-1.42-.353-2.499-1.053-3.208a.665.665 0 01-.014-.913.596.596 0 01.87-.014zM4.289 9.515a.67.67 0 01.016.916.604.604 0 01-.445.197.594.594 0 01-.429-.183C2.481 9.487 2 8.098 2 6.317c0-1.782.482-3.171 1.431-4.135a.597.597 0 01.874.017.667.667 0 01-.014.913c-.7.709-1.053 1.787-1.053 3.205-.003 1.417.353 2.493 1.05 3.198zm14.963 8.757a.633.633 0 00-.619-.647v.003h-1.38l-3.536-9.933c.21-.364.32-.821.32-1.376 0-.759-.197-1.344-.592-1.742-.378-.38-.924-.574-1.622-.574-.697 0-1.24.193-1.619.574-.389.395-.588.98-.588 1.74 0 .554.11 1.014.32 1.375L6.4 17.625H5.073c-.342 0-.62.291-.62.647v2.77c0 .359.278.647.62.647h13.56c.342 0 .62-.291.62-.647v-2.77zm-8.188-12.77c-.173.179-.213.54-.213.812s.037.633.21.81c.183.181.555.21.762.21.255 0 .594-.037.768-.213.177-.174.213-.535.213-.807s-.037-.633-.213-.813c-.174-.176-.513-.212-.765-.212-.252.002-.59.039-.762.212zM7.72 17.621l3.246-9.123c.255.08.538.126.857.126.323 0 .611-.048.866-.126l3.252 9.123h-1.154l-2.375-6.639a.033.033 0 00-.006-.01 1.187 1.187 0 01-.076-.127l-.023-.036a.31.31 0 00-.04-.056c-.016-.015-.034-.028-.052-.04a.535.535 0 01-.036-.025.832.832 0 01-.037-.025c-.025-.019-.05-.036-.078-.048a.033.033 0 01-.01-.005.033.033 0 00-.01-.006.157.157 0 00-.053-.011c-.013-.001-.026-.002-.039-.006a.434.434 0 00-.12-.02c-.045 0-.088.01-.133.021l-.007.002a.235.235 0 01-.03.004.154.154 0 00-.049.01l-.005.005a.499.499 0 00-.106.067l-.015.01-.01.008a.418.418 0 01-.033.023.24.24 0 00-.049.038.545.545 0 00-.055.078l-.01.015a.452.452 0 00-.07.117c0 .005-.003.008-.005.01l-.006.01-2.347 6.636H7.72zm3.448-2.68l.664-1.88.675 1.88h-1.339zm6.846 3.974v1.48H5.689v-1.48h12.325zm-5.417-1.291h.868l-.499-1.39h-2.255l-.49 1.39h2.376zM6.232 9.056c.12.123.275.182.43.182a.621.621 0 00.447-.196.67.67 0 00-.017-.913c-.386-.39-.582-1-.582-1.815s.196-1.426.582-1.818a.667.667 0 00.014-.913.6.6 0 00-.874-.017c-.638.644-.96 1.569-.96 2.745 0 1.18.322 2.104.96 2.745zm10.331-.927a.667.667 0 00-.017.913.63.63 0 00.446.199.603.603 0 00.428-.18c.639-.644.964-1.565.964-2.744 0-1.177-.322-2.101-.961-2.745a.597.597 0 00-.874.014.668.668 0 00.014.915c.39.39.585 1.003.585 1.816 0 .812-.198 1.423-.585 1.812z"
      ></path>
    </svg>
  );
};

AntennaRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AntennaRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AntennaRegular;
