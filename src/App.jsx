import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
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
      <Feedback feedbackObj={values} />
    </>
  );
}

export default App;
