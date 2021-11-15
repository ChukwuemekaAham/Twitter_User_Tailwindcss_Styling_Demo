import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const Agent = () => {
  return (

   
  <Popup
      trigger={<button class="absolute right-10 bottom-10 w-10 my-1 rounded-full bg-blue-500 
      hover:bg-blue-400 cursor-pointer p-2 text-white"><FontAwesomeIcon icon={faComment} /></button>}
      modal
      nested
     
    >
      {close => (
      
        <div class="modal bg-gradient-to-tr from-blue-900 to-blue-500 p-5 rounded">
          <button class="close bg-blue-200 hover:bg-blue-300 text-blue" onClick={close}>&times;</button>
          {' '}
           
            
            <div class="w-full flex flex-col justify-center items-center bg-opacity-25 bg-blue-600 backdrop">
              <h1 class="text-3xl md:text-3xl font-extrabold text-white my-2 md:my-0">
                Twitter React
              </h1>
              <p class="mb-2 text-white hidden md:block font-mono">
                simple modal login
              </p>
            </div>
            <div class="w-full flex flex-col items-center bg-white py-5 md:py-8 px-4">
              <h3 class="mb-4 font-bold text-3xl flex items-center text-blue-500">
                  Sign Up
              </h3>
              <form action="#" class="px-3 flex flex-col justify-center items-center w-full gap-3">
                <input 
                  type="email" placeholder="you@example.com"
                  class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                />
                <input 
                  type="password" placeholder="password"
                  class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                />
                <button class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1">
                  <svg class="w-5 h-5 inline"fill="none"stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                  <p class="ml-1 text-2lg">
                    Register
                  </p>
                </button>
              </form>
              <p class="text-gray-700 text-sm mt-4">
                <span class="mr-1"> already have an account? </span>
                
                <a href="#" class="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline">
                  login
                </a>
              </p>
            </div>
          
          
          
          
          
          
          
        </div>
        
      
    )}
  
  </Popup>
  );
}

export default Agent;
