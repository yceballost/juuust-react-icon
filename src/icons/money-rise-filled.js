import React from 'react';
import PropTypes from 'prop-types';

const MoneyRiseFilled = props => {
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
        d="M14.122 6.45a.757.757 0 00.686.445l1.149.011.002 1.978a1.1 1.1 0 001.093 1.106h1.717c.602 0 1.093-.496 1.093-1.11l-.003-1.977 1.145-.008c.297 0 .56-.17.69-.445.128-.275.089-.605-.138-.883l-3.05-3.131a1.111 1.111 0 00-.115-.115.736.736 0 00-.56-.166c-.202.023-.384.127-.465.236l-3.143 3.215a.807.807 0 00-.101.844zm-10.62.38A.628.628 0 003.5 8.086h.592c.513 1.605 1.835 2.477 3.857 2.477.813 0 1.521-.143 2.107-.423a.631.631 0 00.294-.835.614.614 0 00-.82-.3c-.421.202-.95.303-1.58.303-1.278 0-2.102-.404-2.524-1.227h1.899c.339 0 .616-.28.616-.625a.62.62 0 00-.616-.624H5.105a6.95 6.95 0 00-.01-.14 3.65 3.65 0 01-.015-.295c0-.02.002-.04.004-.06.002-.02.004-.04.004-.06h2.236c.339 0 .616-.28.616-.625a.62.62 0 00-.616-.624H5.287c.367-1.042 1.233-1.541 2.661-1.541.622 0 1.149.1 1.566.297a.614.614 0 00.818-.305.632.632 0 00-.3-.832c-.58-.275-1.28-.412-2.084-.412-2.148 0-3.495.989-3.932 2.793H3.5a.622.622 0 00-.616.624.62.62 0 00.616.625h.356c0 .02-.002.04-.004.06-.002.02-.005.04-.005.06 0 .095.009.183.018.27.005.055.01.109.013.165h-.375zm16.494 13.522c.53-.16.608-.325.608-.325v-.852l-.057.024c-.062.026-.124.053-.193.074-.605.185-1.386.286-2.204.286-.818 0-1.6-.101-2.204-.286a1.975 1.975 0 01-.19-.07c-.021-.01-.043-.02-.065-.028v.854c.01.023.103.171.605.325.977.297 2.714.297 3.7-.002zm-5.546-.311c-.09.086-.283.215-.602.313-.975.297-2.718.297-3.7.003-.354-.11-.536-.235-.614-.308v-.913l.085.035c.056.023.112.047.175.066.605.185 1.387.285 2.205.285.818 0 1.602-.1 2.204-.285.058-.018.11-.04.16-.061l.087-.035v.9zm-6.754.313c.342-.103.521-.238.605-.319v-.885a2.377 2.377 0 00-.093.037c-.05.02-.099.04-.156.058-.602.185-1.387.286-2.205.286-.817 0-1.602-.101-2.204-.286-.063-.019-.12-.042-.176-.066a2.8 2.8 0 00-.085-.035v.9c.076.075.258.198.617.308.98.302 2.722.3 3.697.002zm-4.16-2.504c.093-.059.227-.126.457-.196.98-.3 2.72-.3 3.7 0 .233.073.37.143.46.199-.095.059-.241.126-.457.193-.98.3-2.717.297-3.697 0a1.866 1.866 0 01-.462-.196zm6.608-2.515a2.013 2.013 0 00-.453.193c.09.059.224.129.459.199.98.297 2.723.297 3.697 0 .219-.067.362-.135.457-.193a1.69 1.69 0 00-.46-.2c-.977-.296-2.72-.296-3.7 0zm5.695-2.082c.092-.058.232-.126.454-.193.983-.302 2.72-.3 3.703 0 .232.073.37.14.46.2a1.98 1.98 0 01-.457.192c-.98.3-2.72.297-3.698 0a1.72 1.72 0 01-.462-.198zm-.151 3.605v.914c.078.075.263.199.61.302.984.3 2.718.3 3.7 0 .326-.1.519-.232.606-.32v-.896l-.076.032a1.87 1.87 0 01-.174.066c-.599.183-1.383.286-2.204.286-.82 0-1.602-.1-2.204-.286a1.612 1.612 0 01-.166-.06 2.276 2.276 0 00-.092-.038zm.08-2.273c.055.024.111.048.175.066.605.182 1.386.283 2.204.283.818 0 1.6-.1 2.205-.286.069-.02.127-.045.187-.07l.062-.025v.885c-.081.082-.263.216-.605.32-.978.3-2.717.3-3.698 0-.358-.11-.537-.233-.616-.308v-.9l.085.035zm-6.234 3.142c.078.075.26.199.616.308.983.297 2.717.3 3.697 0 .34-.104.519-.233.6-.317v-.887c-.03.01-.058.022-.086.034-.051.021-.103.043-.16.06-.6.186-1.384.286-2.205.286-.82 0-1.602-.1-2.205-.285a2.312 2.312 0 01-.175-.067 4.457 4.457 0 00-.085-.034v.902h.003zm12.302-4.336c0-.49-.258-1.154-1.487-1.53-1.205-.37-3.205-.37-4.412.006-.801.244-1.283.639-1.437 1.174-.034.112-.05.232-.05.352v.84a2.551 2.551 0 00-.25-.092c-1.201-.37-3.207-.37-4.411 0-.801.244-1.286.64-1.437 1.174-.034.112-.05.23-.05.353v.882a4.893 4.893 0 01-.064-.024c-.06-.023-.12-.047-.189-.068-1.204-.367-3.207-.367-4.412 0-.8.244-1.285.639-1.44 1.174v.002c-.03.113-.047.233-.047.35v2.311c0 .2.095.367.238.482.255.33.678.597 1.255.773.6.185 1.384.286 2.204.286.821 0 1.606-.1 2.205-.286.333-.103.622-.246.86-.417.235.168.53.31.882.417.602.185 1.384.286 2.205.286.82 0 1.605-.1 2.204-.286.334-.103.625-.246.863-.417.216.157.493.303.871.417.605.185 1.387.286 2.205.286.817 0 1.602-.1 2.207-.286 1.23-.375 1.487-1.039 1.487-1.529v-6.63z"
      ></path>
    </svg>
  );
};

MoneyRiseFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoneyRiseFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoneyRiseFilled;
