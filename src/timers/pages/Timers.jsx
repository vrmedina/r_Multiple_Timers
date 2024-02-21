import { Timer } from '../components/Timer';
import { ConfigBar } from '../components/ConfigBar';

export const Timers = ({ timers, onDeleteTimer, onCreateTimer }) => {
  return (
    <>
      <ConfigBar timers={timers} onCreateTimer={onCreateTimer} />
      <div className='flex flex-wrap justify-center container mx-auto'>
        {timers.length > 0 && timers.map((timer) => (
          <Timer key={timer.id} onDeleteTimer={onDeleteTimer} {...timer} />
        ))}
      </div>
    </>
  );
};
