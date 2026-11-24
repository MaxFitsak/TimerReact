interface TimerDisplayProps {
  secondsLeft: number;
}

export const TimerDisplay = ({ secondsLeft }: TimerDisplayProps) => {
  return <div className="timer-display">{secondsLeft}</div>;
};