import React from 'react';
import PropTypes from 'prop-types';

const TeddyBearLight = props => {
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
        d="M20.542 17.871c-.003 0-.003-.061-.003-.061-.014-.706-.23-1.21-.647-1.608a2.037 2.037 0 00-.412-.286c1.034-.924 1.6-2.448.157-4.067-.602-.675-2.182-1.583-2.851-1.723-.023-.002-.087-.022-.087-.022.297-.714.468-1.555.468-2.507a7.75 7.75 0 00-.09-1.171l.024-.004a.475.475 0 00.133-.032 1.9 1.9 0 00.289-.196l.137-.113c.753-.635 1.255-1.8.182-3.005-1.076-1.205-2.35-.916-3.118-.303-.025.02-.043.046-.06.071l-.007.01c-.852-.445-1.888-.686-3.115-.691V2.16H11.5v.003c-1.227.005-2.266.243-3.115.692-.02-.028-.04-.056-.067-.082-.768-.613-2.042-.904-3.118.303-1.07 1.204-.571 2.372.185 3.005l.137.113c.05.039.126.095.2.14.016.014.054.035.08.05l.012.006c.047.024.102.03.154.036h.003a7.76 7.76 0 00-.09 1.17c0 .953.168 1.794.468 2.508 0 0-.067.02-.087.022-.672.138-2.25 1.048-2.852 1.723-1.442 1.619-.876 3.143.157 4.067a2.036 2.036 0 00-.412.286c-.423.398-.641.9-.655 1.608v.061s.003.082.014.138c.014.078.048.232.053.249l.661 2.482c0 .004.004.008.007.012.003.003.006.006.007.01l.007.027c.004.014.007.03.016.043.092.174.215.328.355.46.395.366.95.551 1.645.551.694 0 1.249-.184 1.644-.549.325-.297.518-.694.594-1.179v-.003c1.03.642 2.342.961 3.991.961h.054c1.65 0 2.963-.32 3.991-.96v.002c.073.488.27.885.591 1.18.398.363.95.548 1.647.548.695 0 1.247-.184 1.645-.551.14-.13.263-.286.355-.46a.13.13 0 00.015-.043.195.195 0 01.008-.027c.001-.004.004-.008.007-.011l.007-.011.66-2.482.013-.056c.014-.056.034-.141.041-.193.011-.054.014-.138.014-.138zm-9.02-14.846c-1.512.006-2.686.381-3.487 1.12-.83.771-1.252 1.93-1.252 3.452 0 1.52.423 2.678 1.252 3.445.72.664 1.762 1.017 3.07 1.084V8.771a1.415 1.415 0 01-.644-.331 1.157 1.157 0 01-.345-.546 1.13 1.13 0 01-.025-.235.393.393 0 01.041-.197l.004-.008c.07-.151.162-.288.286-.4.268-.247.635-.373 1.08-.39V6.66l.013.001.007.001.012-.001.01-.001v.005c.443.017.81.14 1.082.39.123.114.213.249.286.4l.003.008a.393.393 0 01.042.197 1.13 1.13 0 01-.026.235c-.058.215-.182.4-.341.546a1.415 1.415 0 01-.645.33v3.356c1.306-.07 2.35-.423 3.068-1.084.832-.767 1.254-1.924 1.254-3.445s-.422-2.68-1.254-3.451c-.804-.74-1.978-1.118-3.49-1.12zm-4.112.502c-.582.54-.983 1.24-1.232 2.061l-.041-.028-.04-.028-.115-.095c-.362-.302-.855-.941-.09-1.798.692-.782 1.359-.546 1.745-.277a1.366 1.366 0 01-.1.072 1.03 1.03 0 00-.127.093zm.695 3.6c-.118-.11-.18-.272-.18-.485 0-.213.06-.378.18-.488.115-.106.28-.16.496-.16.213 0 .38.054.496.16.117.11.179.275.179.488 0 .213-.062.375-.18.484-.114.107-.282.16-.495.16-.213 0-.378-.056-.496-.16zm6.339.159c-.213 0-.381-.053-.496-.16-.12-.109-.18-.271-.18-.484 0-.213.06-.376.18-.485.115-.106.283-.162.496-.162.213 0 .38.053.496.162.12.11.179.272.179.485 0 .213-.062.375-.18.484-.117.107-.285.16-.495.16zm5.188 10.445c.002.028.008.101.002.157a.573.573 0 01-.039.165c-.173.611-.638 2.407-.638 2.407a.942.942 0 01-.166.212c-.221.208-.563.311-1.017.311-.453 0-.8-.106-1.022-.31-.232-.21-.347-.544-.35-.986l.18-1.692c0-.009.003-.017.006-.026a.11.11 0 00.007-.033 1.12 1.12 0 01.014-.174l.023-.221c.053-.306.17-.546.355-.717.25-.233.633-.35 1.135-.35.501 0 .882.114 1.131.347.23.213.345.49.379.91zm-3.838-.526c.104-.4.289-.743.572-1.003.215-.196.476-.345.773-.445.033-.306.061-.62.061-.953 0-1.546-.375-2.779-1.109-3.678l-.069.088c-.121.156-.241.31-.387.447-.967.891-2.348 1.342-4.09 1.35v.003l-.011-.001-.012-.002-.007.002-.012.001v-.002c-1.748-.009-3.123-.46-4.093-1.35a3.792 3.792 0 01-.39-.45 16.861 16.861 0 00-.066-.086c-.734.9-1.11 2.132-1.11 3.678 0 .333.026.647.062.953.3.098.558.249.773.445.283.26.465.602.569 1.003.022.042.04.087.045.134l.005.048c.007.029.01.06.012.09.002.024.004.047.008.07l.151 1.445c.933.815 2.25 1.218 4.028 1.218h.006v-.003h.042v.003h.005c1.78 0 3.096-.403 4.028-1.218l.155-1.445.007-.07a.711.711 0 01.012-.09l.006-.048a.285.285 0 01.036-.134zM6.64 19.687c-.003.442-.12.775-.35.985-.224.205-.569.309-1.022.309-.454 0-.796-.104-1.02-.311a.899.899 0 01-.165-.213s-.468-1.796-.639-2.406a.788.788 0 01-.036-.163.9.9 0 01.002-.157c.034-.417.149-.697.379-.91.249-.23.63-.347 1.131-.347.502 0 .883.117 1.135.35.184.17.3.411.355.717l.023.221.004.04c.005.043.01.087.01.134 0 .012.003.023.006.035l.005.024.182 1.691zm-2.543-7.278c-1.297 1.457-.322 2.546.156 2.95a4.751 4.751 0 00.367.274l.089-.008c.069-.007.136-.014.208-.014.014 0 .027.001.04.003l.039.002-.012-.13c-.02-.223-.039-.445-.039-.682 0-1.437.311-2.639.894-3.608-.577.292-1.375.801-1.742 1.213zM15.41 3.36c.387-.27 1.05-.504 1.745.277.765.86.27 1.499-.09 1.798l-.114.096a2.26 2.26 0 00-.084.056c-.25-.821-.65-1.521-1.233-2.062-.038-.035-.081-.064-.125-.094a1.426 1.426 0 01-.099-.071zm3.535 9.05c-.364-.412-1.162-.921-1.74-1.21.586.97.894 2.171.894 3.608 0 .256-.023.497-.046.738l-.007.074a.344.344 0 00.04-.002.344.344 0 01.039-.003c.076 0 .145.007.213.014l.084.008c.075-.05.145-.098.19-.134l.18-.14c.478-.407 1.45-1.499.153-2.953z"
      ></path>
    </svg>
  );
};

TeddyBearLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TeddyBearLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TeddyBearLight;
