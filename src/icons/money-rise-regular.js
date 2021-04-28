import React from 'react';
import PropTypes from 'prop-types';

const MoneyRiseRegular = props => {
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
        d="M14.122 6.45a.757.757 0 00.686.445l1.149.011.002 1.978a1.1 1.1 0 001.093 1.106h1.717c.602 0 1.093-.496 1.093-1.11l-.003-1.977 1.145-.008c.297 0 .56-.17.69-.445.128-.275.089-.605-.138-.883l-3.05-3.131a1.111 1.111 0 00-.115-.115.736.736 0 00-.56-.166c-.202.023-.384.127-.465.236l-3.143 3.215a.807.807 0 00-.101.844zM2.887 7.455c0-.344.277-.624.616-.624h.375a4.144 4.144 0 00-.013-.165 2.718 2.718 0 01-.018-.27c0-.02.003-.04.005-.06a.555.555 0 00.004-.06H3.5a.62.62 0 01-.616-.625c0-.344.277-.624.616-.624h.516C4.453 3.223 5.8 2.234 7.948 2.234c.804 0 1.505.137 2.084.412a.632.632 0 01.3.832.614.614 0 01-.818.305c-.417-.196-.944-.297-1.566-.297-1.428 0-2.294.499-2.66 1.54h2.036a.62.62 0 01.616.625.622.622 0 01-.616.625H5.088c0 .02-.002.04-.004.06-.002.02-.004.04-.004.06 0 .104.008.2.015.295l.01.14h2.219a.62.62 0 01.616.624.622.622 0 01-.616.625h-1.9c.423.823 1.247 1.227 2.524 1.227.63 0 1.16-.101 1.58-.303a.614.614 0 01.82.3.631.631 0 01-.293.835c-.586.28-1.294.423-2.107.423-2.022 0-3.344-.872-3.857-2.477h-.59a.628.628 0 01-.614-.63zm15.028-3.851l-2.003 2.05.52.006a.774.774 0 01.762.81l.004 2.27h1.431l-.003-2.293a.763.763 0 01.21-.54.757.757 0 01.538-.247l.538-.006-1.997-2.05zm2.08 16.748c.53-.16.609-.325.609-.325v-.852a2.029 2.029 0 01-.25.098c-.605.185-1.386.286-2.204.286-.818 0-1.6-.101-2.204-.286a1.975 1.975 0 01-.19-.07c-.021-.01-.043-.02-.065-.028v.854c.01.023.103.171.605.325.977.297 2.714.297 3.7-.002zm-5.545-.311c-.09.086-.283.215-.602.313-.975.297-2.718.297-3.7.003-.354-.11-.536-.235-.614-.308v-.913l.085.035c.056.023.112.047.175.066.605.185 1.387.285 2.205.285.818 0 1.602-.1 2.204-.285.058-.018.11-.04.16-.061l.087-.035v.9zm-6.754.313c.342-.103.521-.238.605-.319v-.885l-.093.037c-.05.02-.099.04-.156.058-.602.185-1.387.286-2.205.286-.817 0-1.602-.101-2.204-.286-.063-.019-.12-.042-.176-.066l-.085-.035v.9c.076.075.258.198.617.308.98.302 2.722.3 3.697.002zm-4.16-2.504c.093-.059.227-.126.457-.196.98-.3 2.72-.3 3.7 0 .233.073.37.143.46.199-.095.059-.241.126-.457.193-.98.3-2.717.297-3.697 0a1.865 1.865 0 01-.462-.196zm6.608-2.515a2.012 2.012 0 00-.453.193c.09.059.224.129.459.199.98.297 2.723.297 3.697 0 .219-.067.362-.135.457-.193a1.69 1.69 0 00-.46-.2c-.977-.296-2.72-.296-3.7 0zm5.695-2.082c.092-.058.232-.126.454-.193.983-.302 2.72-.3 3.703 0 .232.073.37.14.46.2a1.98 1.98 0 01-.457.192c-.98.3-2.72.297-3.698 0a1.72 1.72 0 01-.462-.198zm-.151 3.605v.914c.078.075.263.199.61.302.984.3 2.718.3 3.7 0 .326-.1.519-.232.606-.32v-.896l-.076.032c-.056.024-.111.047-.173.067-.6.182-1.384.285-2.205.285-.82 0-1.602-.1-2.204-.285a1.636 1.636 0 01-.166-.062 2.276 2.276 0 00-.092-.037zm.08-2.273c.055.024.111.048.175.066.605.182 1.386.283 2.204.283.818 0 1.6-.1 2.205-.286.069-.02.127-.045.187-.07l.062-.025v.885c-.081.082-.263.216-.605.32-.978.3-2.717.3-3.698 0-.358-.11-.537-.233-.616-.308v-.9l.085.035zm-6.234 3.142c.078.075.26.199.616.308.983.297 2.717.3 3.697 0 .34-.104.519-.233.6-.317v-.887c-.03.01-.058.022-.086.034-.051.021-.103.043-.16.06-.6.186-1.384.287-2.205.287-.82 0-1.602-.101-2.205-.286a2.312 2.312 0 01-.175-.067 4.457 4.457 0 00-.085-.034v.902h.003zm12.302-4.336c0-.49-.258-1.154-1.487-1.53-1.205-.37-3.205-.37-4.412.006-.801.244-1.283.639-1.437 1.174-.034.112-.05.232-.05.352v.84a2.577 2.577 0 00-.25-.092c-1.201-.37-3.207-.37-4.411 0-.801.244-1.286.64-1.437 1.174-.034.112-.05.23-.05.353v.882a4.952 4.952 0 01-.064-.024c-.06-.023-.12-.047-.189-.068-1.204-.367-3.207-.367-4.412 0-.8.244-1.285.639-1.44 1.174v.002c-.03.113-.047.233-.047.35v2.311c0 .2.095.367.238.482.255.33.678.597 1.255.773.6.185 1.384.286 2.204.286.821 0 1.606-.1 2.205-.286.333-.103.622-.246.86-.417.235.168.53.31.882.417.602.185 1.384.286 2.205.286.82 0 1.605-.1 2.204-.286.334-.103.625-.246.863-.417.216.157.493.303.871.417.605.185 1.387.286 2.205.286.817 0 1.602-.1 2.207-.286 1.23-.375 1.487-1.039 1.487-1.529v-6.63z"
      ></path>
    </svg>
  );
};

MoneyRiseRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoneyRiseRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoneyRiseRegular;
