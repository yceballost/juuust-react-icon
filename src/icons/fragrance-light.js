import React from 'react';
import PropTypes from 'prop-types';

const FragranceLight = props => {
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
        d="M20.206 13.798c0 2.507-.966 4.468-2.793 5.726.247.227.404.552.404.913 0 .69-.56 1.25-1.25 1.25H7.47c-.69 0-1.25-.56-1.25-1.25 0-.37.165-.698.42-.927-1.411-.97-2.84-2.695-2.84-5.712 0-3.602 2.25-5.77 4.992-6.692V3.944C8.792 2.871 9.666 2 10.736 2h2.182c1.073 0 1.944.871 1.944 1.944V6.98c3.353.958 5.344 3.482 5.344 6.818zM9.612 6.868V3.944c0-.62.505-1.126 1.124-1.126h2.182c.622 0 1.126.504 1.126 1.126v2.854a10.65 10.65 0 00-2.042-.213c-.796 0-1.605.096-2.39.283zm6.796 12.32c1.95-1.07 2.98-2.93 2.98-5.39 0-4.386-3.53-5.736-5.047-6.112a9.741 9.741 0 00-2.34-.28c-.882 0-1.778.123-2.63.376l-.022.007-.022.007c-2.566.773-4.706 2.72-4.706 6.002 0 2.423 1.05 4.28 3.036 5.376a.074.074 0 00.017.014h8.734zm.162 1.68a.43.43 0 000-.86h-9.1a.43.43 0 000 .86h9.1zm-1.459-8.431v2.905c0 .518-.42.938-.936.938H9.582a.938.938 0 01-.936-.938v-2.905c0-.515.42-.936.936-.936h4.593c.516 0 .936.42.936.936zm-.936-1.756c.97 0 1.757.787 1.757 1.753v2.905c0 .97-.787 1.756-1.757 1.756H9.582c-.97 0-1.757-.787-1.757-1.756v-2.905c0-.969.787-1.753 1.757-1.753h4.593zM12.5 5.339a.466.466 0 11.002-.931.466.466 0 01-.002.93zm1.286-.465a1.285 1.285 0 11-2.567.001 1.285 1.285 0 012.567-.001zm2.221-.656a.407.407 0 00.58 0l.818-.817a.41.41 0 00-.58-.58l-.818.818a.41.41 0 000 .58zm.202.634c0-.227.182-.41.409-.41h1.496c.227 0 .409.183.409.41a.408.408 0 01-.41.409h-1.495a.41.41 0 01-.409-.41zm.426.677a.408.408 0 10-.577.58l.863.866a.4.4 0 00.288.12.41.41 0 00.288-.7l-.862-.866zm-6.07 7.908a.41.41 0 010-.818h2.624c.227 0 .41.182.41.409a.408.408 0 01-.41.409h-2.624zm4.022 1.213a.408.408 0 00-.409-.41h-4.6a.408.408 0 00-.408.41c0 .227.182.409.409.409h4.6a.408.408 0 00.408-.41z"
      ></path>
    </svg>
  );
};

FragranceLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FragranceLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FragranceLight;
