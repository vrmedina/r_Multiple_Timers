export const ConfigBar = () => {
  return (
    <div className='flex mx-5 my-1 px-3 rounded-lg bg-white/30 py-2.5 dark:bg-gray-800 backdrop-blur-lg ring-1 ring-black/5'>
      <input
        className='flex font-sans text-center font-bold shadow bg-white/40 appearance-none border-0 rounded-lg w-14 py-2.5 px-2 my-0 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600'
        id='hours'
        name='hours'
        type='text'
        placeholder="00"
      />
      <input
        className='flex font-sans text-center font-bold shadow bg-white/40 appearance-none border-0 rounded-lg w-14 py-2.5 px-2 my-0 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600'
        id='minutes'
        name='minutes'
        type='text'
        placeholder="00"
      />
      <input
        className='flex font-sans text-center font-bold shadow bg-white/40 appearance-none border-0 rounded-lg w-14 py-2.5 px-2 my-0 mx-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600'
        id='seconds'
        name='seconds'
        type='text'
        placeholder="00"
      />
      <button
        className='flex text-white bg-blue-700 hover:bg-blue-800 active:ring-2 active:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:active:ring-blue-800'
        onClick={() => onCreateTimer()}
      >
        Add Timer
      </button>
    </div>
  );
};
