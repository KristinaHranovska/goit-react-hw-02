import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

import { useState } from "react";

function App() {
  const typeRewiews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // values - obj typeRewiews
  const [values, setValues] = useState(typeRewiews);
  const totalFeedback = values.good + values.neutral + values.bad;

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options
        onClickFeedback={(feedbackType) => updateFeedback(feedbackType)}
      />
      {totalFeedback >= 1 && (
        <Feedback feedbackObj={values} feedbackTotal={totalFeedback} />
      )}
      {totalFeedback < 1 && <Notification />}
    </>
  );
}

export default App;
