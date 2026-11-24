interface TimerInputProps {
  value: string
  onChange: (value: string) => void
  disabled: boolean
}

export const TimerInput = ({ value, onChange, disabled }: TimerInputProps) => {
  return (
    <input
      type="number"
      min="0"
      placeholder="Введіть секунди"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="timer-input"
    />
  )
}