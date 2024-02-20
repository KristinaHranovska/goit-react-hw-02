import PropTypes from "prop-types";

const Feedback = ({ goodMark, neutralMark, badMark }) => {
  return (
    <>
      <p>Good: {goodMark}</p>
      <p>Neutral: {neutralMark}</p>
      <p>Bad: {badMark}</p>
    </>
  );
};

export default Feedback;

Feedback.protoType = {
  goodMark: PropTypes.number,
  neutralMark: PropTypes.number,
  badMark: PropTypes.number,
};
