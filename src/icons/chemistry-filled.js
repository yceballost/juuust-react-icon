import React from 'react';
import PropTypes from 'prop-types';

const ChemistryFilled = props => {
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
        d="M15.826 12.278l5.804 7.658c.269.414.286.88.067 1.274-.218.398-.65.639-1.112.639H3.333c-.42 0-.818-.224-1.02-.588a1.12 1.12 0 01.017-1.16l5.838-7.832.81-1.075v-7.79H8.22a.632.632 0 01-.633-.622c0-.34.289-.622.633-.622h7.572c.355 0 .633.283.633.622a.626.626 0 01-.633.622h-.785v7.79l.818 1.084zm-5.709-.513l-.339.457c1.365.215 3.056.215 4.44.008l-.344-.465a.587.587 0 01-.126-.373V3.404h-3.505v7.989a.605.605 0 01-.126.372zm4.076 7.84h.126c.723-.017 1.566-.448 1.566-1.622 0-1.165-.84-1.605-1.566-1.621h-.134c-.726 0-1.569.431-1.569 1.613 0 .597.21.992.515 1.25.303.257.7.372 1.062.38zm-4.23-2.557h-.075c-.521-.008-1.053-.347-1.053-1.092 0-.737.529-1.076 1.053-1.076h.075c.53.008 1.062.347 1.062 1.084 0 .737-.532 1.075-1.062 1.084z"
      ></path>
    </svg>
  );
};

ChemistryFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChemistryFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChemistryFilled;
