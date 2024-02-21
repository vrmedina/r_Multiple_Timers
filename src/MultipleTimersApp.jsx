import { useState } from 'react';
import { Timers } from './timers/pages/Timers';
import { Header } from './ui/components/Header';

export const MultipleTimersApp = () => {
  const [timers, setTimers] = useState([]);

  const onCreateTimer = (initialSeconds) => {
    const id = parseInt(Date.now() * Math.random()).toString();
    setTimers([...timers, { id, initialSeconds }]);
  };

  const onDeleteTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <>
      <Header />
      <Timers
        timers={timers}
        onDeleteTimer={onDeleteTimer}
        onCreateTimer={onCreateTimer}
      />
    </>
  );
};
