import PropTypes from "prop-types";

const Options = ({ onClickFeedback, resetFeedback, resetButton }) => {
  return (
    <ul>
      <li>
        <button onClick={() => onClickFeedback("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => onClickFeedback("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onClickFeedback("bad")}>Bad</button>
      </li>
      {resetFeedback >= 1 && (
        <li>
          <button onClick={resetButton}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;

Options.protoType = {
  onClickFeedback: PropTypes.func,
  resetFeedback: PropTypes.bool,
  resetButton: PropTypes.func,
};
