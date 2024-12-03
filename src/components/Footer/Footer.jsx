import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 z-20 sticky">
      <div className="flex flex-col items-center text-center text-base">
        <p className="mb-2">
          <img
            className="w-10 h-10 md:w-10 md:h-10 object-contain mb-4"
            src="/images/coatofarm.png"
            alt="Logo 1"
          />
        </p>
        <p className="">
          &copy; Copyright 2024 | CAC | All rights reserved | Powered by CAC Corporate Affairs Commission
        </p>
        <p className="block mt-2">ICT HELPDESK</p>
      </div>
    </footer>


  )
}

export default Footer

/*<footer className="bg-green-800 text-white mt-14 py-8">
      <div className="flex justify-center items-center text-base">
        <p><img className="w-10 h-10 md:w-10 md:h-10 object-contain mb-4" src="/images/coatofarm.png" alt="Logo 1" /></p>
        <p className="text-white">&copy; Copyright 2024 | CAC | All rights reserved | Powered by CAC Corporate Affairs Commisssion </p>
        
        <br />
        <p>ICT HELPDESK</p>
      </div>
    </footer>*/