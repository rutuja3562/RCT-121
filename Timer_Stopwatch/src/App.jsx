import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DisplayComponent } from "./components/DisplayComponent";
import { ButtonComponent } from "./components/ButtonComponent";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterve] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterve(setInterval(run, 20));
  };

  var updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  const resume = () => start();
  return (
    <div className="App">
      <DisplayComponent time={time} />
      <ButtonComponent
        status={status}
        resume={resume}
        reset={reset}
        stop={stop}
        start={start}
      />
    </div>
  );
}

export default App;
