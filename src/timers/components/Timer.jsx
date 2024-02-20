import { useEffect, useState } from 'react';
import { convertSecToHMS } from '../helpers/convertSecToHMS';
import { useTimer } from '../hooks/useTimer';

export const Timer = ({
  id,
  initialSeconds,
  initiallyRunning,
  onDeleteTimer,
}) => {
  const { seconds, start, pause, stop, reset, running, paused } = useTimer(
    initialSeconds,
    initiallyRunning
  );

  return (
    <>
      <div
        id={id}
        className='relative flex w-full max-w-[14rem] flex-col rounded-xl bg-white/30 bg-clip-border p-2 shadow-lg shadow-slate-500/80 m-1 ring-1 ring-black/5 backdrop-blur-sm'
      >
        <div className='flex-col relative m-0 my-2 overflow-hidden rounded-no bg-transparent bg-clip-border text-center text-gray-700 shadow-none'>
          <div className='flex align-middle text-center justify-between'>
            <input
              className='flex self-start font-sans font-bold shadow bg-white/40 appearance-none border-0 rounded-lg w-full py-2.5 px-2 m-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600'
              type='text'
              placeholder='Mi Temporizador'
            />
            <button
              className='flex self-end py-2 px-2 m-0 ms-1 select-none rounded-lg align-middle font-sans uppercase text-white shadow shadow-black/30 justify-center bg-red-500 hover:bg-red-600 hover:text-white active:bg-red-700 active:text-slate-100 ring-1 ring-black/15'
              type='button'
              onClick={() => onDeleteTimer(id)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#fff'
              >
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
              </svg>
            </button>
          </div>
          <h1 className='flex-3 my-2 block justify-center gap-0 font-sans text-4xl font-bold tracking-normal text-slate-800 antialiased'>
            {convertSecToHMS(seconds)}
          </h1>
        </div>
        <div className='flex'>
          <button
            className={`flex-1 select-none rounded-lg h-10 text-center align-middle font-sans text-sm font-bold uppercase text-slate-100 shadow shadow-black/30 justify-center 
            ${
              paused === -1
                ? 'bg-green-600 hover:bg-green-700 active:bg-green-800'
                : paused === 1
                ? 'bg-orange-600 hover:bg-orange-700 active:bg-orange-800'
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            } 
            hover:text-white active:text-slate-100`}
            type='button'
            data-ripple-dark='true'
            onClick={() => (running ? pause() : start())}
          >
            {running ? 'pausar' : paused === -1 ? 'iniciar' : 'reanudar'}
          </button>
          {(running || paused === 1) && (
            <button
              className='flex-1 select-none rounded-lg bg-red-500 h-10 mx-1 text-center align-middle font-sans text-sm font-bold uppercase text-slate-100 shadow shadow-black/30 justify-center hover:bg-red-400 hover:text-white active:bg-red-600 active:text-slate-100'
              type='button'
              data-ripple-dark='true'
              onClick={() => (running || paused) && stop()}
            >
              detener
            </button>
          )}
        </div>
      </div>
    </>
  );
};
