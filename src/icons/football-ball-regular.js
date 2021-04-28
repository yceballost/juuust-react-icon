import React from 'react';
import PropTypes from 'prop-types';

const FootballBallRegular = props => {
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
        d="M12.017 2c.103 0 .204 0 .305.003 1.978.028 9.392.742 9.39 9.874 0 9.115-7.345 9.792-9.323 9.81h-.196c-.252 0-.51-.004-.736-.01-1.928-.044-9.432-.806-9.432-9.86 0-9.072 7.516-9.775 9.395-9.811.18-.003.387-.006.597-.006zm0 1.23c-.2 0-.398.002-.572.005-.549.012-1.263.07-2.036.233l1.846 1.339c.353.266.89.26 1.227.005l1.863-1.353a10.926 10.926 0 00-2.043-.227l-.285-.002zm.18 17.224h.184c.303 0 .653-.017 1.034-.056l.016-.085c.009-.049.017-.096.031-.142l.835-2.566c.081-.266.227-.515.409-.74l-.535-.873c-.291.134-.61.212-.947.212H10.49c-.353 0-.68-.095-.983-.246l-.583.88c.177.218.317.464.4.73l.833 2.564c.013.038.02.078.026.12.005.027.009.056.016.084.482.067.924.1 1.291.11.216.005.465.008.706.008zm3.27-2.476l-.71 2.184c1.51-.37 3.193-1.176 4.341-2.901h-2.633a1.134 1.134 0 00-.62.198 1.015 1.015 0 00-.377.519zM4.7 17.218h2.476c.205 0 .418.07.597.202.182.132.317.317.381.527l.684 2.106c-1.457-.412-3.031-1.227-4.138-2.835zm4.821-2.963l-.14-.423-.698-2.154a1.045 1.045 0 01.384-1.177l2.194-1.593a1.07 1.07 0 011.23.005l2.187 1.591c.372.27.526.74.384 1.177l-.835 2.566a1.055 1.055 0 01-1.003.73h-2.723a1.036 1.036 0 01-.98-.722zm9.235-3.947l1.715 1.247c-.048-2.126-.541-3.717-1.28-4.908l-.807 2.49c-.073.21-.073.437-.003.65.07.216.204.4.375.521zm-3.005-6.434a7.06 7.06 0 012.605 1.709c-.132.187-.241.389-.311.61l-.832 2.56c-.093.272-.123.56-.104.85l-1.154.484a2.235 2.235 0 00-.557-.58l-2.18-1.583a2.073 2.073 0 00-.733-.341V6.15c.266-.073.515-.187.725-.347l2.182-1.586c.129-.09.231-.203.332-.314l.027-.03zm-7.72.038l-.028-.032c-.919.35-1.835.89-2.616 1.703.109.168.204.347.266.54l.832 2.566c.092.272.123.566.1.86l1.194.552c.151-.227.339-.434.571-.6l2.182-1.585c.213-.16.462-.269.726-.339V6.148a2.146 2.146 0 01-.734-.352l-2.177-1.58c-.12-.087-.218-.197-.315-.304zM4.539 6.68l.779 2.403c.07.199.067.426-.003.641-.07.213-.202.398-.381.527l-1.656 1.205c.05-2.065.535-3.617 1.26-4.776zm-.485 9.341c.126-.022.255-.036.387-.036v.003h2.714a2.19 2.19 0 01.77.137l.664-1.003c-.007-.011-.015-.02-.024-.03l-.023-.031h-.05l-.976-3.003a2.228 2.228 0 01-.109-.773l-1.23-.569a2.262 2.262 0 01-.526.532l-2.177 1.583c-.03.021-.062.038-.094.054a.902.902 0 00-.065.036c.098 1.22.361 2.24.74 3.1zm15.123.006h-2.73c-.247 0-.496.048-.732.129l-.596-.97c.114-.17.213-.358.277-.56l.835-2.565c.087-.266.117-.535.109-.801l1.17-.493c.15.212.326.397.53.543l2.182 1.588c.041.03.087.054.133.078l.075.04c-.098 1.216-.359 2.23-.726 3.081a2.208 2.208 0 00-.527-.07z"
      ></path>
    </svg>
  );
};

FootballBallRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FootballBallRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FootballBallRegular;
