import React from 'react';
import PropTypes from 'prop-types';

const ConferenceLight = props => {
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
        d="M19.395 6.557h-2.804V5.47a.41.41 0 00-.12-.289l-.678-.675a.82.82 0 00.235-.568.812.812 0 00-.24-.577l-.967-.964a.818.818 0 00-1.16 0l-.59.588a.818.818 0 000 1.157l.966.961a.819.819 0 001.16 0l.016-.017.558.555v.919H8.258v-.92l.552-.548.01.011a.819.819 0 001.16 0l.967-.96a.818.818 0 000-1.158l-.588-.588a.823.823 0 00-1.163 0l-.966.964a.814.814 0 00-.003 1.151l-.672.67a.398.398 0 00-.12.288v1.087H4.632a.818.818 0 00-.82.818v1.364c0 .45.37.818.82.818h.785v1.252a.82.82 0 00.82.818h1.297v7.37H6.261a.818.818 0 00-.821.817v1.213a.82.82 0 00.82.818h11.513c.454 0 .821-.364.821-.818v-1.213a.82.82 0 00-.82-.817h-1.275v-7.37h1.297c.454 0 .82-.364.82-.818V9.557h.782a.82.82 0 00.82-.818V7.375a.824.824 0 00-.823-.818zm0 2.182H17.81c-.003 0-.006 0-.009-.002H6.23l-.011.002H4.633V7.375h14.762v1.364zm-1.602 2.067H6.238V9.554h11.555v1.252zm-9.44 8.188h7.322v-7.367H8.353v7.367zm-2.095 2.03H17.77v-1.212H6.258v1.213zm3.52-18.05l.59.588-.967.961-.588-.585.966-.964zm4.46-.003l-.588.589.966.96.589-.585-.967-.964z"
      ></path>
    </svg>
  );
};

ConferenceLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ConferenceLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ConferenceLight;
