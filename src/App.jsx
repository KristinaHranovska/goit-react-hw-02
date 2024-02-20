import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const typeRewiews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <>
      <Description />
      <Options />
      <Feedback
        goodMark={typeRewiews.good}
        neutralMark={typeRewiews.neutral}
        badMark={typeRewiews.bad}
      />
    </>
  );
}

export default App;
