import PropTypes from "prop-types";

const Feedback = ({ feedbackObj }) => {
  const { good, neutral, bad } = feedbackObj;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      {totalFeedback > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </>
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
};

export default Feedback;

Feedback.protoType = {
  feedbackObj: PropTypes.objectOf(PropTypes.number),
};
