import { useState, useEffect } from 'react';
import { TimerInput } from './components/TimerInput';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerControls } from './components/TimerControl';
import './components/Timer.css';

export const App = () => {
  const [inputValue, setInputValue] = useState<string>('30');
  const [secondsLeft, setSecondsLeft] = useState<number>(30);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleInputChange = (val: string) => {
    setInputValue(val);
    const parsed = parseInt(val, 10);
    setSecondsLeft(!isNaN(parsed) && parsed >= 0 ? parsed : 0);
  };

  const handleStart = () => {
    if (secondsLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    const parsed = parseInt(inputValue, 10);
    setSecondsLeft(!isNaN(parsed) && parsed >= 0 ? parsed : 0);
  };

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div className="timer-container">
      <h1 className="timer-title">Timer</h1>
      <TimerInput
        value={inputValue}
        onChange={handleInputChange}
        disabled={isRunning}
      />
      <TimerDisplay secondsLeft={secondsLeft} />
      <TimerControls
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        isRunning={isRunning}
      />
    </div>
  );
};

export default App;