import { useState, useCallback } from 'react';
import { useSecondsInterval } from '../../hooks/useSecondsInterval';

export const useTimer = (initialSeconds = 60, initiallyRunning = false) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const [paused, setPaused] = useState(-1);

  const tick = useCallback(() => {
    if (running) {
      setSeconds((seconds) => seconds - 1);
    } else {
      return undefined;
    }
  }, [running]);

  const start = () => {
    setRunning(true);
    setPaused(0);
  };
  const pause = () => {
    setRunning(false);
    setPaused(1);
  };
  const stop = () => {
    setRunning(false);
    setPaused(-1);
    reset();
  };
  const reset = () => setSeconds(initialSeconds);

  useSecondsInterval(tick);

  return { seconds, running, paused, start, pause, stop, reset };
};
