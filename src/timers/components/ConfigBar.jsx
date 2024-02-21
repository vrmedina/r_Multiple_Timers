import { useForm } from '../../hooks/useForm';
import { preventPasteNegative } from '../helpers/preventPasteNegative';

export const ConfigBar = ({ onCreateTimer }) => {
  const { formState, onInputChange, onResetForm, seconds, minutes, hours } =
    useForm({
      seconds: '',
      minutes: '',
      hours: '',
    });

  const totalSeconds = () => {
    const revisedHours = hours && hours > 0 ? hours : 0;
    const revisedMinutes = minutes && minutes > 0 ? minutes : 0;
    const revisedSeconds = seconds && seconds > 0 ? seconds : 0;
    return +revisedHours * 60 * 60 + +revisedMinutes * 60 + +revisedSeconds;
  };

  return (
    <div className='flex mx-5 my-2 px-3 rounded-lg bg-white/30 py-2.5 dark:bg-gray-800/20 backdrop-blur-sm ring-1 ring-black/5 shadow-md shadow-slate-500/60'>
      <input
        type='number'
        name='hours'
        placeholder='00'
        className='flex font-sans text-center font-bold shadow bg-white/40 appearance-none border-0 rounded-lg w-14 py-2.5 px-1 my-0 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600'
        value={hours}
        onChange={onInputChange}
        onPaste={preventPasteNegative}
      />
      <input
        type='number'
        name='minutes'
        placeholder='00'
        className='flex font-sans text-center font-bold shadow bg-white/40 appearance-none border-0 rounded-lg w-14 py-2.5 px-1 my-0 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600'
        value={minutes}
        onChange={onInputChange}
        onPaste={preventPasteNegative}
      />
      <input
        type='number'
        name='seconds'
        placeholder='00'
        className='flex font-sans text-center font-bold shadow bg-white/40 appearance-none border-0 rounded-lg w-14 py-2.5 px-1 my-0 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600'
        value={seconds}
        onChange={onInputChange}
        onPaste={preventPasteNegative}
      />
      <button
        className='flex text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 active:ring-2 active:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mx-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 focus:outline-none dark:active:ring-blue-800 shadow shadow-black/30'
        onClick={() => {
          onResetForm();
          onCreateTimer(totalSeconds);
        }}
      >
        Add Timer
      </button>
    </div>
  );
};
