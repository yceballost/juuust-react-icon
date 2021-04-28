import React from 'react';
import PropTypes from 'prop-types';

const CertificateRegular = props => {
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
        d="M19.287 7.997a.61.61 0 00-.047-.238.815.815 0 00-.213-.384l-5.21-5.123A.866.866 0 0013.209 2h-7.3c-.725 0-1.387.658-1.387 1.384v5.65l.04 7.972-.04 3.296c0 .737.65 1.384 1.387 1.384h11.992c.75 0 1.386-.633 1.386-1.384V7.997zm-1.384 12.474c.096 0 .19-.096.19-.169V8.868h-2.276c-.998 0-1.86-.33-2.493-.952-.64-.63-.978-1.487-.978-2.482V3.216H5.912c-.073 0-.185.109-.19.168V9.03l.039 7.977-.04 3.3c0 .05.098.16.19.16h11.992v.003zM17.59 7.653l-.003-.003h.003v.003zm-.003-.003h-1.773c-.68 0-1.258-.21-1.664-.61-.4-.396-.614-.95-.614-1.609V3.667l4.05 3.983zm-2.661 9.91l.644.241-1.112-2.456c-.44.372-1.011.593-1.703.672l1.16 2.563.24-.664a.605.605 0 01.77-.356zm-3.588-1.568l-1.174 2.59-.244-.663a.602.602 0 00-.767-.356l-.647.244 1.182-2.61c.412.422.969.683 1.65.795zm.823-5.86c-1.74 0-2.515.79-2.515 2.56s.776 2.557 2.515 2.557c1.74 0 2.516-.79 2.516-2.557 0-1.77-.776-2.56-2.516-2.56zm4.333 7.776l-1.45-3.208-.013-.018a.126.126 0 01-.007-.01c.291-.512.45-1.165.45-1.977 0-2.294-1.22-3.37-3.313-3.37-2.092 0-3.31 1.076-3.31 3.37 0 .689.12 1.257.333 1.73a.473.473 0 01-.022.029.239.239 0 00-.04.059l-1.538 3.395a.614.614 0 00.079.638c.142.18.375.26.647.196l.935-.35.37 1a.598.598 0 00.53.325h.016a.597.597 0 00.53-.353l1.35-2.983 1.35 2.983a.6.6 0 00.53.353h.016c.221 0 .423-.123.549-.372l.35-.953.983.367a.602.602 0 00.597-.213.614.614 0 00.078-.638zm-4.88-5.541l-.543.087.452.406a.38.38 0 01.095.31l-.101.628.437-.288a.198.198 0 00.02-.014.198.198 0 01.019-.014l.003-.003a.334.334 0 01.356.017l.459.255-.11-.58a.388.388 0 01.099-.314l.428-.442-.574-.056a.355.355 0 01-.258-.19l-.269-.578-.201.572a.348.348 0 01-.311.204zm-1.002.532l.314.322-.07.47a.663.663 0 00.263.653.626.626 0 00.678.04l.372-.207.37.207a.634.634 0 00.675-.04.675.675 0 00.266-.655l-.075-.462.314-.325a.678.678 0 00.154-.683.647.647 0 00-.516-.443l-.42-.065-.193-.414c-.219-.465-.947-.465-1.16 0l-.19.409-.42.064a.646.646 0 00-.516.446.68.68 0 00.154.683z"
      ></path>
    </svg>
  );
};

CertificateRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CertificateRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CertificateRegular;
