import React from 'react';
import PropTypes from 'prop-types';

const CookingLight = props => {
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
        d="M4.24 7.859c.05.173.202.285.37.285.034 0 .07-.005.1-.016L18.972 4.02a.39.39 0 00.267-.482.386.386 0 00-.474-.269l-5.146 1.48s-.039-.194-.084-.348c-.249-.865-1.039-1.737-2.456-1.33-1.415.408-1.65 1.582-1.418 2.459l.045.162c.014.042.034.101.062.171l-5.26 1.513a.392.392 0 00-.267.482zm7.05-4.034c-1.036.297-1 1.07-.884 1.504l.036.135.003.01c.013.039.039.116.064.172l2.404-.692s-.065-.182-.107-.333c-.126-.423-.482-1.096-1.515-.796zm10.547 12.022c0-1.498-1.037-2.044-1.924-2.05h-.003l-.219-.011c.003-.093.003-1.093.003-1.395.087-.059.16-.118.219-.174.226-.224.495-.627.495-1.308 0-.678-.269-1.084-.495-1.305a1.576 1.576 0 00-.704-.398c-.078-.658-.358-1.067-.599-1.305-.392-.387-.924-.583-1.583-.583-.66 0-1.19.199-1.585.583a2.29 2.29 0 00-.232.285c-.522.02-.959.168-1.306.443a2.33 2.33 0 00-.837-.143c-.384 0-.69.073-.933.18l-.005-.007a.966.966 0 00-.085-.092c-.235-.232-.67-.51-1.375-.51-.706 0-1.14.28-1.376.513a.335.335 0 01-.03.034 2.1 2.1 0 00-.328-.025c-.633 0-1.02.249-1.235.462a1.608 1.608 0 00-.115.126 1.673 1.673 0 00-.939.378c-.028-.003-.053-.003-.075-.003-.546 0-.894.213-1.093.4-.554.01-.902.233-1.092.424-.205.199-.445.566-.445 1.17v.381c0 .208.078.41.224.555.014.016.032.027.051.038a.303.303 0 01.041.027v1.15l.001.058.002.058c-.065-.009-.112-.009-.177-.009h-.002c-.888.006-1.925.55-1.925 2.05 0 1.5 1.042 2.048 1.933 2.062l.162-.003c.057 0 .143-.005.283-.025l.196-.011c.589 1.964 1.838 3.134 4.345 3.134.185 0 .356-.008.501-.02h4.78c.167.012.338.023.52.023s.353-.008.499-.02h.224c.05 0 .1-.01.146-.033 1.958-.244 2.977-1.356 3.484-3.081.123.011.457.036.51.036l.162.003c.894-.014 1.936-.563 1.936-2.062zm-3.165-3.95c.305 0 .543-.08.708-.243.171-.168.258-.417.258-.742 0-.322-.087-.572-.258-.743-.165-.162-.403-.243-.708-.243h-.043c-.077.002-.16.004-.181-.037-.024-.044-.013-.1-.001-.166.008-.046.017-.096.017-.15 0-.48-.128-.852-.386-1.1-.247-.242-.597-.365-1.05-.365-.454 0-.807.123-1.048.364a1.133 1.133 0 00-.266.423c-.011.034-.02.056-.053.078-.061.04-.13.028-.206.016-.04-.006-.08-.013-.122-.013-.451 0-.804.12-1.05.362a1.098 1.098 0 00-.191.257c-.011.023-.014.028-.037.031-.02 0-.028-.005-.044-.022-.219-.216-.538-.325-.944-.325-.406 0-.723.109-.944.325-.04.04-.07.09-.1.142l-.032.054s-.045.059-.126.036c-.062-.014-.087-.087-.087-.087-.04-.246-.115-.462-.266-.607-.196-.19-.482-.292-.843-.292-.364 0-.647.101-.843.292a.904.904 0 00-.166.238l-.008.02s-.042.06-.112.083a.229.229 0 01-.129.006c-.036-.011-.071-.024-.107-.037a1.05 1.05 0 00-.372-.08c-.302 0-.54.08-.703.243a.563.563 0 00-.09.121c-.034.057-.068.113-.14.159a.35.35 0 01-.204.056c-.303 0-.538.081-.703.244l-.017.017c-.056.056-.111.112-.188.142-.065.025-.112.015-.17.003a.648.648 0 00-.149-.02c-.252 0-.448.068-.583.202a.435.435 0 00-.06.084c-.03.045-.056.09-.113.115-.06.029-.122.02-.192.01a.848.848 0 00-.128-.013c-.249 0-.445.07-.58.205-.14.14-.212.342-.212.608v.38l3.092-.019h2.235a.172.172 0 00.04-.006c.012-.003.024-.005.036-.005h1.56a.298.298 0 01.031.005.218.218 0 00.048.006h2.207l1.384-.006h3.339v-.005zm1.22 5.23c.44-.005 1.18-.181 1.18-1.277 0-1.095-.728-1.266-1.162-1.269l-.233-.01c-.03.926-.106 1.775-.252 2.531.081.009.297.026.334.026h.134zm-.968-4.422c-.003.43-.003 1.064-.003 1.134-.037 4.375-.952 6.095-3.375 6.35a.367.367 0 00-.076.017h-.12a7.45 7.45 0 01-.97 0H9.551l-.088.005c-.125.007-.252.015-.385.015-3.006 0-4.028-1.653-4.048-6.535v-.986h13.894zM4.403 17.113l.033-.001a.786.786 0 00.107-.01c-.157-.778-.233-1.574-.264-2.532a1.847 1.847 0 01-.187.008c-.434.003-1.163.174-1.163 1.27 0 1.095.737 1.271 1.177 1.277h.137c.04 0 .093-.003.16-.012z"
      ></path>
    </svg>
  );
};

CookingLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CookingLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CookingLight;
