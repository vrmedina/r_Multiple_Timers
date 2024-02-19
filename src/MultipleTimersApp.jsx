import { Timers } from './timers/pages/Timers';
import { Header } from './ui/components/Header';

export const MultipleTimersApp = () => {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <div className='m-0 p-0'>
        <Timers />
      </div>
    </>
  );
};
