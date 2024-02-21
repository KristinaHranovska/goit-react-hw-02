import PropTypes from "prop-types";
import css from "./Feedback.module.css";

const Feedback = ({ feedbackObj, feedbackTotal, feedbackPositive }) => {
  const { good, neutral, bad } = feedbackObj;

  return (
    <>
      <div className={css.divContainer}>
        <p className={css.feedbackParagraf}>❤️ Good: {good}</p>
        <p className={css.feedbackParagraf}>😒 Neutral: {neutral}</p>
        <p className={css.feedbackParagraf}>😢 Bad: {bad}</p>
      </div>
      <div className={css.divContainer}>
        <p className={css.feedbackParagraf}>🤩 Total: {feedbackTotal}</p>
        <p className={css.feedbackParagraf}>💕 Positive: {feedbackPositive}%</p>
      </div>
    </>
  );
};

export default Feedback;

Feedback.protoType = {
  feedbackObj: PropTypes.objectOf(PropTypes.number),
  feedbackTotal: PropTypes.number,
  feedbackPositive: PropTypes.number,
};
