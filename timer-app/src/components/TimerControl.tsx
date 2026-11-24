interface TimerControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  isRunning: boolean;
}

export const TimerControls = ({
  onStart,
  onStop,
  onReset,
  isRunning,
}: TimerControlsProps) => {
  return (
    <div className="timer-controls">
      <button onClick={onStart} disabled={isRunning} className="btn btn-start">
        Старт
      </button>
      <button onClick={onStop} disabled={!isRunning} className="btn btn-stop">
        Стоп
      </button>
      <button onClick={onReset} className="btn btn-reset">
        Скинути
      </button>
    </div>
  );
};