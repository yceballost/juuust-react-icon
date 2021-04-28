import React from 'react';
import PropTypes from 'prop-types';

const OutgoingCallLight = props => {
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
        d="M21.846 17.647c-.017-.921-.457-1.82-1.305-2.67a4.91 4.91 0 00-1.037-.806c-.753-.468-1.535-.638-2.33-.504-.773.132-1.524.555-2.23 1.26a4.908 4.908 0 00-.336.362c-.118-.034-.359-.13-.768-.41-.815-.56-1.792-1.512-2.459-2.176l-.081-.08c-.667-.668-1.62-1.65-2.174-2.46-.28-.412-.378-.65-.409-.768.126-.103.247-.215.361-.333.704-.706 1.13-1.457 1.26-2.233.135-.792-.033-1.577-.495-2.322a5.226 5.226 0 00-.818-1.042c-.849-.848-1.748-1.288-2.67-1.305-.963-.003-1.901.414-2.814 1.288-.307.294-.59.68-.73.872l-.021.028c-.843 1.224-.84 3.072.011 5.21.857 2.145 2.516 4.487 4.796 6.767l.016.017.065.064c2.277 2.28 4.619 3.942 6.767 4.796 1.073.428 2.068.644 2.961.644.885 0 1.642-.213 2.227-.619l.076-.053c.148-.107.546-.395.846-.709.876-.916 1.308-1.863 1.29-2.818zm-.82.017c.01.731-.345 1.482-1.065 2.235-.247.258-.614.524-.773.64-.986.68-2.583.643-4.44-.099-2.045-.812-4.289-2.409-6.496-4.616l-.07-.07-.014-.014c-2.196-2.2-3.787-4.443-4.602-6.482-.748-1.874-.782-3.451-.073-4.473.182-.267.39-.513.616-.74.737-.706 1.474-1.064 2.19-1.064h.043c.703.014 1.412.372 2.103 1.064.27.263.505.56.698.885.361.577.493 1.168.392 1.76-.104.602-.451 1.204-1.034 1.786a4.29 4.29 0 01-.44.393.4.4 0 00-.103.123c-.19.336-.028.871.493 1.636.594.865 1.58 1.885 2.272 2.577l.08.078c.687.69 1.704 1.675 2.575 2.272.765.524 1.297.689 1.636.496a.403.403 0 00.118-.101c.123-.157.255-.305.395-.443.582-.582 1.185-.932 1.787-1.033.594-.098 1.185.033 1.773.397.32.19.613.423.874.69.692.691 1.05 1.4 1.064 2.103zM13.977 8.41c-.107.081-.157.165-.168.264a.36.36 0 00.084.282l.946 1.054c.087.112.18.162.28.17a.333.333 0 00.261-.09l2.54-2.184a.407.407 0 01.572.036l.557.617c.031.036.104.092.18.073.084-.026.112-.115.12-.152l.807-3.776a.22.22 0 00-.045-.201.229.229 0 00-.174-.073h-.02l-3.831.291c-.048.003-.135.023-.165.098-.031.079.02.151.05.185l.549.61a.412.412 0 01-.034.583c.003.003-2.51 2.213-2.51 2.213zm-.692 1.095l.924 1.026c.202.269.507.44.843.468.325.033.647-.079.883-.3l2.218-1.908.283.322c.25.283.636.406 1.003.314a1 1 0 00.711-.773l.807-3.776a1.038 1.038 0 00-1.022-1.272l-.087.003-3.83.297a.995.995 0 00-.862.61c-.137.348-.059.746.204 1.04l.275.302-2.171 1.91a1.178 1.178 0 00-.18 1.737z"
      ></path>
    </svg>
  );
};

OutgoingCallLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OutgoingCallLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OutgoingCallLight;
