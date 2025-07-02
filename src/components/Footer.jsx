import React from 'react'
import { Heart } from 'lucide-react'


const Footer = () => {
  return (
    <footer className="mt-8 sm:-mb-60 sm:mt-0 text-black border-t-[0.5px] border-zinc-400 min-w-2xl">
      <div className="flex items-center justify-center mt-2 gap-1">
        <span className="block">
          Made with <Heart className="inline border-none" /> by
        </span>
        <span className="block cursor-pointer text-black hover:underline">
          {" "}
          Yash
        </span>
      </div>
    </footer>
    
  )
}

export default Footer