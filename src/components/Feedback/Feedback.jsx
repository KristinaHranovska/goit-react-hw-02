import PropTypes from "prop-types";

const Feedback = ({ feedbackObj, feedbackTotal }) => {
  const { good, neutral, bad } = feedbackObj;

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </>
  );
};

export default Feedback;

Feedback.protoType = {
  feedbackObj: PropTypes.objectOf(PropTypes.number),
  feedbackTotal: PropTypes.number,
};
