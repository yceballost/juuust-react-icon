import React from 'react';
import PropTypes from 'prop-types';

const ShopLight = props => {
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
        d="M21.388 12.802c.798-.383 1.312-.999 1.312-1.714 0-.433-.191-.844-.556-1.196-.139-.223-.482-1.375-.664-1.984l-.017-.058c-.096-.33-.18-.61-.233-.766l-1.345-3.965c-.125-.372-.51-.624-.917-.619L5.42 2.536c-.415.003-.78.247-.911.613-.185.547-.457 1.36-.75 2.24-.592 1.778-1.405 4.211-1.51 4.436-.045.1-.105.189-.165.277l-.02.028-.004.006c-.16.238-.36.533-.36.952 0 .715.514 1.334 1.309 1.714v7.747c0 .799.726 1.451 1.62 1.451h15.143c.89 0 1.616-.652 1.616-1.451v-7.747zm.44-1.712c0 .708-1.067 1.307-2.331 1.307-.84-.003-1.623-.266-2.044-.7a.54.54 0 00-.383-.154h-.003l-.253.027-.129.13c-.418.428-1.201.692-2.04.692-.84 0-1.623-.264-2.042-.691a.537.537 0 00-.382-.158l-.257.025-.132.133c-.418.427-1.2.69-2.04.69-.849 0-1.635-.266-2.05-.699a.54.54 0 00-.392-.163l-.26.027-.131.136c-.415.43-1.201.7-2.05.7-1.264 0-2.33-.597-2.33-1.307 0-.178.083-.305.23-.522a2.88 2.88 0 00.25-.419c.114-.247.712-2.028 1.542-4.517l.264-.788.483-1.44c.012-.03.045-.05.081-.05l13.545-.036c.036 0 .069.022.08.053L20.4 7.328c.051.147.132.419.224.735.505 1.698.685 2.187.879 2.375l.003.003c.146.142.323.366.323.65zm-1.315 2v7.459c.003.352-.332.638-.741.638h-4.766V16.24c0-.58-.526-1.052-1.175-1.052h-3.245c-.645 0-1.17.472-1.17 1.052v4.947h-4.79c-.41 0-.745-.289-.745-.64V13.09c.323.07.66.116 1.02.116.955 0 1.84-.272 2.44-.738.601.466 1.488.738 2.442.738.95 0 1.831-.266 2.429-.727.6.461 1.479.727 2.426.727.947 0 1.829-.266 2.43-.727.6.458 1.479.727 2.426.727a4.84 4.84 0 001.019-.116zm-6.383 8.097V16.24c0-.133-.134-.241-.299-.241h-3.239c-.164 0-.298.108-.298.24v4.948h3.836z"
      ></path>
    </svg>
  );
};

ShopLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShopLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShopLight;
