export const Timer = () => {
  return (
    <>
      <div className='relative flex w-full max-w-[14rem] flex-col rounded-xl bg-white/30 bg-clip-border p-2 shadow-lg shadow-slate-500/80 m-1 ring-1 ring-black/5 backdrop-blur-lg'>
        <div className='flex-col relative m-0 my-2 overflow-hidden rounded-no bg-transparent bg-clip-border text-center text-gray-700 shadow-none'>
          <div className="flex align-middle text-center justify-between">
            <p className='flex self-start font-sans text-sm font-normal uppercase leading-normal text-slate-800 antialiased py-2.5 ms-3'>
              Mi Temporizador
            </p>
            <button className='flex self-end w-10 select-none rounded-lg bg-red-500 py-2.5 me-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-black/30 justify-center hover:bg-red-400 hover:text-white active:bg-red-600 active:text-slate-100'>
              X
            </button>
          </div>
          <h1 className='flex-3 my-3 block justify-center gap-0 font-sans text-4xl font-bold tracking-normal text-slate-800 antialiased'>
            15 : 24 : 36
          </h1>
        </div>
        <div className='m-0 mx-2 mb-2'>
          <button
            className='flex w-full select-none rounded-lg bg-green-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-slate-100 shadow-md shadow-black/30 justify-center hover:bg-green-400 hover:text-white active:bg-green-600 active:text-slate-100'
            type='button'
            data-ripple-dark='true'
          >
            iniciar
          </button>
        </div>
      </div>
    </>
  );
};
