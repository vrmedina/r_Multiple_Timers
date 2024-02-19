export const Timer = () => {
  return (
    <>
      <div className='relative flex w-full max-w-[12rem] flex-col rounded-xl bg-gradient-to-tr from-gray-600 to-gray-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40 m-3'>
        <button className="flex justify-center rounded-lg bg-red-500 hover:bg-red-700 text-lg font-bold w-2.5">
            X
        </button>
        <div className='relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none'>
          <p className='block font-sans text-sm font-normal uppercase leading-normal text-white antialiased'>
            Mi Temporizador
          </p>
          <h1 className='mt-2 flex justify-center gap-0 font-sans text-2xl font-normal tracking-normal text-white antialiased'>
            1h 30m 25s
          </h1>
        </div>
        <div className='m-0 p-0'>
          <button
            className='flex w-full select-none rounded-lg bg-green-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none justify-center'
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
