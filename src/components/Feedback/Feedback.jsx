import PropTypes from "prop-types";

const Feedback = ({ feedbackObj, feedbackTotal, feedbackPositive }) => {
  const { good, neutral, bad } = feedbackObj;

  return (
    <>
      <p>❤️ Good: {good}</p>
      <p>😒 Neutral: {neutral}</p>
      <p>😢 Bad: {bad}</p>
      <p>🤩 Total: {feedbackTotal}</p>
      <p>💕 Positive: {feedbackPositive}%</p>
    </>
  );
};

export default Feedback;

Feedback.protoType = {
  feedbackObj: PropTypes.objectOf(PropTypes.number),
  feedbackTotal: PropTypes.number,
  feedbackPositive: PropTypes.number,
};
