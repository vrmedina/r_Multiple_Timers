import { useState } from 'react';
import { Timer } from '../components/Timer';
import { ConfigBar } from '../components/ConfigBar';

const initialState = [
  { id: 1, initialSeconds: 60, initiallyRunning: false },
  { id: 2, initialSeconds: 3600, initiallyRunning: false},
];

export const Timers = () => {
  const [timers, setTimers] = useState(initialState);

  const onCreateTimer = () => {
    setTimers([...timers, { id: Date.now.toString(), initialSeconds: 18000 }]);
  };

  const onDeleteTimer = (id) => {
    setTimers(timers.filter( (timer) => timer.id !== id));
  }

  return (
    <>
      <ConfigBar />
      <div className='flex flex-wrap justify-center container mx-auto'>
        {timers.map((timer) => (
          <Timer key={timer.id} onDeleteTimer={onDeleteTimer} {...timer} />
        ))}
      </div>
    </>
  );
};
